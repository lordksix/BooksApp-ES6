import btnGen from './buttonGeneratorMod.js';
import extraAtt from './elementExtraAttrMod.js';
import elemGen from './elementGeneratorMod.js';

/**
 * Description
 * @param {string} title Name of title of book to be created
 * @param {string} author Name of author of book to be created
 * @param {number} index index position in array of books of the book to be removed.
 * @param {string} classes name of class to be used to add book to bookshelf.
 * @returns {HTMLDivElement} returns HTML Div element with book information.
 */
const createBookDiv = (title, author, index, classes) => {
  const bookDiv = elemGen.createElementDefault('div', classes);
  const bookPara = elemGen.createElementDefault('p', false, `"${title}" by ${author}`);
  bookDiv.append(bookPara);
  const removeBtn = btnGen.createButton('button', 'removeBtn', 'Remove Book', 'Remove');
  extraAtt.addAttributes(removeBtn, 'index', `${index}`);
  extraAtt.addAttributes(bookDiv, 'book', `${index}`, removeBtn);
  return bookDiv;
};

/**
 * Class of Book to be instatiated with 2 properties
 * @param {string} Title Name of title of book
 * @param {string} Author Name of author of book
 * @returns {object} New class with title and author properties
 */
class Book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

export {
  Book,
  createBookDiv,
};
