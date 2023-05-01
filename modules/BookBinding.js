import { Book, createBookDiv } from './BooksMod.js';

/**
 * Class that creates and array to book class instances to be added to local storage
 * and added to DOM.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @returns {object} return instance of bookbiding class with an array of book class instances.
 */
class BookBinding {
  constructor(localName) {
    this.awesomeBooks = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    this.localName = localName;
  }

  /**
   * Method to remove book to local staorage, bookbiding and from DOM.
   * @param {string} title Name of title of book to be created
   * @param {string} author Name of author of book to be created
   * @param {HTMLElement} bookshelf HTML element where books are going to be added.
   * @param {string} bookDivName name of class to be used to add book to bookshelf.
   * @returns {void}
   */
  add(title, author, bookshelf, bookDivName) {
    if (title.value.length && author.value.length) {
      const book = new Book(title.value.trim(), author.value.trim());
      this.awesomeBooks = this.awesomeBooks.concat(book);
      localStorage.setItem(this.localName, JSON.stringify(this.awesomeBooks));
      const index = this.awesomeBooks.length - 1;
      bookshelf.appendChild(createBookDiv(title.value, author.value, index, bookDivName));
    }
    title.value = '';
    author.value = '';
  }

  /**
   * Method to remove book from local staorage, bookbiding and from DOM.
   * @param {number} index position in array of books of the book to be removed.
   * @param {HTMLElement} bookRemove HTMLElement with book to be removed
   * @param {HTMLElement} bookshelf HTML element where books are going to be added.
   * @returns {void}
   */
  removeBook(index, bookRemove, bookshelf) {
    const firstHalf = this.awesomeBooks.slice(0, index);
    const secondHalf = this.awesomeBooks.slice(index + 1, this.awesomeBooks.length);
    this.awesomeBooks = firstHalf.concat(secondHalf);
    localStorage.setItem(this.localName, JSON.stringify(this.awesomeBooks));
    bookshelf.removeChild(bookRemove);
  }

  /**
   * Static method of BookBiding. Updates Local Storate and re renders bookshelf section.
   * @param {HTMLElement} bookshelf HTML element where books are going to be added.
   * @param {string} localName name to be used to add bookbinding to local storage.
   * @param {string} bookDivName name of class to be used to add book to bookshelf.
   * @returns {void} Void
   */
  static update(bookshelf, localName, bookDivName) {
    const awesomeBooks = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    const bookshelfFrag = document.createDocumentFragment();
    awesomeBooks.forEach((book, i) => {
      bookshelfFrag.append(
        createBookDiv(book.Title, book.Author, i, bookDivName),
      );
    });
    bookshelf.innerHTML = '';
    bookshelf.appendChild(bookshelfFrag);
  }
}

export default {
  BookBinding,
};