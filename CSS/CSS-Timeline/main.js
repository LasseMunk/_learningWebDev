// find every item with the #timeline li selector
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// for each item which is found, run this code
// if the element is in the viewport
const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events - the code runs on page-load, if page is resized
// or if the user scrolls
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
