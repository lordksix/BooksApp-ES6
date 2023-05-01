const addAttributes = (elem,
  data = false, index = 0, innerChild = null) => {
  if (data) elem.setAttribute(`data-${data}`, index);
  if (innerChild) elem.appendChild(innerChild);
  return elem;
};

export default {
  addAttributes,
};