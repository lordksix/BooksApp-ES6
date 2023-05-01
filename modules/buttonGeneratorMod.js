import addClass from './elementAddClassMod.js';

const createButton = (func, classes, ariaLabel, href = null) => {
  const button = document.createElement('button');
  button.type = func;
  button.ariaLabel = ariaLabel;
  addClass.addClass(button, classes);
  if (href) {
    button.addEventListener('click', () => {
      window.location.href = href;
    });
  }

  return button;
};

export default {
  createButton,
};