import addClass from './elementAddClassMod.js';

const createButton = (func, classes, ariaLabel, textContent = null, href = null) => {
  const button = document.createElement('button');
  button.type = func;
  button.ariaLabel = ariaLabel;
  addClass.addClass(button, classes);
  if (textContent) button.textContent = textContent;
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