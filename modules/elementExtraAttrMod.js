const addAttributes = (elem, textContent = null,
  data = null, index = null, innerChild = null) => {
  if (data) elem.setAttribute(`data-${data}`, index);
  if (textContent) elem.textContent = textContent;
  if (innerChild) elem.appendChild(innerChild);
  return elem;
};

export default {
  addAttributes,
};