/**
 * HELPER EVENT LISTENER THAT HANDLES THE NAVIGATION (HAMBURGER)
 * MENU RESPONSE FOR MOBILE MENU (RESPONSIVE HEADER)
 */

//// GRAB NECESSARY SELECTORS TO HANDLE THE USER'S CLICK EVENT
const primaryNavigation = document.querySelector('.primary__navigation');
const navigationToggle = document.querySelector('.mobile__nav__toggle');

/**
 * EVENT LISTENER HANDLER ADDED TO OUR BUTTON IN ORDER TO TRIGGER
 * OUR CSS(_HEADER.CSS) DATA-VISIBLE ATTRIBUTES (false/true)
 * @returns NULL HANDLES ONLY THE CLICK EVENT
 */
navigationToggle.addEventListener('click', function () {
  const visibility = primaryNavigation.getAttribute('data-visible');
  console.log(visibility);
  if (visibility === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    navigationToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNavigation.setAttribute('data-visible', false);
    navigationToggle.setAttribute('aria-expanded', false);
  }
  return;
});
