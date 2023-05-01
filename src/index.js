// import { DateTime } from 'luxon';
import BBClass from '../modules/BookBinding.js';

const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookshelf = document.querySelector('.bookshelf');
const localStorageName = 'Books';
const bookDivName = 'book-row';

const navItem = document.querySelectorAll('.nav a');
const section = document.querySelectorAll('section');

const timeP = document.querySelector('.time');
// Instatiate BookBiding Class
const bookBinding = new BBClass.BookBinding(localStorageName);

/**
 * Function to change visibility of section depending of navlink selected.
 * @param {NodeList} section List of Node of sections of webpage
 * @returns {void}
 */
const sectionRender = (section) => {
  const { hash } = window.location;
  if (hash.length > 1) {
    section.forEach((section) => {
      if (section.id === hash.substring(1)) section.style.display = 'flex';
      else section.style.display = 'none';
    });
    navItem.forEach((link) => {
      if (link.getAttribute('href') === hash.substring(1)) link.classList.add('active');
      else link.classList.remove('active');
    });
  }
};

/**
 * Function to render lasted array of books
 * @returns {void}
 */
const spaLoad = () => {
  BBClass.BookBinding.update(bookshelf, localStorageName, bookDivName);
  sectionRender(section);
  // timeP.textContent = DateTime.now();
};

// remove book from localstorage, dom and bookbinding instance
bookshelf.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    const index = parseInt(e.target.dataset.index, 10);
    const bookRemove = document.querySelector(`[data-book="${index}"]`);
    bookBinding.removeBook(index, bookRemove, bookshelf);
    bookshelf.innerHTML = '';
    BBClass.BookBinding.update(bookshelf, localStorageName, bookDivName);
  }
});

// Select section to show
navItem.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.classList.add('active');
    window.location.hash = link.getAttribute('href');
    sectionRender(section);
  });
});

// add book to localstorage, dom and bookbinding instance
add.addEventListener('click', (e) => {
  e.preventDefault();
  bookBinding.add(title, author, bookshelf, bookDivName);
});

// render lasted array of books
window.addEventListener('load', spaLoad);
