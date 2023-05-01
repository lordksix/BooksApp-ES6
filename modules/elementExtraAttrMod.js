const addAttributes = (elem,
  data = null, index = null, innerChild = null) => {
  if (data) elem.setAttribute(`data-${data}`, index);
  if (innerChild) elem.appendChild(innerChild);
  return elem;
};

export default {
  addAttributes,
};