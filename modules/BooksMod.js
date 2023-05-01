import elemGen from './elementGeneratorMod.js';
import btnGen from './buttonGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';

const createBookDiv = (title, author, index, classes) => {
  const bookDiv = elemGen.createElementDefault('div', classes);
  const bookPara = elemGen.createElementDefault('p', false, `"${title}" by ${author}`);
  bookDiv.append(bookPara);
  const removeBtn = btnGen.createButton('button', 'removeBtn', 'Remove Book', 'Remove');
  extraAtt.addAttributes(removeBtn, 'index', `${index}`);
  extraAtt.addAttributes(bookDiv, 'book', `${index}`, removeBtn);
  return bookDiv;
};

class Book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

export {
  createBookDiv,
  Book,
};