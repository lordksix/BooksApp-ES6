import { Book, createBookDiv } from './BooksMod.js';

class BookBinding {
  constructor(localName) {
    this.awesomeBooks = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    this.localName = localName;
  }

  add(title, author, bookshelf, classes) {
    if (title.value.length && author.value.length) {
      const book = new Book(title.value.trim(), author.value.trim());
      this.awesomeBooks = this.awesomeBooks.concat(book);
      localStorage.setItem(this.localName, JSON.stringify(this.awesomeBooks));
      const index = this.awesomeBooks.length - 1;
      bookshelf.appendChild(createBookDiv(title.value, author.value, index, classes));
    }
    title.value = '';
    author.value = '';
  }

  removeBook(index, bookRemove, bookshelf) {
    const firstHalf = this.awesomeBooks.slice(0, index);
    const secondHalf = this.awesomeBooks.slice(index + 1, this.awesomeBooks.length);
    this.awesomeBooks = firstHalf.concat(secondHalf);
    localStorage.setItem(this.localName, JSON.stringify(this.awesomeBooks));
    bookshelf.removeChild(bookRemove);
  }

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