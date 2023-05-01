import addClass from './elementAddClassMod.js';

const createElementDefault = (elem, classes, innerChild = null,
  textContent = null, data = null, index = null) => {
  const element = document.createElement(elem);
  addClass.addClass(element, classes);
  if (data) element.setAttribute(`data-${data}`, index);
  if (innerChild) element.appendChild(innerChild);
  if (textContent) element.textContent = textContent;
  return element;
};

export default {
  createElementDefault,
};