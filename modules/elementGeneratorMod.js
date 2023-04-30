const createElementDefault = (elem, classes, innerChild = null,
  textContent = null, data = null, index = null) => {
  const element = document.createElement(elem);
  if ((typeof classes) === 'string') element.classList.add(`${classes}`);
  else if ((typeof classes) === 'object') classes.forEach((class0) => element.classList.add(`${class0}`));
  if (data) element.setAttribute(`data-${data}`, index);
  if (innerChild) element.appendChild(innerChild);
  if (textContent) element.textContent = textContent;
  return element;
};

export default {
  createElementDefault,
};