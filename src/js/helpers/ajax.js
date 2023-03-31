import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from '../config';

/**
 * TIMEOUT THE CONNECTION IS API GET IS REJECTED
 * @param {number} seconds TO CREATE THE TIMEOUT IN SECONDS (CHECK TO SEE IF IT TIMESOUT THE REQUEST)
 * @returns {Promise | reject} PROMISE (REJECT)
 */
const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, seconds * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Conent-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok) throw new Error(`${response.status}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
