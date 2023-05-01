/**
 * Function to add dataset or append childs to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {string} data key of dataset key-value property to be added
 * @param {string} index=0 value of dataset key-value property to be added
 * @param {HTMLElement} innerChild HTML Element to be appended
 * @returns {HTMLElement} Returns HTML element with chosen attributes
 */
const addAttributes = (elem,
  data = false, index = 0, innerChild = null) => {
  if (data) elem.setAttribute(`data-${data}`, index);
  if (innerChild) elem.appendChild(innerChild);
  return elem;
};

export default {
  addAttributes,
};