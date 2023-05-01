/**
 * Function to add class or classes to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {String} classes String or Array of String to be added.
 * @returns {HTMLElement} Returns HTML element with chosen classes.
 */
const addClass = (elem, classes) => {
  if ((typeof classes) === 'string') elem.classList.add(`${classes}`);
  else if ((typeof classes) === 'object') classes.forEach((class0) => elem.classList.add(`${class0}`));
  return elem;
};

export default {
  addClass,
};