import addClass from './elementAddClassMod.js';

const createElementDefault = (elem, classes, textContent = false) => {
  const element = document.createElement(elem);
  addClass.addClass(element, classes);
  if (textContent) element.textContent = textContent;
  return element;
};

export default {
  createElementDefault,
};