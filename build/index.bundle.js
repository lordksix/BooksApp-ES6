"use strict";
(self["webpackChunkbooksapp_es6"] = self["webpackChunkbooksapp_es6"] || []).push([["index"],{

/***/ "./modules/BookBinding.js":
/*!********************************!*\
  !*** ./modules/BookBinding.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BooksMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BooksMod.js */ "./modules/BooksMod.js");


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
      const book = new _BooksMod_js__WEBPACK_IMPORTED_MODULE_0__.Book(title.value.trim(), author.value.trim());
      this.awesomeBooks = this.awesomeBooks.concat(book);
      localStorage.setItem(this.localName, JSON.stringify(this.awesomeBooks));
      const index = this.awesomeBooks.length - 1;
      bookshelf.appendChild((0,_BooksMod_js__WEBPACK_IMPORTED_MODULE_0__.createBookDiv)(title.value, author.value, index, bookDivName));
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
        (0,_BooksMod_js__WEBPACK_IMPORTED_MODULE_0__.createBookDiv)(book.Title, book.Author, i, bookDivName),
      );
    });
    bookshelf.innerHTML = '';
    bookshelf.appendChild(bookshelfFrag);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  BookBinding,
});

/***/ }),

/***/ "./modules/BooksMod.js":
/*!*****************************!*\
  !*** ./modules/BooksMod.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book),
/* harmony export */   "createBookDiv": () => (/* binding */ createBookDiv)
/* harmony export */ });
/* harmony import */ var _buttonGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonGeneratorMod.js */ "./modules/buttonGeneratorMod.js");
/* harmony import */ var _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementExtraAttrMod.js */ "./modules/elementExtraAttrMod.js");
/* harmony import */ var _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementGeneratorMod.js */ "./modules/elementGeneratorMod.js");




/**
 * Description
 * @param {string} title Name of title of book to be created
 * @param {string} author Name of author of book to be created
 * @param {number} index index position in array of books of the book to be removed.
 * @param {string} classes name of class to be used to add book to bookshelf.
 * @returns {HTMLDivElement} returns HTML Div element with book information.
 */
const createBookDiv = (title, author, index, classes) => {
  const bookDiv = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_2__["default"].createElementDefault('div', classes);
  const bookPara = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_2__["default"].createElementDefault('p', false, `"${title}" by ${author}`);
  bookDiv.append(bookPara);
  const removeBtn = _buttonGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton('button', 'removeBtn', 'Remove Book', 'Remove');
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(removeBtn, 'index', `${index}`);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(bookDiv, 'book', `${index}`, removeBtn);
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




/***/ }),

/***/ "./modules/buttonGeneratorMod.js":
/*!***************************************!*\
  !*** ./modules/buttonGeneratorMod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementAddClassMod.js */ "./modules/elementAddClassMod.js");


/**
 * Function to create HTML Button element. Classes and text content
 * can be added as element is create. Click event to a another webpage can be added.
 * @param {string} func Type of button `sumbit, reset, button`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {string} ariaLabel Text for accessibility
 * @param {any} textContent Text to be added as text content to HTML element.
 * Option parameter.
 * @param {any} href Hyperlink reference to be followed if button is clicked.
 * Option parameter.
 * @returns {HTMLButtonElement} Returns HTML button element chosen with set attributes.
 */
const createButton = (func, classes, ariaLabel, textContent = false, href = false) => {
  const button = document.createElement('button');
  button.type = func;
  button.ariaLabel = ariaLabel;
  _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, classes);
  if (textContent) button.textContent = textContent;
  if (href) {
    button.addEventListener('click', () => {
      window.location.href = href;
    });
  }
  return button;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createButton,
});

/***/ }),

/***/ "./modules/dateTimeLocal.js":
/*!**********************************!*\
  !*** ./modules/dateTimeLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");


/**
 * Function that captures local time and insert it to the DOM using luxon library
 * @returns {void}
 */
const startClock = () => {
  const localDateTime = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.DATE_MED);
  const { hour, minute, second } = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().c;
  const strTime = (hour) => {
    let temp;
    if (hour < 10) temp = `0${hour}`;
    else temp = `${hour}`;
    return temp;
  };
  const strHour = strTime(hour);
  const strMinute = strTime(minute);
  const strSec = strTime(second);
  const timeSec = document.querySelector('.time');
  timeSec.textContent = `${localDateTime} ${strHour}:${strMinute}:${strSec}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  startClock,
});

/***/ }),

/***/ "./modules/elementAddClassMod.js":
/*!***************************************!*\
  !*** ./modules/elementAddClassMod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClass,
});

/***/ }),

/***/ "./modules/elementExtraAttrMod.js":
/*!****************************************!*\
  !*** ./modules/elementExtraAttrMod.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addAttributes,
});

/***/ }),

/***/ "./modules/elementGeneratorMod.js":
/*!****************************************!*\
  !*** ./modules/elementGeneratorMod.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementAddClassMod.js */ "./modules/elementAddClassMod.js");


/**
 * Function to create HTML element using tag names.
 * Classes and text content can be added as element is create.
 * @param {string} elem Tag name of the element to be created. Example: `div, p, section`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {String} textContext Text to be added as text content to HTML element.
 * Option parameter.
 * @returns {HTMLElement} Returns HTML element chosen with set attributes.
 */
const createElementDefault = (elem, classes = false, textContent = false) => {
  const element = document.createElement(elem);
  _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(element, classes);
  if (textContent) element.textContent = textContent;
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElementDefault,
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 10px;\r\n}\r\n\r\nsection {\r\n  display: none;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 30px;\r\n  flex-grow: 1;\r\n  justify-items: center;\r\n}\r\n\r\n#bookSection {\r\n  display: flex;\r\n}\r\n\r\n.div {\r\n  margin-top: 30px;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  margin-block: 10px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.bookshelf {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  border: 2px solid black;\r\n  justify-items: center;\r\n  height: auto;\r\n}\r\n\r\n.book-row {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 10px;\r\n  padding-inline: 20px;\r\n  gap: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.book-row:nth-child(odd) {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.addbook {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 15px;\r\n  max-width: 450px;\r\n  align-items: center;\r\n}\r\n\r\n.addbook input {\r\n  width: 70vw;\r\n  max-width: 250px;\r\n}\r\n\r\nbutton {\r\n  padding-inline: 10px;\r\n  padding-block: 5px;\r\n}\r\n\r\n.addbook button {\r\n  display: flex;\r\n  align-self: end;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-flow: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.extremity {\r\n  padding-block: 10px;\r\n  padding-inline: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  max-width: 240px;\r\n  margin-block: auto;\r\n}\r\n\r\n.removeBtn {\r\n  box-shadow: 0 0 4px 4px black;\r\n}\r\n\r\n.active {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n#contactSection ul {\r\n  padding-inline-start: 30px;\r\n}\r\n\r\n#contactSection li {\r\n  list-style-type: circle;\r\n}\r\n\r\n.time {\r\n  text-align: right;\r\n  margin-block-start: 5px;\r\n  margin-inline-end: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .book-row {\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    justify-items: center;\r\n    padding: 10px;\r\n    column-gap: 30px;\r\n    align-items: center;\r\n  }\r\n\r\n  .book-row p {\r\n    justify-self: start;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE;IACE,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,cAAc;IACd,8BAA8B;IAC9B,mBAAmB;EACrB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 10px;\r\n}\r\n\r\nsection {\r\n  display: none;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 30px;\r\n  flex-grow: 1;\r\n  justify-items: center;\r\n}\r\n\r\n#bookSection {\r\n  display: flex;\r\n}\r\n\r\n.div {\r\n  margin-top: 30px;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  margin-block: 10px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.bookshelf {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  border: 2px solid black;\r\n  justify-items: center;\r\n  height: auto;\r\n}\r\n\r\n.book-row {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 10px;\r\n  padding-inline: 20px;\r\n  gap: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.book-row:nth-child(odd) {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.addbook {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 15px;\r\n  max-width: 450px;\r\n  align-items: center;\r\n}\r\n\r\n.addbook input {\r\n  width: 70vw;\r\n  max-width: 250px;\r\n}\r\n\r\nbutton {\r\n  padding-inline: 10px;\r\n  padding-block: 5px;\r\n}\r\n\r\n.addbook button {\r\n  display: flex;\r\n  align-self: end;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-flow: column;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.extremity {\r\n  padding-block: 10px;\r\n  padding-inline: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  max-width: 240px;\r\n  margin-block: auto;\r\n}\r\n\r\n.removeBtn {\r\n  box-shadow: 0 0 4px 4px black;\r\n}\r\n\r\n.active {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n#contactSection ul {\r\n  padding-inline-start: 30px;\r\n}\r\n\r\n#contactSection li {\r\n  list-style-type: circle;\r\n}\r\n\r\n.time {\r\n  text-align: right;\r\n  margin-block-start: 5px;\r\n  margin-inline-end: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .book-row {\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    justify-items: center;\r\n    padding: 10px;\r\n    column-gap: 30px;\r\n    align-items: center;\r\n  }\r\n\r\n  .book-row p {\r\n    justify-self: start;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-flow: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_BookBinding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/BookBinding.js */ "./modules/BookBinding.js");
/* harmony import */ var _modules_dateTimeLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/dateTimeLocal.js */ "./modules/dateTimeLocal.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookshelf = document.querySelector('.bookshelf');
const localStorageName = 'Books';
const bookDivName = 'book-row';

const navItem = document.querySelectorAll('.nav a');
const section = document.querySelectorAll('section');

// Setup and start clock
setInterval(_modules_dateTimeLocal_js__WEBPACK_IMPORTED_MODULE_1__["default"].startClock, 1000);
_modules_dateTimeLocal_js__WEBPACK_IMPORTED_MODULE_1__["default"].startClock();

// Instatiate BookBiding Class
const bookBinding = new _modules_BookBinding_js__WEBPACK_IMPORTED_MODULE_0__["default"].BookBinding(localStorageName);

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
  _modules_BookBinding_js__WEBPACK_IMPORTED_MODULE_0__["default"].BookBinding.update(bookshelf, localStorageName, bookDivName);
  sectionRender(section);
};

// remove book from localstorage, dom and bookbinding instance
bookshelf.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    const index = parseInt(e.target.dataset.index, 10);
    const bookRemove = document.querySelector(`[data-book="${index}"]`);
    bookBinding.removeBook(index, bookRemove, bookshelf);
    bookshelf.innerHTML = '';
    _modules_BookBinding_js__WEBPACK_IMPORTED_MODULE_0__["default"].BookBinding.update(bookshelf, localStorageName, bookDivName);
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


/***/ }),

/***/ "./node_modules/luxon/src/datetime.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/datetime.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime),
/* harmony export */   "friendlyDateTime": () => (/* binding */ friendlyDateTime)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./impl/diff.js */ "./node_modules/luxon/src/impl/diff.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./impl/tokenParser.js */ "./node_modules/luxon/src/impl/tokenParser.js");
/* harmony import */ var _impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./impl/conversions.js */ "./node_modules/luxon/src/impl/conversions.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");

















const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if ((parsed && Object.keys(parsed).length !== 0) || parsedZone) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(_impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  let c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.hour);
  if (extended) {
    c += ":";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
    loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts),
    tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now();

  let ts, o;

  // assume we have the higher-order units
  if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj.year)) {
    for (const u of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(obj) || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.roundTo)(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(config.ts) ? _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isDate)(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(milliseconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(seconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now(),
      offsetProvis = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(obj, normalizeUnit),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidWeekData)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidOrdinalData)(normalized)
        : (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(normalized),
      invalid = higherOrderInvalid || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseISODate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseRFC2822Date)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseHTTPDate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(text) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(fmt)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.parseFromTokens)(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseSQL)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.formatOptsToTokens)(formatOpts, _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.expandMacroTokens)(_impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseFormat(fmt), _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isLeapYear)(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInYear)(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.weeksInWeekYear)(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(_zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(values, normalizeUnit),
      settingWeekStuff =
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekYear) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekNumber) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekday),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(this.c), ...normalized });
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal)) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day)) {
        mixed.day = Math.min((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.maybeArray)(unit).map(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = (0,_impl_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? _interval_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.explainFromTokens)(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/duration.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/duration.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accurateMatrix": () => (/* binding */ accurateMatrix),
/* harmony export */   "casualMatrix": () => (/* binding */ casualMatrix),
/* harmony export */   "daysInMonthAccurate": () => (/* binding */ daysInMonthAccurate),
/* harmony export */   "daysInYearAccurate": () => (/* binding */ daysInYearAccurate),
/* harmony export */   "default": () => (/* binding */ Duration),
/* harmony export */   "lowOrderMatrix": () => (/* binding */ lowOrderMatrix)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");








const INVALID = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;

    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(obj, Duration.normalizeUnit),
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISODuration)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISOTimeOnly)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l = orderedUnits
      .map((unit) => {
        const val = this.values[unit];
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.roundTo)(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
    };

    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");

    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(dur.values, k) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.asNumber)(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }

  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, { values: built }, true).normalize();
  }

  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/errors.js":
/*!******************************************!*\
  !*** ./node_modules/luxon/src/errors.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConflictingSpecificationError": () => (/* binding */ ConflictingSpecificationError),
/* harmony export */   "InvalidArgumentError": () => (/* binding */ InvalidArgumentError),
/* harmony export */   "InvalidDateTimeError": () => (/* binding */ InvalidDateTimeError),
/* harmony export */   "InvalidDurationError": () => (/* binding */ InvalidDurationError),
/* harmony export */   "InvalidIntervalError": () => (/* binding */ InvalidIntervalError),
/* harmony export */   "InvalidUnitError": () => (/* binding */ InvalidUnitError),
/* harmony export */   "ZoneIsAbstractError": () => (/* binding */ ZoneIsAbstractError)
/* harmony export */ });
// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/conversions.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/conversions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gregorianToOrdinal": () => (/* binding */ gregorianToOrdinal),
/* harmony export */   "gregorianToWeek": () => (/* binding */ gregorianToWeek),
/* harmony export */   "hasInvalidGregorianData": () => (/* binding */ hasInvalidGregorianData),
/* harmony export */   "hasInvalidOrdinalData": () => (/* binding */ hasInvalidOrdinalData),
/* harmony export */   "hasInvalidTimeData": () => (/* binding */ hasInvalidTimeData),
/* harmony export */   "hasInvalidWeekData": () => (/* binding */ hasInvalidWeekData),
/* harmony export */   "ordinalToGregorian": () => (/* binding */ ordinalToGregorian),
/* harmony export */   "weekToGregorian": () => (/* binding */ weekToGregorian)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _invalid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid.js */ "./node_modules/luxon/src/impl/invalid.js");



const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new _invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(weekYear);
  } else if (weekNumber > (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.weekYear),
    validWeek = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekNumber, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(obj.weekYear)),
    validWeekday = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validOrdinal = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.ordinal, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validMonth = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.month, 1, 12),
    validDay = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.day, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(minute, 0, 59),
    validSecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(second, 0, 59),
    validMillisecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/diff.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration.js */ "./node_modules/luxon/src/duration.js");


function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  const earlier = cursor;
  let lowestOrder, highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);

      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
      } else {
        cursor = highWater;
      }
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/digits.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/digits.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitRegex": () => (/* binding */ digitRegex),
/* harmony export */   "parseDigits": () => (/* binding */ parseDigits)
/* harmony export */ });
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/english.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/english.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraForDateTime": () => (/* binding */ eraForDateTime),
/* harmony export */   "eras": () => (/* binding */ eras),
/* harmony export */   "erasLong": () => (/* binding */ erasLong),
/* harmony export */   "erasNarrow": () => (/* binding */ erasNarrow),
/* harmony export */   "erasShort": () => (/* binding */ erasShort),
/* harmony export */   "formatRelativeTime": () => (/* binding */ formatRelativeTime),
/* harmony export */   "formatString": () => (/* binding */ formatString),
/* harmony export */   "meridiemForDateTime": () => (/* binding */ meridiemForDateTime),
/* harmony export */   "meridiems": () => (/* binding */ meridiems),
/* harmony export */   "monthForDateTime": () => (/* binding */ monthForDateTime),
/* harmony export */   "months": () => (/* binding */ months),
/* harmony export */   "monthsLong": () => (/* binding */ monthsLong),
/* harmony export */   "monthsNarrow": () => (/* binding */ monthsNarrow),
/* harmony export */   "monthsShort": () => (/* binding */ monthsShort),
/* harmony export */   "weekdayForDateTime": () => (/* binding */ weekdayForDateTime),
/* harmony export */   "weekdays": () => (/* binding */ weekdays),
/* harmony export */   "weekdaysLong": () => (/* binding */ weekdaysLong),
/* harmony export */   "weekdaysNarrow": () => (/* binding */ weekdaysNarrow),
/* harmony export */   "weekdaysShort": () => (/* binding */ weekdaysShort)
/* harmony export */ });
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");



function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default: // fall through
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  const filtered = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(knownFormat, [
      "weekday",
      "era",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
      "hourCycle",
    ]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SHORT):
      return "M/d/yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED):
      return "LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_SIMPLE):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/formats.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/formats.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATETIME_FULL": () => (/* binding */ DATETIME_FULL),
/* harmony export */   "DATETIME_FULL_WITH_SECONDS": () => (/* binding */ DATETIME_FULL_WITH_SECONDS),
/* harmony export */   "DATETIME_HUGE": () => (/* binding */ DATETIME_HUGE),
/* harmony export */   "DATETIME_HUGE_WITH_SECONDS": () => (/* binding */ DATETIME_HUGE_WITH_SECONDS),
/* harmony export */   "DATETIME_MED": () => (/* binding */ DATETIME_MED),
/* harmony export */   "DATETIME_MED_WITH_SECONDS": () => (/* binding */ DATETIME_MED_WITH_SECONDS),
/* harmony export */   "DATETIME_MED_WITH_WEEKDAY": () => (/* binding */ DATETIME_MED_WITH_WEEKDAY),
/* harmony export */   "DATETIME_SHORT": () => (/* binding */ DATETIME_SHORT),
/* harmony export */   "DATETIME_SHORT_WITH_SECONDS": () => (/* binding */ DATETIME_SHORT_WITH_SECONDS),
/* harmony export */   "DATE_FULL": () => (/* binding */ DATE_FULL),
/* harmony export */   "DATE_HUGE": () => (/* binding */ DATE_HUGE),
/* harmony export */   "DATE_MED": () => (/* binding */ DATE_MED),
/* harmony export */   "DATE_MED_WITH_WEEKDAY": () => (/* binding */ DATE_MED_WITH_WEEKDAY),
/* harmony export */   "DATE_SHORT": () => (/* binding */ DATE_SHORT),
/* harmony export */   "TIME_24_SIMPLE": () => (/* binding */ TIME_24_SIMPLE),
/* harmony export */   "TIME_24_WITH_LONG_OFFSET": () => (/* binding */ TIME_24_WITH_LONG_OFFSET),
/* harmony export */   "TIME_24_WITH_SECONDS": () => (/* binding */ TIME_24_WITH_SECONDS),
/* harmony export */   "TIME_24_WITH_SHORT_OFFSET": () => (/* binding */ TIME_24_WITH_SHORT_OFFSET),
/* harmony export */   "TIME_SIMPLE": () => (/* binding */ TIME_SIMPLE),
/* harmony export */   "TIME_WITH_LONG_OFFSET": () => (/* binding */ TIME_WITH_LONG_OFFSET),
/* harmony export */   "TIME_WITH_SECONDS": () => (/* binding */ TIME_WITH_SECONDS),
/* harmony export */   "TIME_WITH_SHORT_OFFSET": () => (/* binding */ TIME_WITH_SHORT_OFFSET)
/* harmony export */ });
/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};


/***/ }),

/***/ "./node_modules/luxon/src/impl/formatter.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/impl/formatter.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Formatter)
/* harmony export */ });
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");




function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_SHORT,
  DD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED,
  DDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FULL,
  DDDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_HUGE,
  t: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_SIMPLE,
  tt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SECONDS,
  ttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SHORT_OFFSET,
  tttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_LONG_OFFSET,
  T: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_SIMPLE,
  TT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SECONDS,
  TTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SHORT_OFFSET,
  TTTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_LONG_OFFSET,
  f: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT,
  ff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED,
  fff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL,
  ffff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE,
  F: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT_WITH_SECONDS,
  FF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_SECONDS,
  FFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL_WITH_SECONDS,
  FFFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    // white-space is always considered a literal in user-provided formats
    // the " " token has a special meaning (see unitForToken)

    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  formatInterval(interval, opts = {}) {
    const df = this.loc.dtFormatter(interval.start, { ...this.opts, ...opts });
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? _english_js__WEBPACK_IMPORTED_MODULE_0__.eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/invalid.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/invalid.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invalid)
/* harmony export */ });
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/locale.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Locale)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");






// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  // private subtags and unicode subtags have ordering requirements,
  // and we're not properly parsing this, so just strip out the
  // private ones if they exist.
  const xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    let selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      const smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }

    const { numberingSystem, calendar } = options;
    return [selectedStr, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.roundTo)(i, 3);
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.padStart)(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    this.originalZone = undefined;

    let z = undefined;
    if (this.opts.timeZone) {
      // Don't apply any workarounds if a timeZone is explicitly provided in opts
      this.dt = dt;
    } else if (dt.zone.type === "fixed") {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
        // we manually apply the offset and substitute the zone as needed.
        z = "UTC";
        this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else if (dt.zone.type === "iana") {
      this.dt = dt;
      z = dt.zone.name;
    } else {
      // Custom zones can have any offset / offsetName so we just manually
      // apply the offset and substitute the zone as needed.
      z = "UTC";
      this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
      this.originalZone = dt.zone;
    }

    const intlOpts = { ...this.opts };
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    if (this.originalZone) {
      // If we have to substitute in the actual zone name, we have to use
      // formatToParts so that the timezone can be replaced.
      return this.formatToParts()
        .map(({ value }) => value)
        .join("");
    }
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    const parts = this.dtf.formatToParts(this.dt.toJSDate());
    if (this.originalZone) {
      return parts.map((part) => {
        if (part.type === "timeZoneName") {
          const offsetName = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName,
          });
          return {
            ...part,
            value: offsetName,
          };
        } else {
          return part;
        }
      });
    }
    return parts;
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasRelative)()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return _english_js__WEBPACK_IMPORTED_MODULE_1__.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultNumberingSystem;
    const outputCalendarR = outputCalendar || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => _english_js__WEBPACK_IMPORTED_MODULE_1__.meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 9), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(-40, 1, 1), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/regexParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/regexParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHTTPDate": () => (/* binding */ parseHTTPDate),
/* harmony export */   "parseISODate": () => (/* binding */ parseISODate),
/* harmony export */   "parseISODuration": () => (/* binding */ parseISODuration),
/* harmony export */   "parseISOTimeOnly": () => (/* binding */ parseISOTimeOnly),
/* harmony export */   "parseRFC2822Date": () => (/* binding */ parseRFC2822Date),
/* harmony export */   "parseSQL": () => (/* binding */ parseSQL)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(m) ? fallback : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(yearStr)),
      months: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(monthStr)),
      weeks: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(weekStr)),
      days: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(dayStr)),
      hours: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(hourStr)),
      minutes: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(minuteStr)),
      seconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr)) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr),
    month: _english_js__WEBPACK_IMPORTED_MODULE_1__.monthsShort.indexOf(monthStr) + 1,
    day: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(dayStr),
    hour: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(hourStr),
    minute: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(minuteStr),
  };

  if (secondStr) result.second = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysLong.indexOf(weekdayStr) + 1
        : _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(offHourStr, offMinuteStr);
  }

  return [result, new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/tokenParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/tokenParser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandMacroTokens": () => (/* binding */ expandMacroTokens),
/* harmony export */   "explainFromTokens": () => (/* binding */ explainFromTokens),
/* harmony export */   "formatOptsToTokens": () => (/* binding */ formatOptsToTokens),
/* harmony export */   "parseFromTokens": () => (/* binding */ parseFromTokens)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _digits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digits.js */ "./node_modules/luxon/src/impl/digits.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");








const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post((0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.parseDigits)(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  const one = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc),
    two = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2}"),
    three = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{3}"),
    four = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4}"),
    six = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{6}"),
    oneOrTwo = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,2}"),
    oneToThree = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,3}"),
    oneToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,6}"),
    oneToNine = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,9}"),
    twoToFour = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2,4}"),
    fourToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ",
  },
};

function tokenForPart(part, formatOpts) {
  const { type, value } = part;

  if (type === "literal") {
    const isSpace = /^\s+$/.test(value);
    return {
      literal: !isSpace,
      val: isSpace ? " " : value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.z)) {
    zone = _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(matches.z);
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.Z)) {
    if (!zone) {
      zone = new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.u)) {
    matches.S = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = _datetime_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "a") && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "H")) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, formatOpts));
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/util.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/util.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asNumber": () => (/* binding */ asNumber),
/* harmony export */   "bestBy": () => (/* binding */ bestBy),
/* harmony export */   "daysInMonth": () => (/* binding */ daysInMonth),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "floorMod": () => (/* binding */ floorMod),
/* harmony export */   "formatOffset": () => (/* binding */ formatOffset),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "hasRelative": () => (/* binding */ hasRelative),
/* harmony export */   "integerBetween": () => (/* binding */ integerBetween),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isLeapYear": () => (/* binding */ isLeapYear),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "maybeArray": () => (/* binding */ maybeArray),
/* harmony export */   "normalizeObject": () => (/* binding */ normalizeObject),
/* harmony export */   "objToLocalTS": () => (/* binding */ objToLocalTS),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseFloating": () => (/* binding */ parseFloating),
/* harmony export */   "parseInteger": () => (/* binding */ parseInteger),
/* harmony export */   "parseMillis": () => (/* binding */ parseMillis),
/* harmony export */   "parseZoneInfo": () => (/* binding */ parseZoneInfo),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "roundTo": () => (/* binding */ roundTo),
/* harmony export */   "signedOffset": () => (/* binding */ signedOffset),
/* harmony export */   "timeObject": () => (/* binding */ timeObject),
/* harmony export */   "untruncateYear": () => (/* binding */ untruncateYear),
/* harmony export */   "weeksInWeekYear": () => (/* binding */ weeksInWeekYear)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/




/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
    // so if obj.year is in 99, but obj.day makes it roll over into year 100,
    // the calculations done by Date.UTC are using year 2000 - which is incorrect
    d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].twoDigitCutoffYear ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/zoneUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/luxon/src/impl/zoneUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeZone": () => (/* binding */ normalizeZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/**
 * @private
 */









function normalizeZone(input, defaultZone) {
  let offset;
  if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(input) || input === null) {
    return defaultZone;
  } else if (input instanceof _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return input;
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;
    else if (lowered === "local" || lowered === "system") return _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
    else if (lowered === "utc" || lowered === "gmt") return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance;
    else return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].parseSpecifier(lowered) || _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(input);
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isNumber)(input)) {
    return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__["default"](input);
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/info.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/info.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");








/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone) {
    const proto = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__.normalizeZone)(input, _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasRelative)() };
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/interval.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/interval.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interval)
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");








const INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start),
      builtEnd = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.s.loc.clone(opts), formatOpts).formatInterval(this)
      : INVALID;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/luxon.js":
/*!*****************************************!*\
  !*** ./node_modules/luxon/src/luxon.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTime": () => (/* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Duration": () => (/* reexport safe */ _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "FixedOffsetZone": () => (/* reexport safe */ _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "IANAZone": () => (/* reexport safe */ _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Info": () => (/* reexport safe */ _info_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Interval": () => (/* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "InvalidZone": () => (/* reexport safe */ _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Settings": () => (/* reexport safe */ _settings_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "SystemZone": () => (/* reexport safe */ _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "Zone": () => (/* reexport safe */ _zone_js__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");











const VERSION = "3.3.0";




/***/ }),

/***/ "./node_modules/luxon/src/settings.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/settings.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");






let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  twoDigitCutoffYear = 60,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__.normalizeZone)(defaultZone, _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__["default"].instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return twoDigitCutoffYear;
  }

  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(cutoffYear) {
    twoDigitCutoffYear = cutoffYear % 100;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetCache();
    _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCache();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zone.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/zone.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zone)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");


/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/IANAZone.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/zones/IANAZone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IANAZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.objToLocalTS)({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/fixedOffsetZone.js":
/*!*********************************************************!*\
  !*** ./node_modules/luxon/src/zones/fixedOffsetZone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixedOffsetZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, "narrow")}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(-this.fixed, "narrow")}`;
    }
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/invalidZone.js":
/*!*****************************************************!*\
  !*** ./node_modules/luxon/src/zones/invalidZone.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidZone)
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/systemZone.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/zones/systemZone.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SystemZone)
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix1REFBdUQ7QUFDdkQscURBQXFEO0FBQ3JELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUksbUJBQW1CLHVFQUEyQjtBQUNsRDs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEMsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEOEQ7QUFDaEM7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDZSx5QkFBeUIsZ0RBQUk7QUFDNUM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkMsV0FBVyw0REFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsV0FBVywyREFBWTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbW9kdWxlcy9Cb29rQmluZGluZy5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9tb2R1bGVzL0Jvb2tzTW9kLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL21vZHVsZXMvYnV0dG9uR2VuZXJhdG9yTW9kLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL21vZHVsZXMvZGF0ZVRpbWVMb2NhbC5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9tb2R1bGVzL2VsZW1lbnRBZGRDbGFzc01vZC5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9tb2R1bGVzL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbW9kdWxlcy9lbGVtZW50R2VuZXJhdG9yTW9kLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2R1cmF0aW9uLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvZXJyb3JzLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlmZi5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlnaXRzLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9lbmdsaXNoLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXRzLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2ludmFsaWQuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvcmVnZXhQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3Rva2VuUGFyc2VyLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC91dGlsLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC96b25lVXRpbC5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2x1eG9uLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lLmpzIiwid2VicGFjazovL2Jvb2tzYXBwLWVzNi8uL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvSUFOQVpvbmUuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9maXhlZE9mZnNldFpvbmUuanMiLCJ3ZWJwYWNrOi8vYm9va3NhcHAtZXM2Ly4vbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9pbnZhbGlkWm9uZS5qcyIsIndlYnBhY2s6Ly9ib29rc2FwcC1lczYvLi9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL3N5c3RlbVpvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vaywgY3JlYXRlQm9va0RpdiB9IGZyb20gJy4vQm9va3NNb2QuanMnO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgY3JlYXRlcyBhbmQgYXJyYXkgdG8gYm9vayBjbGFzcyBpbnN0YW5jZXMgdG8gYmUgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZVxuICogYW5kIGFkZGVkIHRvIERPTS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWUgbmFtZSB0byBiZSB1c2VkIHRvIGFkZCBib29rYmluZGluZyB0byBsb2NhbCBzdG9yYWdlLlxuICogQHJldHVybnMge29iamVjdH0gcmV0dXJuIGluc3RhbmNlIG9mIGJvb2tiaWRpbmcgY2xhc3Mgd2l0aCBhbiBhcnJheSBvZiBib29rIGNsYXNzIGluc3RhbmNlcy5cbiAqL1xuY2xhc3MgQm9va0JpbmRpbmcge1xuICBjb25zdHJ1Y3Rvcihsb2NhbE5hbWUpIHtcbiAgICB0aGlzLmF3ZXNvbWVCb29rcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2xvY2FsTmFtZX1gKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApKSA6IFtdO1xuICAgIHRoaXMubG9jYWxOYW1lID0gbG9jYWxOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byByZW1vdmUgYm9vayB0byBsb2NhbCBzdGFvcmFnZSwgYm9va2JpZGluZyBhbmQgZnJvbSBET00uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBOYW1lIG9mIHRpdGxlIG9mIGJvb2sgdG8gYmUgY3JlYXRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yIE5hbWUgb2YgYXV0aG9yIG9mIGJvb2sgdG8gYmUgY3JlYXRlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib29rc2hlbGYgSFRNTCBlbGVtZW50IHdoZXJlIGJvb2tzIGFyZSBnb2luZyB0byBiZSBhZGRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGJvb2tEaXZOYW1lIG5hbWUgb2YgY2xhc3MgdG8gYmUgdXNlZCB0byBhZGQgYm9vayB0byBib29rc2hlbGYuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgYWRkKHRpdGxlLCBhdXRob3IsIGJvb2tzaGVsZiwgYm9va0Rpdk5hbWUpIHtcbiAgICBpZiAodGl0bGUudmFsdWUubGVuZ3RoICYmIGF1dGhvci52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZS52YWx1ZS50cmltKCksIGF1dGhvci52YWx1ZS50cmltKCkpO1xuICAgICAgdGhpcy5hd2Vzb21lQm9va3MgPSB0aGlzLmF3ZXNvbWVCb29rcy5jb25jYXQoYm9vayk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5hd2Vzb21lQm9va3MpKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hd2Vzb21lQm9va3MubGVuZ3RoIC0gMTtcbiAgICAgIGJvb2tzaGVsZi5hcHBlbmRDaGlsZChjcmVhdGVCb29rRGl2KHRpdGxlLnZhbHVlLCBhdXRob3IudmFsdWUsIGluZGV4LCBib29rRGl2TmFtZSkpO1xuICAgIH1cbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGF1dGhvci52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byByZW1vdmUgYm9vayBmcm9tIGxvY2FsIHN0YW9yYWdlLCBib29rYmlkaW5nIGFuZCBmcm9tIERPTS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHBvc2l0aW9uIGluIGFycmF5IG9mIGJvb2tzIG9mIHRoZSBib29rIHRvIGJlIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvb2tSZW1vdmUgSFRNTEVsZW1lbnQgd2l0aCBib29rIHRvIGJlIHJlbW92ZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm9va3NoZWxmIEhUTUwgZWxlbWVudCB3aGVyZSBib29rcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlQm9vayhpbmRleCwgYm9va1JlbW92ZSwgYm9va3NoZWxmKSB7XG4gICAgY29uc3QgZmlyc3RIYWxmID0gdGhpcy5hd2Vzb21lQm9va3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgIGNvbnN0IHNlY29uZEhhbGYgPSB0aGlzLmF3ZXNvbWVCb29rcy5zbGljZShpbmRleCArIDEsIHRoaXMuYXdlc29tZUJvb2tzLmxlbmd0aCk7XG4gICAgdGhpcy5hd2Vzb21lQm9va3MgPSBmaXJzdEhhbGYuY29uY2F0KHNlY29uZEhhbGYpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmF3ZXNvbWVCb29rcykpO1xuICAgIGJvb2tzaGVsZi5yZW1vdmVDaGlsZChib29rUmVtb3ZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgbWV0aG9kIG9mIEJvb2tCaWRpbmcuIFVwZGF0ZXMgTG9jYWwgU3RvcmF0ZSBhbmQgcmUgcmVuZGVycyBib29rc2hlbGYgc2VjdGlvbi5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm9va3NoZWxmIEhUTUwgZWxlbWVudCB3aGVyZSBib29rcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWUgbmFtZSB0byBiZSB1c2VkIHRvIGFkZCBib29rYmluZGluZyB0byBsb2NhbCBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYm9va0Rpdk5hbWUgbmFtZSBvZiBjbGFzcyB0byBiZSB1c2VkIHRvIGFkZCBib29rIHRvIGJvb2tzaGVsZi5cbiAgICogQHJldHVybnMge3ZvaWR9IFZvaWRcbiAgICovXG4gIHN0YXRpYyB1cGRhdGUoYm9va3NoZWxmLCBsb2NhbE5hbWUsIGJvb2tEaXZOYW1lKSB7XG4gICAgY29uc3QgYXdlc29tZUJvb2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtsb2NhbE5hbWV9YCkpIDogW107XG4gICAgY29uc3QgYm9va3NoZWxmRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBhd2Vzb21lQm9va3MuZm9yRWFjaCgoYm9vaywgaSkgPT4ge1xuICAgICAgYm9va3NoZWxmRnJhZy5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUJvb2tEaXYoYm9vay5UaXRsZSwgYm9vay5BdXRob3IsIGksIGJvb2tEaXZOYW1lKSxcbiAgICAgICk7XG4gICAgfSk7XG4gICAgYm9va3NoZWxmLmlubmVySFRNTCA9ICcnO1xuICAgIGJvb2tzaGVsZi5hcHBlbmRDaGlsZChib29rc2hlbGZGcmFnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEJvb2tCaW5kaW5nLFxufTsiLCJpbXBvcnQgYnRuR2VuIGZyb20gJy4vYnV0dG9uR2VuZXJhdG9yTW9kLmpzJztcbmltcG9ydCBleHRyYUF0dCBmcm9tICcuL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMnO1xuaW1wb3J0IGVsZW1HZW4gZnJvbSAnLi9lbGVtZW50R2VuZXJhdG9yTW9kLmpzJztcblxuLyoqXG4gKiBEZXNjcmlwdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIE5hbWUgb2YgdGl0bGUgb2YgYm9vayB0byBiZSBjcmVhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yIE5hbWUgb2YgYXV0aG9yIG9mIGJvb2sgdG8gYmUgY3JlYXRlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IGluZGV4IHBvc2l0aW9uIGluIGFycmF5IG9mIGJvb2tzIG9mIHRoZSBib29rIHRvIGJlIHJlbW92ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBuYW1lIG9mIGNsYXNzIHRvIGJlIHVzZWQgdG8gYWRkIGJvb2sgdG8gYm9va3NoZWxmLlxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSByZXR1cm5zIEhUTUwgRGl2IGVsZW1lbnQgd2l0aCBib29rIGluZm9ybWF0aW9uLlxuICovXG5jb25zdCBjcmVhdGVCb29rRGl2ID0gKHRpdGxlLCBhdXRob3IsIGluZGV4LCBjbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGJvb2tEaXYgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzKTtcbiAgY29uc3QgYm9va1BhcmEgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgZmFsc2UsIGBcIiR7dGl0bGV9XCIgYnkgJHthdXRob3J9YCk7XG4gIGJvb2tEaXYuYXBwZW5kKGJvb2tQYXJhKTtcbiAgY29uc3QgcmVtb3ZlQnRuID0gYnRuR2VuLmNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ3JlbW92ZUJ0bicsICdSZW1vdmUgQm9vaycsICdSZW1vdmUnKTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyhyZW1vdmVCdG4sICdpbmRleCcsIGAke2luZGV4fWApO1xuICBleHRyYUF0dC5hZGRBdHRyaWJ1dGVzKGJvb2tEaXYsICdib29rJywgYCR7aW5kZXh9YCwgcmVtb3ZlQnRuKTtcbiAgcmV0dXJuIGJvb2tEaXY7XG59O1xuXG4vKipcbiAqIENsYXNzIG9mIEJvb2sgdG8gYmUgaW5zdGF0aWF0ZWQgd2l0aCAyIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaXRsZSBOYW1lIG9mIHRpdGxlIG9mIGJvb2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBBdXRob3IgTmFtZSBvZiBhdXRob3Igb2YgYm9va1xuICogQHJldHVybnMge29iamVjdH0gTmV3IGNsYXNzIHdpdGggdGl0bGUgYW5kIGF1dGhvciBwcm9wZXJ0aWVzXG4gKi9cbmNsYXNzIEJvb2sge1xuICBjb25zdHJ1Y3RvcihUaXRsZSwgQXV0aG9yKSB7XG4gICAgdGhpcy5UaXRsZSA9IFRpdGxlO1xuICAgIHRoaXMuQXV0aG9yID0gQXV0aG9yO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEJvb2ssXG4gIGNyZWF0ZUJvb2tEaXYsXG59O1xuIiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vZWxlbWVudEFkZENsYXNzTW9kLmpzJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBCdXR0b24gZWxlbWVudC4gQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50XG4gKiBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuIENsaWNrIGV2ZW50IHRvIGEgYW5vdGhlciB3ZWJwYWdlIGNhbiBiZSBhZGRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIFR5cGUgb2YgYnV0dG9uIGBzdW1iaXQsIHJlc2V0LCBidXR0b25gXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cbiAqIElmIG5vIGNsYXNzIGlzIHdhbnRlZCwgZmFsc2Ugc2hvdWxkIGJlIHVzZS5PcHRpb25hbCBQYXJhbWVudGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGFyaWFMYWJlbCBUZXh0IGZvciBhY2Nlc3NpYmlsaXR5XG4gKiBAcGFyYW0ge2FueX0gdGV4dENvbnRlbnQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7YW55fSBocmVmIEh5cGVybGluayByZWZlcmVuY2UgdG8gYmUgZm9sbG93ZWQgaWYgYnV0dG9uIGlzIGNsaWNrZWQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fSBSZXR1cm5zIEhUTUwgYnV0dG9uIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChmdW5jLCBjbGFzc2VzLCBhcmlhTGFiZWwsIHRleHRDb250ZW50ID0gZmFsc2UsIGhyZWYgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSBmdW5jO1xuICBidXR0b24uYXJpYUxhYmVsID0gYXJpYUxhYmVsO1xuICBhZGRDbGFzcy5hZGRDbGFzcyhidXR0b24sIGNsYXNzZXMpO1xuICBpZiAodGV4dENvbnRlbnQpIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaHJlZikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVCdXR0b24sXG59OyIsImltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FwdHVyZXMgbG9jYWwgdGltZSBhbmQgaW5zZXJ0IGl0IHRvIHRoZSBET00gdXNpbmcgbHV4b24gbGlicmFyeVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IHN0YXJ0Q2xvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsRGF0ZVRpbWUgPSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfTUVEKTtcbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gRGF0ZVRpbWUubG9jYWwoKS5jO1xuICBjb25zdCBzdHJUaW1lID0gKGhvdXIpID0+IHtcbiAgICBsZXQgdGVtcDtcbiAgICBpZiAoaG91ciA8IDEwKSB0ZW1wID0gYDAke2hvdXJ9YDtcbiAgICBlbHNlIHRlbXAgPSBgJHtob3VyfWA7XG4gICAgcmV0dXJuIHRlbXA7XG4gIH07XG4gIGNvbnN0IHN0ckhvdXIgPSBzdHJUaW1lKGhvdXIpO1xuICBjb25zdCBzdHJNaW51dGUgPSBzdHJUaW1lKG1pbnV0ZSk7XG4gIGNvbnN0IHN0clNlYyA9IHN0clRpbWUoc2Vjb25kKTtcbiAgY29uc3QgdGltZVNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XG4gIHRpbWVTZWMudGV4dENvbnRlbnQgPSBgJHtsb2NhbERhdGVUaW1lfSAke3N0ckhvdXJ9OiR7c3RyTWludXRlfToke3N0clNlY31gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGFydENsb2NrLFxufTsiLCIvKipcbiAqIEZ1bmN0aW9uIHRvIGFkZCBjbGFzcyBvciBjbGFzc2VzIHRvIEhUTUwgRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NlcyBTdHJpbmcgb3IgQXJyYXkgb2YgU3RyaW5nIHRvIGJlIGFkZGVkLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBjbGFzc2VzLlxuICovXG5jb25zdCBhZGRDbGFzcyA9IChlbGVtLCBjbGFzc2VzKSA9PiB7XG4gIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnc3RyaW5nJykgZWxlbS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzZXN9YCk7XG4gIGVsc2UgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdvYmplY3QnKSBjbGFzc2VzLmZvckVhY2goKGNsYXNzMCkgPT4gZWxlbS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzMH1gKSk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRDbGFzcyxcbn07IiwiLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgZGF0YXNldCBvciBhcHBlbmQgY2hpbGRzIHRvIEhUTUwgRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBrZXkgb2YgZGF0YXNldCBrZXktdmFsdWUgcHJvcGVydHkgdG8gYmUgYWRkZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbmRleD0wIHZhbHVlIG9mIGRhdGFzZXQga2V5LXZhbHVlIHByb3BlcnR5IHRvIGJlIGFkZGVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBhdHRyaWJ1dGVzXG4gKi9cbmNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAoZWxlbSxcbiAgZGF0YSA9IGZhbHNlLCBpbmRleCA9IDAsIGlubmVyQ2hpbGQgPSBudWxsKSA9PiB7XG4gIGlmIChkYXRhKSBlbGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGF9YCwgaW5kZXgpO1xuICBpZiAoaW5uZXJDaGlsZCkgZWxlbS5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZEF0dHJpYnV0ZXMsXG59OyIsImltcG9ydCBhZGRDbGFzcyBmcm9tICcuL2VsZW1lbnRBZGRDbGFzc01vZC5qcyc7XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgZWxlbWVudCB1c2luZyB0YWcgbmFtZXMuXG4gKiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnQgY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW0gVGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZC4gRXhhbXBsZTogYGRpdiwgcCwgc2VjdGlvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dENvbnRleHQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUVsZW1lbnREZWZhdWx0ID0gKGVsZW0sIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgYWRkQ2xhc3MuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ibG9jazogMzBweDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2tTZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kaXYge1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzaGVsZiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXJvdzpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxyXFxufVxcclxcblxcclxcbi5hZGRib29rIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYm9vayBpbnB1dCB7XFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIG1heC13aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGJvb2sgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leHRyZW1pdHkge1xcclxcbiAgcGFkZGluZy1ibG9jazogMTBweDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDI0MHB4O1xcclxcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlQnRuIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFNlY3Rpb24gdWwge1xcclxcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0U2VjdGlvbiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XFxyXFxuICAuYm9vay1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9vay1yb3cgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAzMHB4O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9va1NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdiB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMiB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3NoZWxmIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9vay1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stcm93Om50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGJvb2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRib29rIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYm9vayBidXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dHJlbWl0eSB7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMjQwcHg7XFxyXFxuICBtYXJnaW4tYmxvY2s6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVCdG4ge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDRweCA0cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0U2VjdGlvbiB1bCB7XFxyXFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RTZWN0aW9uIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogNXB4O1xcclxcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5ib29rLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib29rLXJvdyBwIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQkJDbGFzcyBmcm9tICcuLi9tb2R1bGVzL0Jvb2tCaW5kaW5nLmpzJztcbmltcG9ydCBjbG9jayBmcm9tICcuLi9tb2R1bGVzL2RhdGVUaW1lTG9jYWwuanMnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XG5jb25zdCBib29rc2hlbGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va3NoZWxmJyk7XG5jb25zdCBsb2NhbFN0b3JhZ2VOYW1lID0gJ0Jvb2tzJztcbmNvbnN0IGJvb2tEaXZOYW1lID0gJ2Jvb2stcm93JztcblxuY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgYScpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcblxuLy8gU2V0dXAgYW5kIHN0YXJ0IGNsb2NrXG5zZXRJbnRlcnZhbChjbG9jay5zdGFydENsb2NrLCAxMDAwKTtcbmNsb2NrLnN0YXJ0Q2xvY2soKTtcblxuLy8gSW5zdGF0aWF0ZSBCb29rQmlkaW5nIENsYXNzXG5jb25zdCBib29rQmluZGluZyA9IG5ldyBCQkNsYXNzLkJvb2tCaW5kaW5nKGxvY2FsU3RvcmFnZU5hbWUpO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNoYW5nZSB2aXNpYmlsaXR5IG9mIHNlY3Rpb24gZGVwZW5kaW5nIG9mIG5hdmxpbmsgc2VsZWN0ZWQuXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBzZWN0aW9uIExpc3Qgb2YgTm9kZSBvZiBzZWN0aW9ucyBvZiB3ZWJwYWdlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3Qgc2VjdGlvblJlbmRlciA9IChzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaGFzaCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBpZiAoaGFzaC5sZW5ndGggPiAxKSB7XG4gICAgc2VjdGlvbi5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoc2VjdGlvbi5pZCA9PT0gaGFzaC5zdWJzdHJpbmcoMSkpIHNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGVsc2Ugc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIG5hdkl0ZW0uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgaWYgKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IGhhc2guc3Vic3RyaW5nKDEpKSBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgZWxzZSBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJlbmRlciBsYXN0ZWQgYXJyYXkgb2YgYm9va3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBzcGFMb2FkID0gKCkgPT4ge1xuICBCQkNsYXNzLkJvb2tCaW5kaW5nLnVwZGF0ZShib29rc2hlbGYsIGxvY2FsU3RvcmFnZU5hbWUsIGJvb2tEaXZOYW1lKTtcbiAgc2VjdGlvblJlbmRlcihzZWN0aW9uKTtcbn07XG5cbi8vIHJlbW92ZSBib29rIGZyb20gbG9jYWxzdG9yYWdlLCBkb20gYW5kIGJvb2tiaW5kaW5nIGluc3RhbmNlXG5ib29rc2hlbGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmVCdG4nKSkge1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCwgMTApO1xuICAgIGNvbnN0IGJvb2tSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ib29rPVwiJHtpbmRleH1cIl1gKTtcbiAgICBib29rQmluZGluZy5yZW1vdmVCb29rKGluZGV4LCBib29rUmVtb3ZlLCBib29rc2hlbGYpO1xuICAgIGJvb2tzaGVsZi5pbm5lckhUTUwgPSAnJztcbiAgICBCQkNsYXNzLkJvb2tCaW5kaW5nLnVwZGF0ZShib29rc2hlbGYsIGxvY2FsU3RvcmFnZU5hbWUsIGJvb2tEaXZOYW1lKTtcbiAgfVxufSk7XG5cbi8vIFNlbGVjdCBzZWN0aW9uIHRvIHNob3dcbm5hdkl0ZW0uZm9yRWFjaCgobGluaykgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgc2VjdGlvblJlbmRlcihzZWN0aW9uKTtcbiAgfSk7XG59KTtcblxuLy8gYWRkIGJvb2sgdG8gbG9jYWxzdG9yYWdlLCBkb20gYW5kIGJvb2tiaW5kaW5nIGluc3RhbmNlXG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGJvb2tCaW5kaW5nLmFkZCh0aXRsZSwgYXV0aG9yLCBib29rc2hlbGYsIGJvb2tEaXZOYW1lKTtcbn0pO1xuXG4vLyByZW5kZXIgbGFzdGVkIGFycmF5IG9mIGJvb2tzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNwYUxvYWQpO1xuIiwiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7XG4gIGlzVW5kZWZpbmVkLFxuICBtYXliZUFycmF5LFxuICBpc0RhdGUsXG4gIGlzTnVtYmVyLFxuICBiZXN0QnksXG4gIGRheXNJbk1vbnRoLFxuICBkYXlzSW5ZZWFyLFxuICBpc0xlYXBZZWFyLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbiAgb2JqVG9Mb2NhbFRTLFxuICBwYWRTdGFydCxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuaW1wb3J0IGRpZmYgZnJvbSBcIi4vaW1wbC9kaWZmLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVJGQzI4MjJEYXRlLCBwYXJzZUlTT0RhdGUsIHBhcnNlSFRUUERhdGUsIHBhcnNlU1FMIH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgcGFyc2VGcm9tVG9rZW5zLFxuICBleHBsYWluRnJvbVRva2VucyxcbiAgZm9ybWF0T3B0c1RvVG9rZW5zLFxuICBleHBhbmRNYWNyb1Rva2Vucyxcbn0gZnJvbSBcIi4vaW1wbC90b2tlblBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgZ3JlZ29yaWFuVG9XZWVrLFxuICB3ZWVrVG9HcmVnb3JpYW4sXG4gIGdyZWdvcmlhblRvT3JkaW5hbCxcbiAgb3JkaW5hbFRvR3JlZ29yaWFuLFxuICBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YSxcbiAgaGFzSW52YWxpZFdlZWtEYXRhLFxuICBoYXNJbnZhbGlkT3JkaW5hbERhdGEsXG4gIGhhc0ludmFsaWRUaW1lRGF0YSxcbn0gZnJvbSBcIi4vaW1wbC9jb252ZXJzaW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9pbXBsL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7XG4gIEludmFsaWRBcmd1bWVudEVycm9yLFxuICBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcixcbiAgSW52YWxpZFVuaXRFcnJvcixcbiAgSW52YWxpZERhdGVUaW1lRXJyb3IsXG59IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5cbmNvbnN0IElOVkFMSUQgPSBcIkludmFsaWQgRGF0ZVRpbWVcIjtcbmNvbnN0IE1BWF9EQVRFID0gOC42NGUxNTtcblxuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5zdXBwb3J0ZWQgem9uZVwiLCBgdGhlIHpvbmUgXCIke3pvbmUubmFtZX1cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XG59XG5cbi8vIHdlIGNhY2hlIHdlZWsgZGF0YSBvbiB0aGUgRFQgb2JqZWN0IGFuZCB0aGlzIGludGVybWVkaWF0ZXMgdGhlIGNhY2hlXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG4gIHJldHVybiBkdC53ZWVrRGF0YTtcbn1cblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zLCBcIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9uc1wiLiBhbGwgXCJzZXR0ZXJzXCIgcmVhbGx5IHVzZSB0aGlzXG4vLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllc1xuZnVuY3Rpb24gY2xvbmUoaW5zdCwgYWx0cykge1xuICBjb25zdCBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkLFxuICB9O1xuICByZXR1cm4gbmV3IERhdGVUaW1lKHsgLi4uY3VycmVudCwgLi4uYWx0cywgb2xkOiBjdXJyZW50IH0pO1xufVxuXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIGxldCB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xuXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcbiAgY29uc3QgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuXG4gIC8vIElmIHNvLCBvZmZzZXQgZGlkbid0IGNoYW5nZSBhbmQgd2UncmUgZG9uZVxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfVxuXG4gIC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0XG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwO1xuXG4gIC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuICBjb25zdCBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG4gIGlmIChvMiA9PT0gbzMpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07XG4gIH1cblxuICAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG4gIHJldHVybiBbbG9jYWxUUyAtIE1hdGgubWluKG8yLCBvMykgKiA2MCAqIDEwMDAsIE1hdGgubWF4KG8yLCBvMyldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGVwb2NoIHRpbWVzdGFtcCBpbnRvIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG9mZnNldFxuZnVuY3Rpb24gdHNUb09iaih0cywgb2Zmc2V0KSB7XG4gIHRzICs9IG9mZnNldCAqIDYwICogMTAwMDtcblxuICBjb25zdCBkID0gbmV3IERhdGUodHMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgfTtcbn1cblxuLy8gY29udmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGVwb2NoIHRpbWVzdGFtcFxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgY29uc3Qgb1ByZSA9IGluc3QubyxcbiAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgbW9udGggPSBpbnN0LmMubW9udGggKyBNYXRoLnRydW5jKGR1ci5tb250aHMpICsgTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpICogMyxcbiAgICBjID0ge1xuICAgICAgLi4uaW5zdC5jLFxuICAgICAgeWVhcixcbiAgICAgIG1vbnRoLFxuICAgICAgZGF5OlxuICAgICAgICBNYXRoLm1pbihpbnN0LmMuZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpICtcbiAgICAgICAgTWF0aC50cnVuYyhkdXIuZGF5cykgK1xuICAgICAgICBNYXRoLnRydW5jKGR1ci53ZWVrcykgKiA3LFxuICAgIH0sXG4gICAgbWlsbGlzVG9BZGQgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtcbiAgICAgIHllYXJzOiBkdXIueWVhcnMgLSBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgICBxdWFydGVyczogZHVyLnF1YXJ0ZXJzIC0gTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpLFxuICAgICAgbW9udGhzOiBkdXIubW9udGhzIC0gTWF0aC50cnVuYyhkdXIubW9udGhzKSxcbiAgICAgIHdlZWtzOiBkdXIud2Vla3MgLSBNYXRoLnRydW5jKGR1ci53ZWVrcyksXG4gICAgICBkYXlzOiBkdXIuZGF5cyAtIE1hdGgudHJ1bmMoZHVyLmRheXMpLFxuICAgICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxuICAgICAgc2Vjb25kczogZHVyLnNlY29uZHMsXG4gICAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHMsXG4gICAgfSkuYXMoXCJtaWxsaXNlY29uZHNcIiksXG4gICAgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTtcblxuICBsZXQgW3RzLCBvXSA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpO1xuXG4gIGlmIChtaWxsaXNUb0FkZCAhPT0gMCkge1xuICAgIHRzICs9IG1pbGxpc1RvQWRkO1xuICAgIC8vIHRoYXQgY291bGQgaGF2ZSBjaGFuZ2VkIHRoZSBvZmZzZXQgYnkgZ29pbmcgb3ZlciBhIERTVCwgYnV0IHdlIHdhbnQgdG8ga2VlcCB0aGUgdHMgdGhlIHNhbWVcbiAgICBvID0gaW5zdC56b25lLm9mZnNldCh0cyk7XG4gIH1cblxuICByZXR1cm4geyB0cywgbyB9O1xufVxuXG4vLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXNcbi8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnNcbmZ1bmN0aW9uIHBhcnNlRGF0YVRvRGF0ZVRpbWUocGFyc2VkLCBwYXJzZWRab25lLCBvcHRzLCBmb3JtYXQsIHRleHQsIHNwZWNpZmljT2Zmc2V0KSB7XG4gIGNvbnN0IHsgc2V0Wm9uZSwgem9uZSB9ID0gb3B0cztcbiAgaWYgKChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHx8IHBhcnNlZFpvbmUpIHtcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChwYXJzZWQsIHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgICBzcGVjaWZpY09mZnNldCxcbiAgICAgIH0pO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgIG5ldyBJbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyAke2Zvcm1hdH1gKVxuICAgICk7XG4gIH1cbn1cblxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1ogPSB0cnVlKSB7XG4gIHJldHVybiBkdC5pc1ZhbGlkXG4gICAgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKSwge1xuICAgICAgICBhbGxvd1osXG4gICAgICAgIGZvcmNlU2ltcGxlOiB0cnVlLFxuICAgICAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpXG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiB0b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIGxldCBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcblxuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHRvSVNPVGltZShcbiAgbyxcbiAgZXh0ZW5kZWQsXG4gIHN1cHByZXNzU2Vjb25kcyxcbiAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gIGluY2x1ZGVPZmZzZXQsXG4gIGV4dGVuZGVkWm9uZVxuKSB7XG4gIGxldCBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiOlwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gICAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xuICAgICAgYyArPSBcIjpcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcbiAgfVxuXG4gIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5zZWNvbmQpO1xuXG4gICAgaWYgKG8uYy5taWxsaXNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NNaWxsaXNlY29uZHMpIHtcbiAgICAgIGMgKz0gXCIuXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taWxsaXNlY29uZCwgMyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICBpZiAoby5pc09mZnNldEZpeGVkICYmIG8ub2Zmc2V0ID09PSAwICYmICFleHRlbmRlZFpvbmUpIHtcbiAgICAgIGMgKz0gXCJaXCI7XG4gICAgfSBlbHNlIGlmIChvLm8gPCAwKSB7XG4gICAgICBjICs9IFwiLVwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vICUgNjApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYyArPSBcIitcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gLyA2MCkpO1xuICAgICAgYyArPSBcIjpcIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gJSA2MCkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChleHRlbmRlZFpvbmUpIHtcbiAgICBjICs9IFwiW1wiICsgby56b25lLmlhbmFOYW1lICsgXCJdXCI7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbi8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xuY29uc3QgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XG4gICAgbW9udGg6IDEsXG4gICAgZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfSxcbiAgZGVmYXVsdFdlZWtVbml0VmFsdWVzID0ge1xuICAgIHdlZWtOdW1iZXI6IDEsXG4gICAgd2Vla2RheTogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH0sXG4gIGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcbiAgICBvcmRpbmFsOiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbiAgfTtcblxuLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXG5jb25zdCBvcmRlcmVkVW5pdHMgPSBbXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0sXG4gIG9yZGVyZWRXZWVrVW5pdHMgPSBbXG4gICAgXCJ3ZWVrWWVhclwiLFxuICAgIFwid2Vla051bWJlclwiLFxuICAgIFwid2Vla2RheVwiLFxuICAgIFwiaG91clwiLFxuICAgIFwibWludXRlXCIsXG4gICAgXCJzZWNvbmRcIixcbiAgICBcIm1pbGxpc2Vjb25kXCIsXG4gIF0sXG4gIG9yZGVyZWRPcmRpbmFsVW5pdHMgPSBbXCJ5ZWFyXCIsIFwib3JkaW5hbFwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXTtcblxuLy8gc3RhbmRhcmRpemUgY2FzZSBhbmQgcGx1cmFsaXR5IGluIHVuaXRzXG5mdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgd2Vla2RheTogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla2RheXM6IFwid2Vla2RheVwiLFxuICAgIHdlZWtudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtzbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrbnVtYmVyczogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3llYXI6IFwid2Vla1llYXJcIixcbiAgICB3ZWVreWVhcnM6IFwid2Vla1llYXJcIixcbiAgICBvcmRpbmFsOiBcIm9yZGluYWxcIixcbiAgfVt1bml0LnRvTG93ZXJDYXNlKCldO1xuXG4gIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5cbi8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlclxuLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0c1xuLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XG4gIGNvbnN0IHpvbmUgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgIHRzTm93ID0gU2V0dGluZ3Mubm93KCk7XG5cbiAgbGV0IHRzLCBvO1xuXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpO1xuICAgIFt0cywgb10gPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcbiAgfSBlbHNlIHtcbiAgICB0cyA9IHRzTm93O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IHRzLCB6b25lLCBsb2MsIG8gfSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIGNvbnN0IHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZCxcbiAgICBmb3JtYXQgPSAoYywgdW5pdCkgPT4ge1xuICAgICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgdHJ1ZSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICAgIH0sXG4gICAgZGlmZmVyID0gKHVuaXQpID0+IHtcbiAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9XG4gICAgfTtcblxuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdW5pdCBvZiBvcHRzLnVuaXRzKSB7XG4gICAgY29uc3QgY291bnQgPSBkaWZmZXIodW5pdCk7XG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cblxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICBsZXQgb3B0cyA9IHt9LFxuICAgIGFyZ3M7XG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcbiAgfVxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuXG4vKipcbiAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcbiAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXG4gKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cbiAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgRGF0ZVRpbWUubG9jYWx9LCB7QGxpbmsgRGF0ZVRpbWUudXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgRGF0ZVRpbWUuZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUlTT30sIHtAbGluayBEYXRlVGltZS5mcm9tSFRUUH0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUuZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZS5mcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUpTRGF0ZX0uXG4gKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjeWVhcn0sIHtAbGluayBEYXRlVGltZSNtb250aH0sXG4gKiB7QGxpbmsgRGF0ZVRpbWUjZGF5fSwge0BsaW5rIERhdGVUaW1lI2hvdXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXRlfSwge0BsaW5rIERhdGVUaW1lI3NlY29uZH0sIHtAbGluayBEYXRlVGltZSNtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxuICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIERhdGVUaW1lI3dlZWtZZWFyfSwge0BsaW5rIERhdGVUaW1lI3dlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIERhdGVUaW1lI3dlZWtkYXl9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjbG9jYWxlfSBhbmQge0BsaW5rIERhdGVUaW1lI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0fSwge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSwge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0TG9jYWxlfSwge0BsaW5rIERhdGVUaW1lLnBsdXN9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXN9LCB7QGxpbmsgRGF0ZVRpbWUjZW5kT2Z9LCB7QGxpbmsgRGF0ZVRpbWUjc3RhcnRPZn0sIHtAbGluayBEYXRlVGltZSN0b1VUQ30sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0uXG4gKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZX0sIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9KU09OfSwge0BsaW5rIERhdGVUaW1lI3RvSVNPfSwge0BsaW5rIERhdGVUaW1lI3RvSFRUUH0sIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0sIHtAbGluayBEYXRlVGltZSN0b1JGQzI4MjJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9TdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9LCB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9KU0RhdGV9LlxuICpcbiAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVUaW1lIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uc3Qgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lO1xuXG4gICAgbGV0IGludmFsaWQgPVxuICAgICAgY29uZmlnLmludmFsaWQgfHxcbiAgICAgIChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGwpIHx8XG4gICAgICAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XG5cbiAgICBsZXQgYyA9IG51bGwsXG4gICAgICBvID0gbnVsbDtcbiAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgIGNvbnN0IHVuY2hhbmdlZCA9IGNvbmZpZy5vbGQgJiYgY29uZmlnLm9sZC50cyA9PT0gdGhpcy50cyAmJiBjb25maWcub2xkLnpvbmUuZXF1YWxzKHpvbmUpO1xuXG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgIFtjLCBvXSA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7XG4gICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGw7XG4gICAgICAgIGMgPSBpbnZhbGlkID8gbnVsbCA6IGM7XG4gICAgICAgIG8gPSBpbnZhbGlkID8gbnVsbCA6IG90O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubyA9IG87XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xuICB9XG5cbiAgLy8gQ09OU1RSVUNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKlxuICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBsb2NhbCgpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgdXRjKCkge1xuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyksXG4gICAgICBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XG5cbiAgICBvcHRzLnpvbmUgPSBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgcmV0dXJuIHF1aWNrRFQoeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21KU0RhdGUoZGF0ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRzKSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzLFxuICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYGZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICR7dHlwZW9mIG1pbGxpc2Vjb25kc30gd2l0aCB2YWx1ZSAke21pbGxpc2Vjb25kc31gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgb2Zmc2V0UHJvdmlzID0gIWlzVW5kZWZpbmVkKG9wdHMuc3BlY2lmaWNPZmZzZXQpXG4gICAgICAgID8gb3B0cy5zcGVjaWZpY09mZnNldFxuICAgICAgICA6IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcixcbiAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xuXG4gICAgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3IpO1xuXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcbiAgICBsZXQgdW5pdHMsXG4gICAgICBkZWZhdWx0VmFsdWVzLFxuICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcbiAgICBsZXQgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykge1xuICAgICAgY29uc3QgdiA9IG5vcm1hbGl6ZWRbdV07XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxuICAgIGNvbnN0IGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG5cbiAgICAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZVxuICAgIGNvbnN0IGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogbm9ybWFsaXplZCxcbiAgICAgIFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpLFxuICAgICAgaW5zdCA9IG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICAgIG86IG9mZnNldEZpbmFsLFxuICAgICAgICBsb2MsXG4gICAgICB9KTtcblxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICAgIFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsXG4gICAgICAgIGB5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiAke25vcm1hbGl6ZWQud2Vla2RheX0gYW5kIGEgZGF0ZSBvZiAke2luc3QudG9JU08oKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VJU09EYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSVNPIDg2MDFcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21SRkMyODIyKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJSRkMgMjgyMlwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIEhUVFAgZGF0ZXMgYXJlIGFsd2F5cyBpbiBVVEMsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIHRoZSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZy4gRm9yIEhUVFAgZGF0ZXMsIHRoaXMgaXMgYWx3YXlzIFVUQywgc28gdGhpcyBvcHRpb24gaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgem9uZWAgb3B0aW9uIHRvICd1dGMnLCBidXQgdGhpcyBvcHRpb24gaXMgaW5jbHVkZWQgZm9yIGNvbnNpc3RlbmN5IHdpdGggc2ltaWxhciBtZXRob2RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuLCAwNiBOb3YgMTk5NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuZGF5LCAwNi1Ob3YtOTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biBOb3YgIDYgMDg6NDk6MzcgMTk5NCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21IVFRQKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSFRUUERhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL3BhcnNpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzID0ge30pIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0cyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBbdmFscywgcGFyc2VkWm9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRdID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgYGZvcm1hdCAke2ZtdH1gLCB0ZXh0LCBzcGVjaWZpY09mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0IGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgU1FMIGRhdGUsIHRpbWUsIG9yIGRhdGV0aW1lXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNScpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnLCB7IHNldFpvbmU6IHRydWUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInLCB7IHpvbmU6ICdBbWVyaWNhL0xvc19BbmdlbGVzJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcwOToxMjozNC4zNDInKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tU1FMKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlU1FMKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiU1FMXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZERhdGVUaW1lRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWUuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRGF0ZVRpbWUpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIGZvcm1hdCBzdHJpbmcgZm9yIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIGZvcm1hdE9wdHNcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBwYXJzZUZvcm1hdEZvck9wdHMoZm9ybWF0T3B0cywgbG9jYWxlT3B0cyA9IHt9KSB7XG4gICAgY29uc3QgdG9rZW5MaXN0ID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIExvY2FsZS5mcm9tT2JqZWN0KGxvY2FsZU9wdHMpKTtcbiAgICByZXR1cm4gIXRva2VuTGlzdCA/IG51bGwgOiB0b2tlbkxpc3QubWFwKCh0KSA9PiAodCA/IHQudmFsIDogbnVsbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICAvKipcbiAgICogUHJvZHVjZSB0aGUgdGhlIGZ1bGx5IGV4cGFuZGVkIGZvcm1hdCB0b2tlbiBmb3IgdGhlIGxvY2FsZVxuICAgKiBEb2VzIE5PVCBxdW90ZSBjaGFyYWN0ZXJzLCBzbyBxdW90ZWQgdG9rZW5zIHdpbGwgbm90IHJvdW5kIHRyaXAgY29ycmVjdGx5XG4gICAqIEBwYXJhbSBmbXRcbiAgICogQHBhcmFtIGxvY2FsZU9wdHNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBleHBhbmRGb3JtYXQoZm10LCBsb2NhbGVPcHRzID0ge30pIHtcbiAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuIGV4cGFuZGVkLm1hcCgodCkgPT4gdC52YWwpLmpvaW4oXCJcIik7XG4gIH1cblxuICAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIHZhbGlkLiBJbnZhbGlkIERhdGVUaW1lcyBvY2N1ciB3aGVuOlxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBmcm9tIGludmFsaWQgY2FsZW5kYXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIDEzdGggbW9udGggb3IgRmVicnVhcnkgMzBcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgYnkgYW4gb3BlcmF0aW9uIG9uIGFub3RoZXIgaW52YWxpZCBkYXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cbiAgICogQHR5cGUge1pvbmV9XG4gICAqL1xuICBnZXQgem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB6b25lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB5ZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMueWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHF1YXJ0ZXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcXVhcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9udGggKDEtMTIpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5kYXkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSkuaG91ciAvLz0+IDlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBob3VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaW51dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuc2Vjb25kIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyLCA2NTQpLm1pbGxpc2Vjb25kIC8vPT4gNjU0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWlsbGlzZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTIsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrWWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxuICAgKiBAdHlwZSB7bnVtYmVyfERhdGVUaW1lfVxuICAgKi9cbiAgZ2V0IG9yZGluYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLm9yZGluYWwgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0b2JlcicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtb250aExvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcInNob3J0XCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgd2Vla2RheUxvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBVVEMgb2Zmc2V0IG9mIHRoaXMgRGF0ZVRpbWUgaW4gbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5vZmZzZXQgLy89PiAtMjQwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/ICt0aGlzLm8gOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVTVFwiIG9yIFwiRURUXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVTaG9ydCgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb2Zmc2V0TmFtZUxvbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzT2Zmc2V0Rml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5pc1VuaXZlcnNhbCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luRFNUKCkge1xuICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiAxLCBkYXk6IDEgfSkub2Zmc2V0IHx8XG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luTGVhcFllYXIoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrc0luV2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBGb3JtYXR0ZXIuY3JlYXRlKFxuICAgICAgdGhpcy5sb2MuY2xvbmUob3B0cyksXG4gICAgICBvcHRzXG4gICAgKS5yZXNvbHZlZE9wdGlvbnModGhpcyk7XG4gICAgcmV0dXJuIHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhciB9O1xuICB9XG5cbiAgLy8gVFJBTlNGT1JNXG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0oJ3V0YycpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHRvVVRDKG9mZnNldCA9IDAsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBzcGVjaWZpZWQgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc2V0dGVyIGtlZXBzIHRoZSB1bmRlcmx5aW5nIHRpbWUgdGhlIHNhbWUgKGFzIGluLCB0aGUgc2FtZSB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBEYXRlVGltZSNwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0gYW5kIHtAbGluayBEYXRlVGltZSN0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAnVVRDKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIERhdGVUaW1lI1pvbmV9IGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRab25lKHpvbmUsIHsga2VlcExvY2FsVGltZSA9IGZhbHNlLCBrZWVwQ2FsZW5kYXJUaW1lID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICh6b25lLmVxdWFscyh0aGlzLnpvbmUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2UgaWYgKCF6b25lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUUyA9IHRoaXMudHM7XG4gICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldEd1ZXNzID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGNvbnN0IGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgICAgICBbbmV3VFNdID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHM6IG5ld1RTLCB6b25lIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgbG9jIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIFlvdSBjYW4gb25seSBzZXQgdW5pdHMgd2l0aCB0aGlzIG1ldGhvZDsgZm9yIFwic2V0dGluZ1wiIG1ldGFkYXRhLCBzZWUge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSBhbmQge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyBob3VyOiA4LCBtaW51dGU6IDMwIH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHdlZWtkYXk6IDUgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAwNSwgb3JkaW5hbDogMjM0IH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0KSxcbiAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPVxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHxcbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGxldCBtaXhlZDtcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXhlZCA9IHsgLi4udGhpcy50b09iamVjdCgpLCAuLi5ub3JtYWxpemVkIH07XG5cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbdHMsIG9dID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzLCBvIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbikubmVnYXRlKCk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBvID0ge30sXG4gICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSBcInllYXJzXCI6XG4gICAgICAgIG8ubW9udGggPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInF1YXJ0ZXJzXCI6XG4gICAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJ3ZWVrc1wiOlxuICAgICAgY2FzZSBcImRheXNcIjpcbiAgICAgICAgby5ob3VyID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwibWludXRlc1wiOlxuICAgICAgICBvLnNlY29uZCA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwic2Vjb25kc1wiOlxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlsbGlzZWNvbmRzXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIGVuZE9mKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxuICAgICAgICAgIC5zdGFydE9mKHVuaXQpXG4gICAgICAgICAgLm1pbnVzKDEpXG4gICAgICA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMLCB7IGxvY2FsZTogJ2ZyJyB9KTsgLy89PiAnMjggYW/Du3QgMjAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IEZvcm1hdHMuREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxuICAgKi9cbiAgdG9Mb2NhbGVQYXJ0cyhvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcylcbiAgICAgIDogW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPWZhbHNlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgzLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzIwMTcwNDIyVDIwNDcwNS4zMzUtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08oe1xuICAgIGZvcm1hdCA9IFwiZXh0ZW5kZWRcIixcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIGluY2x1ZGVPZmZzZXQgPSB0cnVlLFxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCI7XG5cbiAgICBsZXQgYyA9IHRvSVNPRGF0ZSh0aGlzLCBleHQpO1xuICAgIGMgKz0gXCJUXCI7XG4gICAgYyArPSB0b0lTT1RpbWUodGhpcywgZXh0LCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0LCBleHRlbmRlZFpvbmUpO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT0RhdGUoeyBmb3JtYXQgPSBcImV4dGVuZGVkXCIgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPV2Vla0RhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT10cnVlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKCkgLy89PiAnMDc6MzQ6MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCwgc2Vjb25kczogMCwgbWlsbGlzZWNvbmRzOiAwIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcwNzozNFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzA3MzQxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDA3OjM0OjE5LjM2MVonXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZSh7XG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBpbmNsdWRlUHJlZml4ID0gZmFsc2UsXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiLFxuICB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGMgPSBpbmNsdWRlUHJlZml4ID8gXCJUXCIgOiBcIlwiO1xuICAgIHJldHVybiAoXG4gICAgICBjICtcbiAgICAgIHRvSVNPVGltZShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIsXG4gICAgICAgIHN1cHByZXNzU2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICAgIGluY2x1ZGVPZmZzZXQsXG4gICAgICAgIGV4dGVuZGVkWm9uZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTERhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxUaW1lKHsgaW5jbHVkZU9mZnNldCA9IHRydWUsIGluY2x1ZGVab25lID0gZmFsc2UsIGluY2x1ZGVPZmZzZXRTcGFjZSA9IHRydWUgfSA9IHt9KSB7XG4gICAgbGV0IGZtdCA9IFwiSEg6bW06c3MuU1NTXCI7XG5cbiAgICBpZiAoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkge1xuICAgICAgaWYgKGluY2x1ZGVPZmZzZXRTcGFjZSkge1xuICAgICAgICBmbXQgKz0gXCIgXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVpvbmUpIHtcbiAgICAgICAgZm10ICs9IFwielwiO1xuICAgICAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgICAgIGZtdCArPSBcIlpaXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUwob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnRvU1FMRGF0ZSgpfSAke3RoaXMudG9TUUxUaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyAoYXMgYSB3aG9sZSBudW1iZXIpIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvVW5peEludGVnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguZmxvb3IodGhpcy50cyAvIDEwMDApIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICB0b0JTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIERhdGVUaW1lJ3MgeWVhciwgbW9udGgsIGRheSwgYW5kIHNvIG9uLlxuICAgKiBAcGFyYW0gb3B0cyAtIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVDb25maWc9ZmFsc2VdIC0gaW5jbHVkZSBjb25maWd1cmF0aW9uIGF0dHJpYnV0ZXMgaW4gdGhlIG91dHB1dFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b09iamVjdChvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuXG4gICAgY29uc3QgYmFzZSA9IHsgLi4udGhpcy5jIH07XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9KU0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pO1xuICB9XG5cbiAgLy8gQ09NUEFSRVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksXG4gICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTtcbiAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9XG4gICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZihvdGhlckRhdGVUaW1lLCB1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJjcmVhdGVkIGJ5IGRpZmZpbmcgYW4gaW52YWxpZCBEYXRlVGltZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJPcHRzID0geyBsb2NhbGU6IHRoaXMubG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCAuLi5vcHRzIH07XG5cbiAgICBjb25zdCB1bml0cyA9IG1heWJlQXJyYXkodW5pdCkubWFwKER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxuICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgIGVhcmxpZXIgPSBvdGhlcklzTGF0ZXIgPyB0aGlzIDogb3RoZXJEYXRlVGltZSxcbiAgICAgIGxhdGVyID0gb3RoZXJJc0xhdGVyID8gb3RoZXJEYXRlVGltZSA6IHRoaXMsXG4gICAgICBkaWZmZWQgPSBkaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgZHVyT3B0cyk7XG5cbiAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNkaWZmfVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZk5vdyh1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bnRpbChvdGhlckRhdGVUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWUuXG4gICAqIEhpZ2hlci1vcmRlciB1bml0cyBtdXN0IGFsc28gYmUgaWRlbnRpY2FsIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAuXG4gICAqIE5vdGUgdGhhdCB0aW1lIHpvbmVzIGFyZSAqKmlnbm9yZWQqKiBpbiB0aGlzIGNvbXBhcmlzb24sIHdoaWNoIGNvbXBhcmVzIHRoZSAqKmxvY2FsKiogY2FsZW5kYXIgdGltZS4gVXNlIHtAbGluayBEYXRlVGltZSNzZXRab25lfSB0byBjb252ZXJ0IG9uZSBvZiB0aGUgZGF0ZXMgaWYgbmVlZGVkLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIG90aGVyRFQgaXMgaW4gdGhlIHNhbWUgY3VycmVudCBjYWxlbmRhciBkYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1NhbWUob3RoZXJEYXRlVGltZSwgdW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpbnB1dE1zID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7XG4gICAgY29uc3QgYWRqdXN0ZWRUb1pvbmUgPSB0aGlzLnNldFpvbmUob3RoZXJEYXRlVGltZS56b25lLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSk7XG4gICAgcmV0dXJuIGFkanVzdGVkVG9ab25lLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IGFkanVzdGVkVG9ab25lLmVuZE9mKHVuaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEYXRlVGltZXMgYXJlIGVxdWFsIGlmIGFuZCBvbmx5IGlmIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG1pbGxpc2Vjb25kLCBoYXZlIHRoZSBzYW1lIHpvbmUgYW5kIGxvY2F0aW9uLCBhbmQgYXJlIGJvdGggdmFsaWQuXG4gICAqIFRvIGNvbXBhcmUganVzdCB0aGUgbWlsbGlzZWNvbmQgdmFsdWVzLCB1c2UgYCtkdDEgPT09ICtkdDJgLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlciAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNWYWxpZCAmJlxuICAgICAgb3RoZXIuaXNWYWxpZCAmJlxuICAgICAgdGhpcy52YWx1ZU9mKCkgPT09IG90aGVyLnZhbHVlT2YoKSAmJlxuICAgICAgdGhpcy56b25lLmVxdWFscyhvdGhlci56b25lKSAmJlxuICAgICAgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzIFwiaW4gdHdvIGRheXNcIi4gQ2FuIG9ubHkgaW50ZXJuYXRpb25hbGl6ZSBpZiB5b3VyXG4gICAqIHBsYXRmb3JtIHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LiBSb3VuZHMgZG93biBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc3R5bGU9XCJsb25nXCJdIC0gdGhlIHN0eWxlIG9mIHVuaXRzLCBtdXN0IGJlIFwibG9uZ1wiLCBcInNob3J0XCIsIG9yIFwibmFycm93XCJcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHM7IGlmIG9taXR0ZWQsIG9yIGFuIGFycmF5LCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgYmVzdCB1bml0LiBVc2UgYW4gYXJyYXkgb3Igb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBvciBcInNlY29uZHNcIlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJvdW5kPXRydWVdIC0gd2hldGhlciB0byByb3VuZCB0aGUgbnVtYmVycyBpbiB0aGUgb3V0cHV0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMucGFkZGluZz0wXSAtIHBhZGRpbmcgaW4gbWlsbGlzZWNvbmRzLiBUaGlzIGFsbG93cyB5b3UgdG8gcm91bmQgdXAgdGhlIHJlc3VsdCBpZiBpdCBmaXRzIGluc2lkZSB0aGUgdGhyZXNob2xkLiBEb24ndCB1c2UgaW4gY29tYmluYXRpb24gd2l0aCB7cm91bmQ6IGZhbHNlfSBiZWNhdXNlIHRoZSBkZWNpbWFsIG91dHB1dCB3aWxsIGluY2x1ZGUgdGhlIHBhZGRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiaW4gMSBkYXlcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+IFwiZGVudHJvIGRlIDEgZMOtYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGFucyAyMyBoZXVyZXNcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoeyB1bml0OiBcImhvdXJzXCIgfSkgLy89PiBcIjQ4IGhvdXJzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiBcIjEuNSBkYXlzIGFnb1wiXG4gICAqL1xuICB0b1JlbGF0aXZlKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/ICh0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcpIDogMDtcbiAgICBsZXQgdW5pdHMgPSBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdO1xuICAgIGxldCB1bml0ID0gb3B0aW9ucy51bml0O1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudW5pdCkpIHtcbiAgICAgIHVuaXRzID0gb3B0aW9ucy51bml0O1xuICAgICAgdW5pdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShiYXNlLCB0aGlzLnBsdXMocGFkZGluZyksIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBudW1lcmljOiBcImFsd2F5c1wiLFxuICAgICAgdW5pdHMsXG4gICAgICB1bml0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXG4gICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZUNhbGVuZGFyKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUob3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pLCB0aGlzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhdXRvXCIsXG4gICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCJdLFxuICAgICAgY2FsZW5kYXJ5OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIHN0YXRpYyBtaW4oLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1pbiByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5taW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWF4IG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtYXhpbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWF4IERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIHN0YXRpYyBtYXgoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1heCByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5tYXgpO1xuICB9XG5cbiAgLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRpb25zLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWUsXG4gICAgICB9KTtcbiAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXRFeHBsYWluIGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gRk9STUFUIFBSRVNFVFNcblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfU0hPUlQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9TSE9SVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfTUVEKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9NRURfV0lUSF9XRUVLREFZO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfRlVMTCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX0ZVTEw7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnVHVlc2RheSwgT2N0b2JlciAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9IVUdFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfSFVHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1NJTVBMRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1NJTVBMRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NIT1JUX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfU0lNUExFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfU0lNUExFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVEVCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRWFzdGVybiBEYXlsaWdodCBUaW1lJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9TSE9SVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRUQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIDE0IE9jdCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEw7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0hVR0U7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUztcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmllbmRseURhdGVUaW1lKGRhdGVUaW1laXNoKSB7XG4gIGlmIChEYXRlVGltZS5pc0RhdGVUaW1lKGRhdGVUaW1laXNoKSkge1xuICAgIHJldHVybiBkYXRlVGltZWlzaDtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiBkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgdHlwZW9mIGRhdGVUaW1laXNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgIGBVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50OiAke2RhdGVUaW1laXNofSwgb2YgdHlwZSAke3R5cGVvZiBkYXRlVGltZWlzaH1gXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IsIEludmFsaWREdXJhdGlvbkVycm9yLCBJbnZhbGlkVW5pdEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gXCIuL2ltcGwvZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7IHBhcnNlSVNPRHVyYXRpb24sIHBhcnNlSVNPVGltZU9ubHkgfSBmcm9tIFwiLi9pbXBsL3JlZ2V4UGFyc2VyLmpzXCI7XG5pbXBvcnQge1xuICBhc051bWJlcixcbiAgaGFzT3duUHJvcGVydHksXG4gIGlzTnVtYmVyLFxuICBpc1VuZGVmaW5lZCxcbiAgbm9ybWFsaXplT2JqZWN0LFxuICByb3VuZFRvLFxufSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIER1cmF0aW9uXCI7XG5cbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBsb3dPcmRlck1hdHJpeCA9IHtcbiAgICB3ZWVrczoge1xuICAgICAgZGF5czogNyxcbiAgICAgIGhvdXJzOiA3ICogMjQsXG4gICAgICBtaW51dGVzOiA3ICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgZGF5czoge1xuICAgICAgaG91cnM6IDI0LFxuICAgICAgbWludXRlczogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGhvdXJzOiB7IG1pbnV0ZXM6IDYwLCBzZWNvbmRzOiA2MCAqIDYwLCBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwIH0sXG4gICAgbWludXRlczogeyBzZWNvbmRzOiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDAgfSxcbiAgICBzZWNvbmRzOiB7IG1pbGxpc2Vjb25kczogMTAwMCB9LFxuICB9LFxuICBjYXN1YWxNYXRyaXggPSB7XG4gICAgeWVhcnM6IHtcbiAgICAgIHF1YXJ0ZXJzOiA0LFxuICAgICAgbW9udGhzOiAxMixcbiAgICAgIHdlZWtzOiA1MixcbiAgICAgIGRheXM6IDM2NSxcbiAgICAgIGhvdXJzOiAzNjUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDM2NSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IDEzLFxuICAgICAgZGF5czogOTEsXG4gICAgICBob3VyczogOTEgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDkxICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiA0LFxuICAgICAgZGF5czogMzAsXG4gICAgICBob3VyczogMzAgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcblxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9LFxuICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCxcbiAgZGF5c0luTW9udGhBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDgwMCxcbiAgYWNjdXJhdGVNYXRyaXggPSB7XG4gICAgeWVhcnM6IHtcbiAgICAgIHF1YXJ0ZXJzOiA0LFxuICAgICAgbW9udGhzOiAxMixcbiAgICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA3LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlLFxuICAgICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHF1YXJ0ZXJzOiB7XG4gICAgICBtb250aHM6IDMsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsXG4gICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA0LFxuICAgICAgaG91cnM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCkgLyA0LFxuICAgICAgbWludXRlczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjApIC8gNCxcbiAgICAgIHNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjApIC8gNCxcbiAgICAgIG1pbGxpc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApIC8gNCxcbiAgICB9LFxuICAgIG1vbnRoczoge1xuICAgICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxuICAgICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQsXG4gICAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgLi4ubG93T3JkZXJNYXRyaXgsXG4gIH07XG5cbi8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZVxuY29uc3Qgb3JkZXJlZFVuaXRzID0gW1xuICBcInllYXJzXCIsXG4gIFwicXVhcnRlcnNcIixcbiAgXCJtb250aHNcIixcbiAgXCJ3ZWVrc1wiLFxuICBcImRheXNcIixcbiAgXCJob3Vyc1wiLFxuICBcIm1pbnV0ZXNcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwibWlsbGlzZWNvbmRzXCIsXG5dO1xuXG5jb25zdCByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMuc2xpY2UoMCkucmV2ZXJzZSgpO1xuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxuZnVuY3Rpb24gY2xvbmUoZHVyLCBhbHRzLCBjbGVhciA9IGZhbHNlKSB7XG4gIC8vIGRlZXAgbWVyZ2UgZm9yIHZhbHNcbiAgY29uc3QgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiB7IC4uLmR1ci52YWx1ZXMsIC4uLihhbHRzLnZhbHVlcyB8fCB7fSkgfSxcbiAgICBsb2M6IGR1ci5sb2MuY2xvbmUoYWx0cy5sb2MpLFxuICAgIGNvbnZlcnNpb25BY2N1cmFjeTogYWx0cy5jb252ZXJzaW9uQWNjdXJhY3kgfHwgZHVyLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICBtYXRyaXg6IGFsdHMubWF0cml4IHx8IGR1ci5tYXRyaXgsXG4gIH07XG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XG59XG5cbmZ1bmN0aW9uIGFudGlUcnVuYyhuKSB7XG4gIHJldHVybiBuIDwgMCA/IE1hdGguZmxvb3IobikgOiBNYXRoLmNlaWwobik7XG59XG5cbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcbmZ1bmN0aW9uIGNvbnZlcnQobWF0cml4LCBmcm9tTWFwLCBmcm9tVW5pdCwgdG9NYXAsIHRvVW5pdCkge1xuICBjb25zdCBjb252ID0gbWF0cml4W3RvVW5pdF1bZnJvbVVuaXRdLFxuICAgIHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udixcbiAgICBzYW1lU2lnbiA9IE1hdGguc2lnbihyYXcpID09PSBNYXRoLnNpZ24odG9NYXBbdG9Vbml0XSksXG4gICAgLy8gb2ssIHNvIHRoaXMgaXMgd2lsZCwgYnV0IHNlZSB0aGUgbWF0cml4IGluIHRoZSB0ZXN0c1xuICAgIGFkZGVkID1cbiAgICAgICFzYW1lU2lnbiAmJiB0b01hcFt0b1VuaXRdICE9PSAwICYmIE1hdGguYWJzKHJhdykgPD0gMSA/IGFudGlUcnVuYyhyYXcpIDogTWF0aC50cnVuYyhyYXcpO1xuICB0b01hcFt0b1VuaXRdICs9IGFkZGVkO1xuICBmcm9tTWFwW2Zyb21Vbml0XSAtPSBhZGRlZCAqIGNvbnY7XG59XG5cbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlcyhtYXRyaXgsIHZhbHMpIHtcbiAgcmV2ZXJzZVVuaXRzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29udmVydChtYXRyaXgsIHZhbHMsIHByZXZpb3VzLCB2YWxzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfVxuICB9LCBudWxsKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBwcm9wZXJ0aWVzIHdpdGggYSB2YWx1ZSBvZiAwIGZyb20gYW4gb2JqZWN0XG5mdW5jdGlvbiByZW1vdmVaZXJvZXModmFscykge1xuICBjb25zdCBuZXdWYWxzID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHMpKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICBuZXdWYWxzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld1ZhbHM7XG59XG5cbi8qKlxuICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24uZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbi5mcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uLmZyb21JU099LlxuICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24jeWVhcnN9LCB7QGxpbmsgRHVyYXRpb24jbW9udGhzfSwge0BsaW5rIER1cmF0aW9uI3dlZWtzfSwge0BsaW5rIER1cmF0aW9uI2RheXN9LCB7QGxpbmsgRHVyYXRpb24jaG91cnN9LCB7QGxpbmsgRHVyYXRpb24jbWludXRlc30sIHtAbGluayBEdXJhdGlvbiNzZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uI21pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbiNsb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24jbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbiNwbHVzfSwge0BsaW5rIER1cmF0aW9uI21pbnVzfSwge0BsaW5rIER1cmF0aW9uI25vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbiNzZXR9LCB7QGxpbmsgRHVyYXRpb24jcmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24jbmVnYXRlfS5cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbiNhc30sIHtAbGluayBEdXJhdGlvbiN0b0lTT30sIHtAbGluayBEdXJhdGlvbiN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24jdG9KU09OfVxuICpcbiAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVyYXRpb24ge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IGFjY3VyYXRlID0gY29uZmlnLmNvbnZlcnNpb25BY2N1cmFjeSA9PT0gXCJsb25ndGVybVwiIHx8IGZhbHNlO1xuICAgIGxldCBtYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4O1xuXG4gICAgaWYgKGNvbmZpZy5tYXRyaXgpIHtcbiAgICAgIG1hdHJpeCA9IGNvbmZpZy5tYXRyaXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/IFwibG9uZ3Rlcm1cIiA6IFwiY2FzdWFsXCI7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IGNvdW50IH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiBJZiB0aGlzIG9iamVjdCBpcyBlbXB0eSB0aGVuIGEgemVybyBtaWxsaXNlY29uZHMgZHVyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucXVhcnRlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3Vyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz1bXV0gLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgY3VzdG9tIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYER1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290ICR7XG4gICAgICAgICAgb2JqID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2Ygb2JqXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9wdHMuY29udmVyc2lvbkFjY3VyYWN5LFxuICAgICAgbWF0cml4OiBvcHRzLm1hdHJpeCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIER1cmF0aW9uTGlrZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QgfCBudW1iZXIgfCBEdXJhdGlvbn0gZHVyYXRpb25MaWtlXG4gICAqIE9uZSBvZjpcbiAgICogLSBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogLSBudW1iZXIgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kc1xuICAgKiAtIER1cmF0aW9uIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb25MaWtlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbkxpa2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25MaWtlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50ICR7ZHVyYXRpb25MaWtlfSBvZiB0eXBlICR7dHlwZW9mIGR1cmF0aW9uTGlrZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIGR1cmF0aW9uIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09EdXJhdGlvbih0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSB0aW1lIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMToyMjozMy40NDQnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDIyLCBzZWNvbmRzOiAzMywgbWlsbGlzZWNvbmRzOiA0NDQgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT1RpbWVPbmx5KHRleHQpO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7IGludmFsaWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAgIHllYXI6IFwieWVhcnNcIixcbiAgICAgIHllYXJzOiBcInllYXJzXCIsXG4gICAgICBxdWFydGVyOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBxdWFydGVyczogXCJxdWFydGVyc1wiLFxuICAgICAgbW9udGg6IFwibW9udGhzXCIsXG4gICAgICBtb250aHM6IFwibW9udGhzXCIsXG4gICAgICB3ZWVrOiBcIndlZWtzXCIsXG4gICAgICB3ZWVrczogXCJ3ZWVrc1wiLFxuICAgICAgZGF5OiBcImRheXNcIixcbiAgICAgIGRheXM6IFwiZGF5c1wiLFxuICAgICAgaG91cjogXCJob3Vyc1wiLFxuICAgICAgaG91cnM6IFwiaG91cnNcIixcbiAgICAgIG1pbnV0ZTogXCJtaW51dGVzXCIsXG4gICAgICBtaW51dGVzOiBcIm1pbnV0ZXNcIixcbiAgICAgIHNlY29uZDogXCJzZWNvbmRzXCIsXG4gICAgICBzZWNvbmRzOiBcInNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuXG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEdXJhdGlvbihvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkR1cmF0aW9uKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOlxuICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzXG4gICAqICogYHNgIGZvciBzZWNvbmRzXG4gICAqICogYG1gIGZvciBtaW51dGVzXG4gICAqICogYGhgIGZvciBob3Vyc1xuICAgKiAqIGBkYCBmb3IgZGF5c1xuICAgKiAqIGB3YCBmb3Igd2Vla3NcbiAgICogKiBgTWAgZm9yIG1vbnRoc1xuICAgKiAqIGB5YCBmb3IgeWVhcnNcbiAgICogTm90ZXM6XG4gICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXG4gICAqICogVG9rZW5zIGNhbiBiZSBlc2NhcGVkIGJ5IHdyYXBwaW5nIHdpdGggc2luZ2xlIHF1b3Rlcy5cbiAgICogKiBUaGUgZHVyYXRpb24gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHNldCBvZiB1bml0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyB1c2luZyB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30gYW5kIHRoZSBEdXJhdGlvbnMncyBjb252ZXJzaW9uIGFjY3VyYWN5IHNldHRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbG9vcj10cnVlXSAtIGZsb29yIG51bWVyaWNhbCB2YWx1ZXNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieSBkIHNcIikgLy89PiBcIjEgNiAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieXkgZGQgc3NzXCIpIC8vPT4gXCIwMSAwNiAwMDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJNIFNcIikgLy89PiBcIjEyIDUxODQwMjAwMFwiXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxuICAgIGNvbnN0IGZtdE9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgZmxvb3I6IG9wdHMucm91bmQgIT09IGZhbHNlICYmIG9wdHMuZmxvb3IgIT09IGZhbHNlLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBEdXJhdGlvbiB3aXRoIGFsbCB1bml0cyBpbmNsdWRlZC5cbiAgICogVG8gbW9kaWZ5IGl0cyBiZWhhdmlvciB1c2UgdGhlIGBsaXN0U3R5bGVgIGFuZCBhbnkgSW50bC5OdW1iZXJGb3JtYXQgb3B0aW9uLCB0aG91Z2ggYHVuaXREaXNwbGF5YCBpcyBlc3BlY2lhbGx5IHJlbGV2YW50LlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvTnVtYmVyRm9ybWF0XG4gICAqIEBwYXJhbSBvcHRzIC0gT24gb3B0aW9uIG9iamVjdCB0byBvdmVycmlkZSB0aGUgZm9ybWF0dGluZy4gQWNjZXB0cyB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcHRpb25zIHBhcmFtZXRlciBvZiB0aGUgbmF0aXZlIGBJbnQuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxLCBob3VyczogNSwgbWludXRlczogNiB9KVxuICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgbGlzdFN0eWxlOiBcImxvbmdcIiB9KSAvLz0+ICcxIGRheSwgNSBob3VycywgYW5kIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyB1bml0RGlzcGxheTogXCJzaG9ydFwiIH0pIC8vPT4gJzEgZGF5LCA1IGhyLCA2IG1pbidcbiAgICogYGBgXG4gICAqL1xuICB0b0h1bWFuKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGwgPSBvcmRlcmVkVW5pdHNcbiAgICAgIC5tYXAoKHVuaXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZXNbdW5pdF07XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9jXG4gICAgICAgICAgLm51bWJlckZvcm1hdHRlcih7IHN0eWxlOiBcInVuaXRcIiwgdW5pdERpc3BsYXk6IFwibG9uZ1wiLCAuLi5vcHRzLCB1bml0OiB1bml0LnNsaWNlKDAsIC0xKSB9KVxuICAgICAgICAgIC5mb3JtYXQodmFsKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChuKSA9PiBuKTtcblxuICAgIHJldHVybiB0aGlzLmxvY1xuICAgICAgLmxpc3RGb3JtYXR0ZXIoeyB0eXBlOiBcImNvbmp1bmN0aW9uXCIsIHN0eWxlOiBvcHRzLmxpc3RTdHlsZSB8fCBcIm5hcnJvd1wiLCAuLi5vcHRzIH0pXG4gICAgICAuZm9ybWF0KGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHRvT2JqZWN0KCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHsgLi4udGhpcy52YWx1ZXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAzLCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1AzWVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDQsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDRNVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNSB9KS50b0lTTygpIC8vPT4gJ1A1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDUgfSkudG9JU08oKSAvLz0+ICdQVDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiA2IH0pLnRvSVNPKCkgLy89PiAnUFQwLjAwNlMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKCkge1xuICAgIC8vIHdlIGNvdWxkIHVzZSB0aGUgZm9ybWF0dGVyLCBidXQgdGhpcyBpcyBhbiBlYXNpZXIgd2F5IHRvIGdldCB0aGUgbWluaW11bSBzdHJpbmdcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgcyA9IFwiUFwiO1xuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IHRoaXMueWVhcnMgKyBcIllcIjtcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSB0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArIFwiV1wiO1xuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gdGhpcy5kYXlzICsgXCJEXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcbiAgICAgIHMgKz0gXCJUXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDApIHMgKz0gdGhpcy5ob3VycyArIFwiSFwiO1xuICAgIGlmICh0aGlzLm1pbnV0ZXMgIT09IDApIHMgKz0gdGhpcy5taW51dGVzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcbiAgICAgIC8vIHRoaXMgd2lsbCBoYW5kbGUgXCJmbG9hdGluZyBwb2ludCBtYWRuZXNzXCIgYnkgcmVtb3ZpbmcgZXh0cmEgZGVjaW1hbCBwbGFjZXNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODAwNC9pcy1mbG9hdGluZy1wb2ludC1tYXRoLWJyb2tlblxuICAgICAgcyArPSByb3VuZFRvKHRoaXMuc2Vjb25kcyArIHRoaXMubWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcIlNcIjtcbiAgICBpZiAocyA9PT0gXCJQXCIpIHMgKz0gXCJUMFNcIjtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiwgZm9ybWF0dGVkIGFzIGEgdGltZSBvZiBkYXkuXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlIGR1cmF0aW9uIGlzIGludmFsaWQsIG5lZ2F0aXZlLCBvciBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gMjQgaG91cnMuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoKSAvLz0+ICcxMTowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NNaWxsaXNlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDA6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTEwMDAwLjAwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IG1pbGxpcyA9IHRoaXMudG9NaWxsaXMoKTtcbiAgICBpZiAobWlsbGlzIDwgMCB8fCBtaWxsaXMgPj0gODY0MDAwMDApIHJldHVybiBudWxsO1xuXG4gICAgb3B0cyA9IHtcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBmYWxzZSxcbiAgICAgIHN1cHByZXNzU2Vjb25kczogZmFsc2UsXG4gICAgICBpbmNsdWRlUHJlZml4OiBmYWxzZSxcbiAgICAgIGZvcm1hdDogXCJleHRlbmRlZFwiLFxuICAgICAgLi4ub3B0cyxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNoaWZ0VG8oXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpO1xuXG4gICAgbGV0IGZtdCA9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcImhobW1cIiA6IFwiaGg6bW1cIjtcblxuICAgIGlmICghb3B0cy5zdXBwcmVzc1NlY29uZHMgfHwgdmFsdWUuc2Vjb25kcyAhPT0gMCB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcbiAgICAgIGZtdCArPSBvcHRzLmZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJzc1wiIDogXCI6c3NcIjtcbiAgICAgIGlmICghb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcyB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcbiAgICAgICAgZm10ICs9IFwiLlNTU1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzdHIgPSB2YWx1ZS50b0Zvcm1hdChmbXQpO1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZVByZWZpeCkge1xuICAgICAgc3RyID0gXCJUXCIgKyBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXMoXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3Vyc1wiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ3llYXJzJykgLy89PiAyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdtb250aHMnKSAvLz0+IDBcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ2RheXMnKSAvLz0+IDNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG1peGVkID0geyAuLi50aGlzLnZhbHVlcywgLi4ubm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IG1peGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjb252ZXJzaW9uQWNjdXJhY3ksIG1hdHJpeCB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgIGNvbnN0IG9wdHMgPSB7IGxvYywgbWF0cml4LCBjb252ZXJzaW9uQWNjdXJhY3kgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBub3JtYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHZhbHMgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzY2FsZSB1bml0cyB0byBpdHMgbGFyZ2VzdCByZXByZXNlbnRhdGlvblxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiA5MDAwMCB9KS5yZXNjYWxlKCkudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogMSwgc2Vjb25kczogMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHJlc2NhbGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHZhbHMgPSByZW1vdmVaZXJvZXModGhpcy5ub3JtYWxpemUoKS5zaGlmdFRvQWxsKCkudG9PYmplY3QoKSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhpcyBEdXJhdGlvbiBpbnRvIGl0cyByZXByZXNlbnRhdGlvbiBpbiBhIGRpZmZlcmVudCBzZXQgb2YgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkuc2hpZnRUbygnbWludXRlcycsICdtaWxsaXNlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiA2MCwgbWlsbGlzZWNvbmRzOiAzMDAwMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2hpZnRUbyguLi51bml0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuaXRzID0gdW5pdHMubWFwKCh1KSA9PiBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHUpKTtcblxuICAgIGNvbnN0IGJ1aWx0ID0ge30sXG4gICAgICBhY2N1bXVsYXRlZCA9IHt9LFxuICAgICAgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBsZXQgbGFzdFVuaXQ7XG5cbiAgICBmb3IgKGNvbnN0IGsgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAodW5pdHMuaW5kZXhPZihrKSA+PSAwKSB7XG4gICAgICAgIGxhc3RVbml0ID0gaztcblxuICAgICAgICBsZXQgb3duID0gMDtcblxuICAgICAgICAvLyBhbnl0aGluZyB3ZSBoYXZlbid0IGJvaWxlZCBkb3duIHlldCBzaG91bGQgZ2V0IGJvaWxlZCB0byB0aGlzIHVuaXRcbiAgICAgICAgZm9yIChjb25zdCBhayBpbiBhY2N1bXVsYXRlZCkge1xuICAgICAgICAgIG93biArPSB0aGlzLm1hdHJpeFtha11ba10gKiBhY2N1bXVsYXRlZFtha107XG4gICAgICAgICAgYWNjdW11bGF0ZWRbYWtdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgYW55dGhpbmcgdGhhdCdzIGFscmVhZHkgaW4gdGhpcyB1bml0XG4gICAgICAgIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICAgIG93biArPSB2YWxzW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaSA9IE1hdGgudHJ1bmMob3duKTtcbiAgICAgICAgYnVpbHRba10gPSBpO1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IChvd24gKiAxMDAwIC0gaSAqIDEwMDApIC8gMTAwMDtcblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIGZ1cnRoZXIgZG93biB0aGUgY2hhaW4gdGhhdCBzaG91bGQgYmUgcm9sbGVkIHVwIGluIHRvIHRoaXNcbiAgICAgICAgZm9yIChjb25zdCBkb3duIGluIHZhbHMpIHtcbiAgICAgICAgICBpZiAob3JkZXJlZFVuaXRzLmluZGV4T2YoZG93bikgPiBvcmRlcmVkVW5pdHMuaW5kZXhPZihrKSkge1xuICAgICAgICAgICAgY29udmVydCh0aGlzLm1hdHJpeCwgdmFscywgZG93biwgYnVpbHQsIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UsIGtlZXAgaXQgaW4gdGhlIHdpbmdzIHRvIGJvaWwgaXQgbGF0ZXJcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFueXRoaW5nIGxlZnRvdmVyIGJlY29tZXMgdGhlIGRlY2ltYWwgZm9yIHRoZSBsYXN0IHVuaXRcbiAgICAvLyBsYXN0VW5pdCBtdXN0IGJlIGRlZmluZWQgc2luY2UgdW5pdHMgaXMgbm90IGVtcHR5XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgIGlmIChhY2N1bXVsYXRlZFtrZXldICE9PSAwKSB7XG4gICAgICAgIGJ1aWx0W2xhc3RVbml0XSArPVxuICAgICAgICAgIGtleSA9PT0gbGFzdFVuaXQgPyBhY2N1bXVsYXRlZFtrZXldIDogYWNjdW11bGF0ZWRba2V5XSAvIHRoaXMubWF0cml4W2xhc3RVbml0XVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogYnVpbHQgfSwgdHJ1ZSkubm9ybWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hpZnQgdGhpcyBEdXJhdGlvbiB0byBhbGwgYXZhaWxhYmxlIHVuaXRzLlxuICAgKiBTYW1lIGFzIHNoaWZ0VG8oXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIilcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzaGlmdFRvQWxsKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gdGhpcy5zaGlmdFRvKFxuICAgICAgXCJ5ZWFyc1wiLFxuICAgICAgXCJtb250aHNcIixcbiAgICAgIFwid2Vla3NcIixcbiAgICAgIFwiZGF5c1wiLFxuICAgICAgXCJob3Vyc1wiLFxuICAgICAgXCJtaW51dGVzXCIsXG4gICAgICBcInNlY29uZHNcIixcbiAgICAgIFwibWlsbGlzZWNvbmRzXCJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBuZWdhdGVkID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgbmVnYXRlZFtrXSA9IHRoaXMudmFsdWVzW2tdID09PSAwID8gMCA6IC10aGlzLnZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBuZWdhdGVkIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2Vla3NcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91cnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHtcbiAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbFxuICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwO1xuICAgICAgcmV0dXJuIHYxID09PSB2MjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREYXRlVGltZUVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIERhdGVUaW1lOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkSW50ZXJ2YWxFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBJbnRlcnZhbDogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkVW5pdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHVuaXQpIHtcbiAgICBzdXBlcihgSW52YWxpZCB1bml0ICR7dW5pdH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgWm9uZUlzQWJzdHJhY3RFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlpvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3NcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGludGVnZXJCZXR3ZWVuLFxuICBpc0xlYXBZZWFyLFxuICB0aW1lT2JqZWN0LFxuICBkYXlzSW5ZZWFyLFxuICBkYXlzSW5Nb250aCxcbiAgd2Vla3NJbldlZWtZZWFyLFxuICBpc0ludGVnZXIsXG59IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ludmFsaWQuanNcIjtcblxuY29uc3Qgbm9uTGVhcExhZGRlciA9IFswLCAzMSwgNTksIDkwLCAxMjAsIDE1MSwgMTgxLCAyMTIsIDI0MywgMjczLCAzMDQsIDMzNF0sXG4gIGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xuXG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXG4gICAgXCJ1bml0IG91dCBvZiByYW5nZVwiLFxuICAgIGB5b3Ugc3BlY2lmaWVkICR7dmFsdWV9IChvZiB0eXBlICR7dHlwZW9mIHZhbHVlfSkgYXMgYSAke3VuaXR9LCB3aGljaCBpcyBpbnZhbGlkYFxuICApO1xufVxuXG5mdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXkpKTtcblxuICBpZiAoeWVhciA8IDEwMCAmJiB5ZWFyID49IDApIHtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG5cbiAgY29uc3QganMgPSBkLmdldFVUQ0RheSgpO1xuXG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIGNvbnN0IHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyLFxuICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleCgoaSkgPT4gaSA8IG9yZGluYWwpLFxuICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xuICByZXR1cm4geyBtb250aDogbW9udGgwICsgMSwgZGF5IH07XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnT2JqLFxuICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSxcbiAgICB3ZWVrZGF5ID0gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gIGxldCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICB3ZWVrWWVhcjtcblxuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5LCAuLi50aW1lT2JqZWN0KGdyZWdPYmopIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgY29uc3QgeyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSB9ID0gd2Vla0RhdGEsXG4gICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDMsXG4gICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qod2Vla0RhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnRGF0YTtcbiAgY29uc3Qgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4geyB5ZWFyLCBvcmRpbmFsLCAuLi50aW1lT2JqZWN0KGdyZWdEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgb3JkaW5hbCB9ID0gb3JkaW5hbERhdGE7XG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdChvcmRpbmFsRGF0YSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRXZWVrRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhciksXG4gICAgdmFsaWRXZWVrID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIHdlZWtzSW5XZWVrWWVhcihvYmoud2Vla1llYXIpKSxcbiAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrWWVhclwiLCBvYmoud2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrXCIsIG9iai53ZWVrKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrZGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla2RheVwiLCBvYmoud2Vla2RheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkT3JkaW5hbERhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE9yZGluYWwpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJvcmRpbmFsXCIsIG9iai5vcmRpbmFsKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgIHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKSxcbiAgICB2YWxpZERheSA9IGludGVnZXJCZXR3ZWVuKG9iai5kYXksIDEsIGRheXNJbk1vbnRoKG9iai55ZWFyLCBvYmoubW9udGgpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1vbnRoKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibW9udGhcIiwgb2JqLm1vbnRoKTtcbiAgfSBlbHNlIGlmICghdmFsaWREYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJkYXlcIiwgb2JqLmRheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0gPSBvYmo7XG4gIGNvbnN0IHZhbGlkSG91ciA9XG4gICAgICBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHxcbiAgICAgIChob3VyID09PSAyNCAmJiBtaW51dGUgPT09IDAgJiYgc2Vjb25kID09PSAwICYmIG1pbGxpc2Vjb25kID09PSAwKSxcbiAgICB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpLFxuICAgIHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSksXG4gICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiaG91clwiLCBob3VyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaW51dGUpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaW51dGVcIiwgbWludXRlKTtcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi4vZHVyYXRpb24uanNcIjtcblxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xuICBjb25zdCB1dGNEYXlTdGFydCA9IChkdCkgPT4gZHQudG9VVEMoMCwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnN0YXJ0T2YoXCJkYXlcIikudmFsdWVPZigpLFxuICAgIG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7XG4gIHJldHVybiBNYXRoLmZsb29yKER1cmF0aW9uLmZyb21NaWxsaXMobXMpLmFzKFwiZGF5c1wiKSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XG4gIGNvbnN0IGRpZmZlcnMgPSBbXG4gICAgW1wieWVhcnNcIiwgKGEsIGIpID0+IGIueWVhciAtIGEueWVhcl0sXG4gICAgW1wicXVhcnRlcnNcIiwgKGEsIGIpID0+IGIucXVhcnRlciAtIGEucXVhcnRlciArIChiLnllYXIgLSBhLnllYXIpICogNF0sXG4gICAgW1wibW9udGhzXCIsIChhLCBiKSA9PiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTJdLFxuICAgIFtcbiAgICAgIFwid2Vla3NcIixcbiAgICAgIChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgICAgICByZXR1cm4gKGRheXMgLSAoZGF5cyAlIDcpKSAvIDc7XG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wiZGF5c1wiLCBkYXlEaWZmXSxcbiAgXTtcblxuICBjb25zdCByZXN1bHRzID0ge307XG4gIGNvbnN0IGVhcmxpZXIgPSBjdXJzb3I7XG4gIGxldCBsb3dlc3RPcmRlciwgaGlnaFdhdGVyO1xuXG4gIGZvciAoY29uc3QgW3VuaXQsIGRpZmZlcl0gb2YgZGlmZmVycykge1xuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcblxuICAgICAgcmVzdWx0c1t1bml0XSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGVhcmxpZXIucGx1cyhyZXN1bHRzKTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIHJlc3VsdHNbdW5pdF0tLTtcbiAgICAgICAgY3Vyc29yID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykge1xuICBsZXQgW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl0gPSBoaWdoT3JkZXJEaWZmcyhlYXJsaWVyLCBsYXRlciwgdW5pdHMpO1xuXG4gIGNvbnN0IHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xuXG4gIGNvbnN0IGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihcbiAgICAodSkgPT4gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiXS5pbmRleE9mKHUpID49IDBcbiAgKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChoaWdoV2F0ZXIgPCBsYXRlcikge1xuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoeyBbbG93ZXN0T3JkZXJdOiAxIH0pO1xuICAgIH1cblxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkdXJhdGlvbiA9IER1cmF0aW9uLmZyb21PYmplY3QocmVzdWx0cywgb3B0cyk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKVxuICAgICAgLnNoaWZ0VG8oLi4ubG93ZXJPcmRlclVuaXRzKVxuICAgICAgLnBsdXMoZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxufVxuIiwiY29uc3QgbnVtYmVyaW5nU3lzdGVtcyA9IHtcbiAgYXJhYjogXCJbXFx1MDY2MC1cXHUwNjY5XVwiLFxuICBhcmFiZXh0OiBcIltcXHUwNkYwLVxcdTA2RjldXCIsXG4gIGJhbGk6IFwiW1xcdTFCNTAtXFx1MUI1OV1cIixcbiAgYmVuZzogXCJbXFx1MDlFNi1cXHUwOUVGXVwiLFxuICBkZXZhOiBcIltcXHUwOTY2LVxcdTA5NkZdXCIsXG4gIGZ1bGx3aWRlOiBcIltcXHVGRjEwLVxcdUZGMTldXCIsXG4gIGd1anI6IFwiW1xcdTBBRTYtXFx1MEFFRl1cIixcbiAgaGFuaWRlYzogXCJb44CHfOS4gHzkuox85LiJfOWbm3zkupR85YWtfOS4g3zlhat85LmdXVwiLFxuICBraG1yOiBcIltcXHUxN0UwLVxcdTE3RTldXCIsXG4gIGtuZGE6IFwiW1xcdTBDRTYtXFx1MENFRl1cIixcbiAgbGFvbzogXCJbXFx1MEVEMC1cXHUwRUQ5XVwiLFxuICBsaW1iOiBcIltcXHUxOTQ2LVxcdTE5NEZdXCIsXG4gIG1seW06IFwiW1xcdTBENjYtXFx1MEQ2Rl1cIixcbiAgbW9uZzogXCJbXFx1MTgxMC1cXHUxODE5XVwiLFxuICBteW1yOiBcIltcXHUxMDQwLVxcdTEwNDldXCIsXG4gIG9yeWE6IFwiW1xcdTBCNjYtXFx1MEI2Rl1cIixcbiAgdGFtbGRlYzogXCJbXFx1MEJFNi1cXHUwQkVGXVwiLFxuICB0ZWx1OiBcIltcXHUwQzY2LVxcdTBDNkZdXCIsXG4gIHRoYWk6IFwiW1xcdTBFNTAtXFx1MEU1OV1cIixcbiAgdGlidDogXCJbXFx1MEYyMC1cXHUwRjI5XVwiLFxuICBsYXRuOiBcIlxcXFxkXCIsXG59O1xuXG5jb25zdCBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7XG4gIGFyYWI6IFsxNjMyLCAxNjQxXSxcbiAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLFxuICBiYWxpOiBbNjk5MiwgNzAwMV0sXG4gIGJlbmc6IFsyNTM0LCAyNTQzXSxcbiAgZGV2YTogWzI0MDYsIDI0MTVdLFxuICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sXG4gIGd1anI6IFsyNzkwLCAyNzk5XSxcbiAga2htcjogWzYxMTIsIDYxMjFdLFxuICBrbmRhOiBbMzMwMiwgMzMxMV0sXG4gIGxhb286IFszNzkyLCAzODAxXSxcbiAgbGltYjogWzY0NzAsIDY0NzldLFxuICBtbHltOiBbMzQzMCwgMzQzOV0sXG4gIG1vbmc6IFs2MTYwLCA2MTY5XSxcbiAgbXltcjogWzQxNjAsIDQxNjldLFxuICBvcnlhOiBbMjkxOCwgMjkyN10sXG4gIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSxcbiAgdGVsdTogWzMxNzQsIDMxODNdLFxuICB0aGFpOiBbMzY2NCwgMzY3M10sXG4gIHRpYnQ6IFszODcyLCAzODgxXSxcbn07XG5cbmNvbnN0IGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFxbfFxcXV0vZywgXCJcIikuc3BsaXQoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcbiAgbGV0IHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xuICAgICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XTtcbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlnaXRSZWdleCh7IG51bWJlcmluZ1N5c3RlbSB9LCBhcHBlbmQgPSBcIlwiKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKGAke251bWJlcmluZ1N5c3RlbXNbbnVtYmVyaW5nU3lzdGVtIHx8IFwibGF0blwiXX0ke2FwcGVuZH1gKTtcbn1cbiIsImltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vZm9ybWF0cy5qc1wiO1xuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuL3V0aWwuanNcIjtcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBPYmplY3Qua2V5cyhvYmopLnNvcnQoKSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgY29uc3QgbW9udGhzTG9uZyA9IFtcbiAgXCJKYW51YXJ5XCIsXG4gIFwiRmVicnVhcnlcIixcbiAgXCJNYXJjaFwiLFxuICBcIkFwcmlsXCIsXG4gIFwiTWF5XCIsXG4gIFwiSnVuZVwiLFxuICBcIkp1bHlcIixcbiAgXCJBdWd1c3RcIixcbiAgXCJTZXB0ZW1iZXJcIixcbiAgXCJPY3RvYmVyXCIsXG4gIFwiTm92ZW1iZXJcIixcbiAgXCJEZWNlbWJlclwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoc1Nob3J0ID0gW1xuICBcIkphblwiLFxuICBcIkZlYlwiLFxuICBcIk1hclwiLFxuICBcIkFwclwiLFxuICBcIk1heVwiLFxuICBcIkp1blwiLFxuICBcIkp1bFwiLFxuICBcIkF1Z1wiLFxuICBcIlNlcFwiLFxuICBcIk9jdFwiLFxuICBcIk5vdlwiLFxuICBcIkRlY1wiLFxuXTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoc05hcnJvdyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNMb25nXTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBjYXNlIFwiMi1kaWdpdFwiOlxuICAgICAgcmV0dXJuIFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTG9uZyA9IFtcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuICBcIlN1bmRheVwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzU2hvcnQgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG5cbmV4cG9ydCBjb25zdCB3ZWVrZGF5c05hcnJvdyA9IFtcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiLCBcIlNcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNMb25nXTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXJpZGllbXMgPSBbXCJBTVwiLCBcIlBNXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc0xvbmcgPSBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzU2hvcnQgPSBbXCJCQ1wiLCBcIkFEXCJdO1xuXG5leHBvcnQgY29uc3QgZXJhc05hcnJvdyA9IFtcIkJcIiwgXCJBXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gZXJhcyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNMb25nXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gd2Vla2RheXMobGVuZ3RoKVtkdC53ZWVrZGF5IC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG1vbnRocyhsZW5ndGgpW2R0Lm1vbnRoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIG51bWVyaWMgPSBcImFsd2F5c1wiLCBuYXJyb3cgPSBmYWxzZSkge1xuICBjb25zdCB1bml0cyA9IHtcbiAgICB5ZWFyczogW1wieWVhclwiLCBcInlyLlwiXSxcbiAgICBxdWFydGVyczogW1wicXVhcnRlclwiLCBcInF0ci5cIl0sXG4gICAgbW9udGhzOiBbXCJtb250aFwiLCBcIm1vLlwiXSxcbiAgICB3ZWVrczogW1wid2Vla1wiLCBcIndrLlwiXSxcbiAgICBkYXlzOiBbXCJkYXlcIiwgXCJkYXlcIiwgXCJkYXlzXCJdLFxuICAgIGhvdXJzOiBbXCJob3VyXCIsIFwiaHIuXCJdLFxuICAgIG1pbnV0ZXM6IFtcIm1pbnV0ZVwiLCBcIm1pbi5cIl0sXG4gICAgc2Vjb25kczogW1wic2Vjb25kXCIsIFwic2VjLlwiXSxcbiAgfTtcblxuICBjb25zdCBsYXN0YWJsZSA9IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl0uaW5kZXhPZih1bml0KSA9PT0gLTE7XG5cbiAgaWYgKG51bWVyaWMgPT09IFwiYXV0b1wiICYmIGxhc3RhYmxlKSB7XG4gICAgY29uc3QgaXNEYXkgPSB1bml0ID09PSBcImRheXNcIjtcbiAgICBzd2l0Y2ggKGNvdW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9tb3Jyb3dcIiA6IGBuZXh0ICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwieWVzdGVyZGF5XCIgOiBgbGFzdCAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9kYXlcIiA6IGB0aGlzICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGRlZmF1bHQ6IC8vIGZhbGwgdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzSW5QYXN0ID0gT2JqZWN0LmlzKGNvdW50LCAtMCkgfHwgY291bnQgPCAwLFxuICAgIGZtdFZhbHVlID0gTWF0aC5hYnMoY291bnQpLFxuICAgIHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDEsXG4gICAgbGlsVW5pdHMgPSB1bml0c1t1bml0XSxcbiAgICBmbXRVbml0ID0gbmFycm93XG4gICAgICA/IHNpbmd1bGFyXG4gICAgICAgID8gbGlsVW5pdHNbMV1cbiAgICAgICAgOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXVxuICAgICAgOiBzaW5ndWxhclxuICAgICAgPyB1bml0c1t1bml0XVswXVxuICAgICAgOiB1bml0O1xuICByZXR1cm4gaXNJblBhc3QgPyBgJHtmbXRWYWx1ZX0gJHtmbXRVbml0fSBhZ29gIDogYGluICR7Zm10VmFsdWV9ICR7Zm10VW5pdH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nKGtub3duRm9ybWF0KSB7XG4gIC8vIHRoZXNlIGFsbCBoYXZlIHRoZSBvZmZzZXRzIHJlbW92ZWQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGVtXG4gIC8vIHdpdGhvdXQgYWxsIHRoZSBpbnRsIHN0dWZmIHRoaXMgaXMgYmFja2ZpbGxpbmdcbiAgY29uc3QgZmlsdGVyZWQgPSBwaWNrKGtub3duRm9ybWF0LCBbXG4gICAgICBcIndlZWtkYXlcIixcbiAgICAgIFwiZXJhXCIsXG4gICAgICBcInllYXJcIixcbiAgICAgIFwibW9udGhcIixcbiAgICAgIFwiZGF5XCIsXG4gICAgICBcImhvdXJcIixcbiAgICAgIFwibWludXRlXCIsXG4gICAgICBcInNlY29uZFwiLFxuICAgICAgXCJ0aW1lWm9uZU5hbWVcIixcbiAgICAgIFwiaG91ckN5Y2xlXCIsXG4gICAgXSksXG4gICAga2V5ID0gc3RyaW5naWZ5KGZpbHRlcmVkKSxcbiAgICBkYXRlVGltZUh1Z2UgPSBcIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9NRURfV0lUSF9XRUVLREFZKTpcbiAgICAgIHJldHVybiBcIkVFRSwgTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfRlVMTCk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfSFVHRSk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfU0lNUExFKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkhIOm1tOnNzXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9IVUdFKTpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKTpcbiAgICAgIHJldHVybiBcIkVFRSwgZCBMTEwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG4gPSBcIm51bWVyaWNcIixcbiAgcyA9IFwic2hvcnRcIixcbiAgbCA9IFwibG9uZ1wiO1xuXG5leHBvcnQgY29uc3QgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuIiwiaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIGxldCBzID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cblxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogRm9ybWF0cy5EQVRFX1NIT1JULFxuICBERDogRm9ybWF0cy5EQVRFX01FRCxcbiAgREREOiBGb3JtYXRzLkRBVEVfRlVMTCxcbiAgRERERDogRm9ybWF0cy5EQVRFX0hVR0UsXG4gIHQ6IEZvcm1hdHMuVElNRV9TSU1QTEUsXG4gIHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQsXG4gIFQ6IEZvcm1hdHMuVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCxcbiAgVFRUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlQsXG4gIGZmOiBGb3JtYXRzLkRBVEVUSU1FX01FRCxcbiAgZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IEZvcm1hdHMuREFURVRJTUVfSFVHRSxcbiAgRjogRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMsXG4gIEZGOiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyxcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtYXR0ZXIge1xuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUZvcm1hdChmbXQpIHtcbiAgICAvLyB3aGl0ZS1zcGFjZSBpcyBhbHdheXMgY29uc2lkZXJlZCBhIGxpdGVyYWwgaW4gdXNlci1wcm92aWRlZCBmb3JtYXRzXG4gICAgLy8gdGhlIFwiIFwiIHRva2VuIGhhcyBhIHNwZWNpYWwgbWVhbmluZyAoc2VlIHVuaXRGb3JUb2tlbilcblxuICAgIGxldCBjdXJyZW50ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRGdWxsID0gXCJcIixcbiAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNwbGl0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gZm10LmNoYXJBdChpKTtcbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkIHx8IC9eXFxzKyQvLnRlc3QoY3VycmVudEZ1bGwpLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogL15cXHMrJC8udGVzdChjdXJyZW50RnVsbCksIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQgfHwgL15cXHMrJC8udGVzdChjdXJyZW50RnVsbCksIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbiAgfVxuXG4gIHN0YXRpYyBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XG4gICAgcmV0dXJuIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cblxuICBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xuICAgIH1cbiAgICBjb25zdCBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZShkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWVQYXJ0cyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdFRvUGFydHMoKTtcbiAgfVxuXG4gIGZvcm1hdEludGVydmFsKGludGVydmFsLCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGludGVydmFsLnN0YXJ0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZHRmLmZvcm1hdFJhbmdlKGludGVydmFsLnN0YXJ0LnRvSlNEYXRlKCksIGludGVydmFsLmVuZC50b0pTRGF0ZSgpKTtcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG5cbiAgbnVtKG4sIHAgPSAwKSB7XG4gICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5XG4gICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkge1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuXG4gICAgaWYgKHAgPiAwKSB7XG4gICAgICBvcHRzLnBhZFRvID0gcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XG4gICAgY29uc3Qga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gXCJncmVnb3J5XCIsXG4gICAgICBzdHJpbmcgPSAob3B0cywgZXh0cmFjdCkgPT4gdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCksXG4gICAgICBmb3JtYXRPZmZzZXQgPSAob3B0cykgPT4ge1xuICAgICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIG1lcmlkaWVtID0gKCkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLm1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpXG4gICAgICAgICAgOiBzdHJpbmcoeyBob3VyOiBcIm51bWVyaWNcIiwgaG91ckN5Y2xlOiBcImgxMlwiIH0sIFwiZGF5cGVyaW9kXCIpLFxuICAgICAgbW9udGggPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gubW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxuICAgICAgICAgIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7IG1vbnRoOiBsZW5ndGggfSA6IHsgbW9udGg6IGxlbmd0aCwgZGF5OiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpLFxuICAgICAgd2Vla2RheSA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC53ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcbiAgICAgICAgICA6IHN0cmluZyhcbiAgICAgICAgICAgICAgc3RhbmRhbG9uZSA/IHsgd2Vla2RheTogbGVuZ3RoIH0gOiB7IHdlZWtkYXk6IGxlbmd0aCwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sXG4gICAgICAgICAgICAgIFwid2Vla2RheVwiXG4gICAgICAgICAgICApLFxuICAgICAgbWF5YmVNYWNybyA9ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xuICAgICAgICBpZiAoZm9ybWF0T3B0cykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcmEgPSAobGVuZ3RoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2ggPyBFbmdsaXNoLmVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHsgZXJhOiBsZW5ndGggfSwgXCJlcmFcIiksXG4gICAgICB0b2tlblRvU3RyaW5nID0gKHRva2VuKSA9PiB7XG4gICAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUtMS9kYXRlLXRpbWUjVE9DLVN0YW5kYWxvbmUtdnMuLUZvcm1hdC1TdHlsZXNcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAgIC8vIG1zXG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQpO1xuICAgICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCwgMik7XG4gICAgICAgICAgLy8gZnJhY3Rpb25hbCBzZWNvbmRzXG4gICAgICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwKSwgMik7XG4gICAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMDApKTtcbiAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUpO1xuICAgICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSwgMik7XG4gICAgICAgICAgLy8gaG91cnNcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyKTtcbiAgICAgICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMiwgMik7XG4gICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyKTtcbiAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyLCAyKTtcbiAgICAgICAgICAvLyBvZmZzZXRcbiAgICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArNlxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogXCJuYXJyb3dcIiwgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSArMDY6MDBcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwic2hvcnRcIiwgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2MDBcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwidGVjaGllXCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSBFU1RcbiAgICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHsgZm9ybWF0OiBcInNob3J0XCIsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xuICAgICAgICAgIGNhc2UgXCJaWlpaWlwiOlxuICAgICAgICAgICAgLy8gbGlrZSBFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcbiAgICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHsgZm9ybWF0OiBcImxvbmdcIiwgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XG4gICAgICAgICAgLy8gem9uZVxuICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAgICAgICAgICAgIHJldHVybiBkdC56b25lTmFtZTtcbiAgICAgICAgICAvLyBtZXJpZGllbXNcbiAgICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgcmV0dXJuIG1lcmlkaWVtKCk7XG4gICAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiBcIm51bWVyaWNcIiB9LCBcImRheVwiKSA6IHRoaXMubnVtKGR0LmRheSk7XG4gICAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6IFwiMi1kaWdpdFwiIH0sIFwiZGF5XCIpIDogdGhpcy5udW0oZHQuZGF5LCAyKTtcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla2RheSk7XG4gICAgICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlcydcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgdHJ1ZSk7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBmb3JtYXRcbiAgICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla2RheSk7XG4gICAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlcydcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgICAgLy8gbW9udGhzIC0gc3RhbmRhbG9uZVxuICAgICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIm51bWVyaWNcIiwgZGF5OiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xuICAgICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMSwgZG9lc24ndCBzZWVtIHRvIHdvcmtcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xuICAgICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJuYXJyb3dcIiwgdHJ1ZSk7XG4gICAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCIyLWRpZ2l0XCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKXG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAgIC8vIHllYXJzXG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMjAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpIDogdGhpcy5udW0oZHQueWVhcik7XG4gICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDE0XG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiBcIjItZGlnaXRcIiB9LCBcInllYXJcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDEyXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiBcIm51bWVyaWNcIiB9LCBcInllYXJcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA0KTtcbiAgICAgICAgICBjYXNlIFwieXl5eXl5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDAwMDAxMlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNik7XG4gICAgICAgICAgLy8gZXJhc1xuICAgICAgICAgIGNhc2UgXCJHXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFEXG4gICAgICAgICAgICByZXR1cm4gZXJhKFwic2hvcnRcIik7XG4gICAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEFubm8gRG9taW5pXG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibG9uZ1wiKTtcbiAgICAgICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgICAgIHJldHVybiBlcmEoXCJuYXJyb3dcIik7XG4gICAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla1llYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla1llYXIsIDQpO1xuICAgICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla051bWJlcik7XG4gICAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla051bWJlciwgMik7XG4gICAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsKTtcbiAgICAgICAgICBjYXNlIFwib29vXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCwgMyk7XG4gICAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIpO1xuICAgICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcbiAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnRzKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgdG9rZW5Ub1N0cmluZyk7XG4gIH1cblxuICBmb3JtYXREdXJhdGlvbkZyb21TdHJpbmcoZHVyLCBmbXQpIHtcbiAgICBjb25zdCB0b2tlblRvRmllbGQgPSAodG9rZW4pID0+IHtcbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZGF5XCI7XG4gICAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgIHJldHVybiBcIndlZWtcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSAobGlsZHVyKSA9PiAodG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkID0gdG9rZW5Ub0ZpZWxkKHRva2VuKTtcbiAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm51bShsaWxkdXIuZ2V0KG1hcHBlZCksIHRva2VuLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksXG4gICAgICByZWFsVG9rZW5zID0gdG9rZW5zLnJlZHVjZShcbiAgICAgICAgKGZvdW5kLCB7IGxpdGVyYWwsIHZhbCB9KSA9PiAobGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCkpLFxuICAgICAgICBbXVxuICAgICAgKSxcbiAgICAgIGNvbGxhcHNlZCA9IGR1ci5zaGlmdFRvKC4uLnJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKCh0KSA9PiB0KSk7XG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2Vucyh0b2tlbnMsIHRva2VuVG9TdHJpbmcoY29sbGFwc2VkKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWQge1xuICBjb25zdHJ1Y3RvcihyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICB9XG5cbiAgdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5yZWFzb259OiAke3RoaXMuZXhwbGFuYXRpb259YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFkU3RhcnQsIHJvdW5kVG8sIGhhc1JlbGF0aXZlLCBmb3JtYXRPZmZzZXQgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgKiBhcyBFbmdsaXNoIGZyb20gXCIuL2VuZ2xpc2guanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLy8gdG9kbyAtIHJlbWFwIGNhY2hpbmdcblxubGV0IGludGxMRkNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRMRihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBkdGYgPSBpbnRsTEZDYWNoZVtrZXldO1xuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsRFRDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxEVENhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xuICB9XG4gIHJldHVybiBkdGY7XG59XG5cbmxldCBpbnRsTnVtQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTnVtQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgaW50bFJlbENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3QgeyBiYXNlLCAuLi5jYWNoZUtleU9wdHMgfSA9IG9wdHM7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsUmVsQ2FjaGVba2V5XTtcbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsUmVsQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5sZXQgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XG5cbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG5cbiAgLy8gcHJpdmF0ZSBzdWJ0YWdzIGFuZCB1bmljb2RlIHN1YnRhZ3MgaGF2ZSBvcmRlcmluZyByZXF1aXJlbWVudHMsXG4gIC8vIGFuZCB3ZSdyZSBub3QgcHJvcGVybHkgcGFyc2luZyB0aGlzLCBzbyBqdXN0IHN0cmlwIG91dCB0aGVcbiAgLy8gcHJpdmF0ZSBvbmVzIGlmIHRoZXkgZXhpc3QuXG4gIGNvbnN0IHhJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXgtXCIpO1xuICBpZiAoeEluZGV4ICE9PSAtMSkge1xuICAgIGxvY2FsZVN0ciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgeEluZGV4KTtcbiAgfVxuXG4gIGNvbnN0IHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXUtXCIpO1xuICBpZiAodUluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBbbG9jYWxlU3RyXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgb3B0aW9ucztcbiAgICBsZXQgc2VsZWN0ZWRTdHI7XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICAgIHNlbGVjdGVkU3RyID0gbG9jYWxlU3RyO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBzbWFsbGVyO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4gW3NlbGVjdGVkU3RyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgaWYgKCFsb2NhbGVTdHIuaW5jbHVkZXMoXCItdS1cIikpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBcIi11XCI7XG4gICAgfVxuXG4gICAgaWYgKG91dHB1dENhbGVuZGFyKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1jYS0ke291dHB1dENhbGVuZGFyfWA7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgbG9jYWxlU3RyICs9IGAtbnUtJHtudW1iZXJpbmdTeXN0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7XG4gIGNvbnN0IG1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHtcbiAgY29uc3QgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fFxuICAgICAgIWxvYy5sb2NhbGUgfHxcbiAgICAgIGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlOdW1iZXJGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IHBhZFRvLCBmbG9vciwgLi4ub3RoZXJPcHRzIH0gPSBvcHRzO1xuXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UsIC4uLm9wdHMgfTtcbiAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvO1xuICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG4gICAgICByZXR1cm4gcGFkU3RhcnQoZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seURhdGVGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5vcmlnaW5hbFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgeiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5vcHRzLnRpbWVab25lKSB7XG4gICAgICAvLyBEb24ndCBhcHBseSBhbnkgd29ya2Fyb3VuZHMgaWYgYSB0aW1lWm9uZSBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGluIG9wdHNcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAvLyBVVEMtOCBvciBFdGMvVVRDLTggYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YSwgb25seSBFdGMvR01UKzggYW5kIHRoZSBsaWtlLlxuICAgICAgLy8gVGhhdCBpcyB3aHkgZml4ZWQtb2Zmc2V0IFRaIGlzIHNldCB0byB0aGF0IHVubGVzcyBpdCBpczpcbiAgICAgIC8vIDEuIFJlcHJlc2VudGluZyBvZmZzZXQgMCB3aGVuIFVUQyBpcyB1c2VkIHRvIG1haW50YWluIHByZXZpb3VzIGJlaGF2aW9yIGFuZCBkb2VzIG5vdCBiZWNvbWUgR01ULlxuICAgICAgLy8gMi4gVW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXI6XG4gICAgICAvLyAgICAtIHNvbWUgZG8gbm90IHN1cHBvcnQgRXRjL1xuICAgICAgLy8gICAgLSA8IEV0Yy9HTVQtMTQsID4gRXRjL0dNVCsxMiwgYW5kIDMwLW1pbnV0ZSBvciA0NS1taW51dGUgb2Zmc2V0cyBhcmUgbm90IHBhcnQgb2YgdHpkYXRhXG4gICAgICBjb25zdCBnbXRPZmZzZXQgPSAtMSAqIChkdC5vZmZzZXQgLyA2MCk7XG4gICAgICBjb25zdCBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBgRXRjL0dNVCske2dtdE9mZnNldH1gIDogYEV0Yy9HTVQke2dtdE9mZnNldH1gO1xuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcbiAgICAgICAgeiA9IG9mZnNldFo7XG4gICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YSBzb1xuICAgICAgICAvLyB3ZSBtYW51YWxseSBhcHBseSB0aGUgb2Zmc2V0IGFuZCBzdWJzdGl0dXRlIHRoZSB6b25lIGFzIG5lZWRlZC5cbiAgICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IGR0LnNldFpvbmUoXCJVVENcIikucGx1cyh7IG1pbnV0ZXM6IGR0Lm9mZnNldCB9KTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFpvbmUgPSBkdC56b25lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwiaWFuYVwiKSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXN0b20gem9uZXMgY2FuIGhhdmUgYW55IG9mZnNldCAvIG9mZnNldE5hbWUgc28gd2UganVzdCBtYW51YWxseVxuICAgICAgLy8gYXBwbHkgdGhlIG9mZnNldCBhbmQgc3Vic3RpdHV0ZSB0aGUgem9uZSBhcyBuZWVkZWQuXG4gICAgICB6ID0gXCJVVENcIjtcbiAgICAgIHRoaXMuZHQgPSBkdC5zZXRab25lKFwiVVRDXCIpLnBsdXMoeyBtaW51dGVzOiBkdC5vZmZzZXQgfSk7XG4gICAgICB0aGlzLm9yaWdpbmFsWm9uZSA9IGR0LnpvbmU7XG4gICAgfVxuXG4gICAgY29uc3QgaW50bE9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuICAgIGludGxPcHRzLnRpbWVab25lID0gaW50bE9wdHMudGltZVpvbmUgfHwgejtcbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICBmb3JtYXQoKSB7XG4gICAgaWYgKHRoaXMub3JpZ2luYWxab25lKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHRvIHN1YnN0aXR1dGUgaW4gdGhlIGFjdHVhbCB6b25lIG5hbWUsIHdlIGhhdmUgdG8gdXNlXG4gICAgICAvLyBmb3JtYXRUb1BhcnRzIHNvIHRoYXQgdGhlIHRpbWV6b25lIGNhbiBiZSByZXBsYWNlZC5cbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRvUGFydHMoKVxuICAgICAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICB9XG5cbiAgZm9ybWF0VG9QYXJ0cygpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZHRmLmZvcm1hdFRvUGFydHModGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICBpZiAodGhpcy5vcmlnaW5hbFpvbmUpIHtcbiAgICAgIHJldHVybiBwYXJ0cy5tYXAoKHBhcnQpID0+IHtcbiAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gXCJ0aW1lWm9uZU5hbWVcIikge1xuICAgICAgICAgIGNvbnN0IG9mZnNldE5hbWUgPSB0aGlzLm9yaWdpbmFsWm9uZS5vZmZzZXROYW1lKHRoaXMuZHQudHMsIHtcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5kdC5sb2NhbGUsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMub3B0cy50aW1lWm9uZU5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnBhcnQsXG4gICAgICAgICAgICB2YWx1ZTogb2Zmc2V0TmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFBvbHlSZWxGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSB7IHN0eWxlOiBcImxvbmdcIiwgLi4ub3B0cyB9O1xuICAgIGlmICghaXNFbmdsaXNoICYmIGhhc1JlbGF0aXZlKCkpIHtcbiAgICAgIHRoaXMucnRmID0gZ2V0Q2FjaGVkUlRGKGludGwsIG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdChjb3VudCwgdW5pdCkge1xuICAgIGlmICh0aGlzLnJ0Zikge1xuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFbmdsaXNoLmZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxlIHtcbiAgc3RhdGljIGZyb21PcHRzKG9wdHMpIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOID0gZmFsc2UpIHtcbiAgICBjb25zdCBzcGVjaWZpZWRMb2NhbGUgPSBsb2NhbGUgfHwgU2V0dGluZ3MuZGVmYXVsdExvY2FsZTtcbiAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGNvbnN0IGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIGNvbnN0IG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICBjb25zdCBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICAgIGludGxEVENhY2hlID0ge307XG4gICAgaW50bE51bUNhY2hlID0ge307XG4gICAgaW50bFJlbENhY2hlID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG5cbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcblxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICB9XG5cbiAgbGlzdGluZ01vZGUoKSB7XG4gICAgY29uc3QgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcbiAgICBjb25zdCBoYXNOb1dlaXJkbmVzcyA9XG4gICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiKSAmJlxuICAgICAgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyBcImVuXCIgOiBcImludGxcIjtcbiAgfVxuXG4gIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXG4gICAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxuICAgICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IGZhbHNlIH0pO1xuICB9XG5cbiAgbW9udGhzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBFbmdsaXNoLm1vbnRocywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdCA/IHsgbW9udGg6IGxlbmd0aCwgZGF5OiBcIm51bWVyaWNcIiB9IDogeyBtb250aDogbGVuZ3RoIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcbiAgICAgICAgdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgd2Vla2RheXMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gud2Vla2RheXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXRcbiAgICAgICAgICA/IHsgd2Vla2RheTogbGVuZ3RoLCB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH1cbiAgICAgICAgICA6IHsgd2Vla2RheTogbGVuZ3RoIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwV2Vla2RheXMoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJ3ZWVrZGF5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIG1lcmlkaWVtcyhkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZihcbiAgICAgIHRoaXMsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBkZWZhdWx0T0ssXG4gICAgICAoKSA9PiBFbmdsaXNoLm1lcmlkaWVtcyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cbiAgICAgICAgLy8gZm9yIEFNIGFuZCBQTS4gVGhpcyBpcyBwcm9iYWJseSB3cm9uZywgYnV0IGl0J3MgbWFrZXMgcGFyc2luZyB3YXkgZWFzaWVyLlxuICAgICAgICBpZiAoIXRoaXMubWVyaWRpZW1DYWNoZSkge1xuICAgICAgICAgIGNvbnN0IGludGwgPSB7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyQ3ljbGU6IFwiaDEyXCIgfTtcbiAgICAgICAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBbRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgOSksIERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDE5KV0ubWFwKFxuICAgICAgICAgICAgKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZGF5cGVyaW9kXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmlkaWVtQ2FjaGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGVyYXMobGVuZ3RoLCBkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgRW5nbGlzaC5lcmFzLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRsID0geyBlcmE6IGxlbmd0aCB9O1xuXG4gICAgICAvLyBUaGlzIGlzIHByb2JsZW1hdGljLiBEaWZmZXJlbnQgY2FsZW5kYXJzIGFyZSBnb2luZyB0byBkZWZpbmUgZXJhcyB0b3RhbGx5IGRpZmZlcmVudGx5LiBXaGF0IEkgbmVlZCBpcyB0aGUgbWluaW11bSBzZXQgb2YgZGF0ZXNcbiAgICAgIC8vIHRvIGRlZmluaXRlbHkgZW51bWVyYXRlIHRoZW0uXG4gICAgICBpZiAoIXRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLmVyYUNhY2hlW2xlbmd0aF0gPSBbRGF0ZVRpbWUudXRjKC00MCwgMSwgMSksIERhdGVUaW1lLnV0YygyMDE3LCAxLCAxKV0ubWFwKChkdCkgPT5cbiAgICAgICAgICB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZXJhXCIpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVyYUNhY2hlW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICBjb25zdCBkZiA9IHRoaXMuZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSxcbiAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICBtYXRjaGluZyA9IHJlc3VsdHMuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkKTtcbiAgICByZXR1cm4gbWF0Y2hpbmcgPyBtYXRjaGluZy52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBudW1iZXJGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgLy8gdGhpcyBmb3JjZXNpbXBsZSBvcHRpb24gaXMgbmV2ZXIgdXNlZCAodGhlIG9ubHkgY2FsbGVyIHNob3J0LWNpcmN1aXRzIG9uIGl0LCBidXQgaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUpXG4gICAgLy8gKGluIGNvbnRyYXN0LCB0aGUgcmVzdCBvZiB0aGUgY29uZGl0aW9uIGlzIHVzZWQgaGVhdmlseSlcbiAgICByZXR1cm4gbmV3IFBvbHlOdW1iZXJGb3JtYXR0ZXIodGhpcy5pbnRsLCBvcHRzLmZvcmNlU2ltcGxlIHx8IHRoaXMuZmFzdE51bWJlcnMsIG9wdHMpO1xuICB9XG5cbiAgZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFBvbHlEYXRlRm9ybWF0dGVyKGR0LCB0aGlzLmludGwsIGludGxPcHRzKTtcbiAgfVxuXG4gIHJlbEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfVxuXG4gIGxpc3RGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldENhY2hlZExGKHRoaXMuaW50bCwgb3B0cyk7XG4gIH1cblxuICBpc0VuZ2xpc2goKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBcImVuXCIgfHxcbiAgICAgIHRoaXMubG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IFwiZW4tdXNcIiB8fFxuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGUuc3RhcnRzV2l0aChcImVuLXVzXCIpXG4gICAgKTtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmXG4gICAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gb3RoZXIubnVtYmVyaW5nU3lzdGVtICYmXG4gICAgICB0aGlzLm91dHB1dENhbGVuZGFyID09PSBvdGhlci5vdXRwdXRDYWxlbmRhclxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVudHJ1bmNhdGVZZWFyLFxuICBzaWduZWRPZmZzZXQsXG4gIHBhcnNlSW50ZWdlcixcbiAgcGFyc2VNaWxsaXMsXG4gIGlzVW5kZWZpbmVkLFxuICBwYXJzZUZsb2F0aW5nLFxufSBmcm9tIFwiLi91dGlsLmpzXCI7XG5pbXBvcnQgKiBhcyBFbmdsaXNoIGZyb20gXCIuL2VuZ2xpc2guanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuXG4vKlxuICogVGhpcyBmaWxlIGhhbmRsZXMgcGFyc2luZyBmb3Igd2VsbC1zcGVjaWZpZWQgZm9ybWF0cy4gSGVyZSdzIGhvdyBpdCB3b3JrczpcbiAqIFR3byB0aGluZ3MgZ28gaW50byBwYXJzaW5nOiBhIHJlZ2V4IHRvIG1hdGNoIHdpdGggYW5kIGFuIGV4dHJhY3RvciB0byB0YWtlIGFwYXJ0IHRoZSBncm91cHMgaW4gdGhlIG1hdGNoLlxuICogQW4gZXh0cmFjdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVnZXggbWF0Y2ggYXJyYXkgYW5kIHJldHVybnMgYSB7IHllYXI6IC4uLiwgbW9udGg6IC4uLiB9IG9iamVjdFxuICogcGFyc2UoKSBkb2VzIHRoZSB3b3JrIG9mIGV4ZWN1dGluZyB0aGUgcmVnZXggYW5kIGFwcGx5aW5nIHRoZSBleHRyYWN0b3IuIEl0IHRha2VzIG11bHRpcGxlIHJlZ2V4L2V4dHJhY3RvciBwYWlycyB0byB0cnkgaW4gc2VxdWVuY2UuXG4gKiBFeHRyYWN0b3JzIGNhbiB0YWtlIGEgXCJjdXJzb3JcIiByZXByZXNlbnRpbmcgdGhlIG9mZnNldCBpbiB0aGUgbWF0Y2ggdG8gbG9vayBhdC4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGNvbWJpbmUgZXh0cmFjdG9ycy5cbiAqIGNvbWJpbmVFeHRyYWN0b3JzKCkgZG9lcyB0aGUgd29yayBvZiBjb21iaW5pbmcgdGhlbSwga2VlcGluZyB0cmFjayBvZiB0aGUgY3Vyc29yIHRocm91Z2ggbXVsdGlwbGUgZXh0cmFjdGlvbnMuXG4gKiBTb21lIGV4dHJhY3Rpb25zIGFyZSBzdXBlciBkdW1iIGFuZCBzaW1wbGVQYXJzZSBhbmQgZnJvbVN0cmluZ3MgaGVscCBEUlkgdGhlbS5cbiAqL1xuXG5jb25zdCBpYW5hUmVnZXggPSAvW0EtWmEtel8rLV17MSwyNTZ9KD86Oj9cXC9bQS1aYS16MC05XystXXsxLDI1Nn0oPzpcXC9bQS1aYS16MC05XystXXsxLDI1Nn0pPyk/LztcblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XG4gIHJldHVybiAobSkgPT5cbiAgICBleHRyYWN0b3JzXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoW21lcmdlZFZhbHMsIG1lcmdlZFpvbmUsIGN1cnNvcl0sIGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgW3ZhbCwgem9uZSwgbmV4dF0gPSBleChtLCBjdXJzb3IpO1xuICAgICAgICAgIHJldHVybiBbeyAuLi5tZXJnZWRWYWxzLCAuLi52YWwgfSwgem9uZSB8fCBtZXJnZWRab25lLCBuZXh0XTtcbiAgICAgICAgfSxcbiAgICAgICAgW3t9LCBudWxsLCAxXVxuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbnVsbCwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS87XG5jb25zdCBpc29FeHRlbmRlZFpvbmUgPSBgKD86JHtvZmZzZXRSZWdleC5zb3VyY2V9Pyg/OlxcXFxbKCR7aWFuYVJlZ2V4LnNvdXJjZX0pXFxcXF0pPyk/YDtcbmNvbnN0IGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy87XG5jb25zdCBpc29UaW1lUmVnZXggPSBSZWdFeHAoYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JHtpc29FeHRlbmRlZFpvbmV9YCk7XG5jb25zdCBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OlQke2lzb1RpbWVSZWdleC5zb3VyY2V9KT9gKTtcbmNvbnN0IGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vO1xuY29uc3QgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vO1xuY29uc3QgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS87XG5jb25zdCBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZShcIndlZWtZZWFyXCIsIFwid2Vla051bWJlclwiLCBcIndlZWtEYXlcIik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpO1xuY29uc3Qgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvOyAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG5jb25zdCBzcWxUaW1lUmVnZXggPSBSZWdFeHAoXG4gIGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSA/KD86JHtvZmZzZXRSZWdleC5zb3VyY2V9fCgke2lhbmFSZWdleC5zb3VyY2V9KSk/YFxuKTtcbmNvbnN0IHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86ICR7c3FsVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xuXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcbiAgY29uc3QgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICB5ZWFyOiBpbnQobWF0Y2gsIGN1cnNvciksXG4gICAgbW9udGg6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMSksXG4gICAgZGF5OiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDEpLFxuICB9O1xuXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09UaW1lKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICBob3VyczogaW50KG1hdGNoLCBjdXJzb3IsIDApLFxuICAgIG1pbnV0ZXM6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kczogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcbiAgICBtaWxsaXNlY29uZHM6IHBhcnNlTWlsbGlzKG1hdGNoW2N1cnNvciArIDNdKSxcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xufVxuXG4vLyBJU08gdGltZSBwYXJzaW5nXG5cbmNvbnN0IGlzb1RpbWVPbmx5ID0gUmVnRXhwKGBeVD8ke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSRgKTtcblxuLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcblxuY29uc3QgaXNvRHVyYXRpb24gPVxuICAvXi0/UCg/Oig/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVkpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVcpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUQpPyg/OlQoPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylIKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDIwfSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgY29uc3QgW3MsIHllYXJTdHIsIG1vbnRoU3RyLCB3ZWVrU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCBtaWxsaXNlY29uZHNTdHJdID1cbiAgICBtYXRjaDtcblxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuICBjb25zdCBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSBcIi1cIjtcblxuICBjb25zdCBtYXliZU5lZ2F0ZSA9IChudW0sIGZvcmNlID0gZmFsc2UpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpKSA/IC1udW0gOiBudW07XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXG4gICAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcbiAgICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXG4gICAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxuICAgICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09IFwiLTBcIiksXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcyksXG4gICAgfSxcbiAgXTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxuY29uc3Qgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MCxcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXG4gICAgbW9udGg6IEVuZ2xpc2gubW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0ciksXG4gIH07XG5cbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID1cbiAgICAgIHdlZWtkYXlTdHIubGVuZ3RoID4gM1xuICAgICAgICA/IEVuZ2xpc2gud2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxXG4gICAgICAgIDogRW5nbGlzaC53ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxuY29uc3QgcmZjMjgyMiA9XG4gIC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgICAgLFxuICAgICAgd2Vla2RheVN0cixcbiAgICAgIGRheVN0cixcbiAgICAgIG1vbnRoU3RyLFxuICAgICAgeWVhclN0cixcbiAgICAgIGhvdXJTdHIsXG4gICAgICBtaW51dGVTdHIsXG4gICAgICBzZWNvbmRTdHIsXG4gICAgICBvYnNPZmZzZXQsXG4gICAgICBtaWxPZmZzZXQsXG4gICAgICBvZmZIb3VyU3RyLFxuICAgICAgb2ZmTWludXRlU3RyLFxuICAgIF0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG5cbiAgbGV0IG9mZnNldDtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcbn1cblxuLy8gaHR0cCBkYXRlXG5cbmNvbnN0IHJmYzExMjMgPVxuICAgIC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIHJmYzg1MCA9XG4gICAgL14oTW9uZGF5fFR1ZXNkYXl8V2VkbmVzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICBhc2NpaSA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QVNDSUkobWF0Y2gpIHtcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIHllYXJTdHJdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuY29uc3QgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29XZWVrUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcblxuY29uc3QgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1ltZCxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPV2Vla0RhdGEsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09PcmRpbmFsRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5cbi8qXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTT0RhdGUocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSxcbiAgICBbaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWVdLFxuICAgIFtpc29UaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXRdXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJGQzI4MjJEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHByZXByb2Nlc3NSRkMyODIyKHMpLCBbcmZjMjgyMiwgZXh0cmFjdFJGQzI4MjJdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW2FzY2lpLCBleHRyYWN0QVNDSUldXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7XG59XG5cbmNvbnN0IGV4dHJhY3RJU09UaW1lT25seSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPVGltZU9ubHkocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb1RpbWVPbmx5LCBleHRyYWN0SVNPVGltZU9ubHldKTtcbn1cblxuY29uc3Qgc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFltZFJlZ2V4LCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3Qgc3FsVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxUaW1lUmVnZXgpO1xuXG5jb25zdCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNRTChzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXVxuICApO1xufVxuIiwiaW1wb3J0IHsgcGFyc2VNaWxsaXMsIGlzVW5kZWZpbmVkLCB1bnRydW5jYXRlWWVhciwgc2lnbmVkT2Zmc2V0LCBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCB7IGRpZ2l0UmVnZXgsIHBhcnNlRGlnaXRzIH0gZnJvbSBcIi4vZGlnaXRzLmpzXCI7XG5pbXBvcnQgeyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcblxuY29uc3QgTUlTU0lOR19GVFAgPSBcIm1pc3NpbmcgSW50bC5EYXRlVGltZUZvcm1hdC5mb3JtYXRUb1BhcnRzIHN1cHBvcnRcIjtcblxuZnVuY3Rpb24gaW50VW5pdChyZWdleCwgcG9zdCA9IChpKSA9PiBpKSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcG9zdChwYXJzZURpZ2l0cyhzKSkgfTtcbn1cblxuY29uc3QgTkJTUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbmNvbnN0IHNwYWNlT3JOQlNQID0gYFsgJHtOQlNQfV1gO1xuY29uc3Qgc3BhY2VPck5CU1BSZWdFeHAgPSBuZXcgUmVnRXhwKHNwYWNlT3JOQlNQLCBcImdcIik7XG5cbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICAvLyBtYWtlIHNwYWNlIGFuZCBub24gYnJlYWthYmxlIHNwYWNlIGNoYXJhY3RlcnMgaW50ZXJjaGFuZ2VhYmxlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuP1wiKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpIHtcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwuL2csIFwiXCIpIC8vIGlnbm9yZSBkb3RzIHRoYXQgd2VyZSBtYWRlIG9wdGlvbmFsXG4gICAgLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIFwiIFwiKSAvLyBpbnRlcmNoYW5nZSBzcGFjZSBhbmQgbmJzcFxuICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKFwifFwiKSksXG4gICAgICBkZXNlcjogKFtzXSkgPT5cbiAgICAgICAgc3RyaW5ncy5maW5kSW5kZXgoKGkpID0+IHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpID09PSBzdHJpcEluc2Vuc2l0aXZpdGllcyhpKSkgKyBzdGFydEluZGV4LFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoWywgaCwgbV0pID0+IHNpZ25lZE9mZnNldChoLCBtKSwgZ3JvdXBzIH07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHMgfTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlVG9rZW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gdW5pdEZvclRva2VuKHRva2VuLCBsb2MpIHtcbiAgY29uc3Qgb25lID0gZGlnaXRSZWdleChsb2MpLFxuICAgIHR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsyfVwiKSxcbiAgICB0aHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInszfVwiKSxcbiAgICBmb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezR9XCIpLFxuICAgIHNpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns2fVwiKSxcbiAgICBvbmVPclR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDJ9XCIpLFxuICAgIG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwzfVwiKSxcbiAgICBvbmVUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDZ9XCIpLFxuICAgIG9uZVRvTmluZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDl9XCIpLFxuICAgIHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcInsyLDR9XCIpLFxuICAgIGZvdXJUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns0LDZ9XCIpLFxuICAgIGxpdGVyYWwgPSAodCkgPT4gKHsgcmVnZXg6IFJlZ0V4cChlc2NhcGVUb2tlbih0LnZhbCkpLCBkZXNlcjogKFtzXSkgPT4gcywgbGl0ZXJhbDogdHJ1ZSB9KSxcbiAgICB1bml0YXRlID0gKHQpID0+IHtcbiAgICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgICAvLyBlcmFcbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJsb25nXCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIG9yZGluYWxzXG4gICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIC8vIHRpbWVcbiAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcbiAgICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgICAvLyBtZXJpZGllbVxuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubWVyaWRpZW1zKCksIDApO1xuICAgICAgICAvLyB3ZWVrWWVhciAoaylcbiAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAgIC8vIHdlZWtOdW1iZXIgKFcpXG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICAvLyB3ZWVrZGF5c1xuICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBvZmZzZXQvem9uZVxuICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSg/OjooJHt0d28uc291cmNlfSkpP2ApLCAyKTtcbiAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKCR7dHdvLnNvdXJjZX0pP2ApLCAyKTtcbiAgICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXG4gICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZSgvW2Etel8rLS9dezEsMjU2fT8vaSk7XG4gICAgICAgIC8vIHRoaXMgc3BlY2lhbC1jYXNlIFwidG9rZW5cIiByZXByZXNlbnRzIGEgcGxhY2Ugd2hlcmUgYSBtYWNyby10b2tlbiBleHBhbmRlZCBpbnRvIGEgd2hpdGUtc3BhY2UgbGl0ZXJhbFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2UgYWNjZXB0IGFueSBub24tbmV3bGluZSB3aGl0ZS1zcGFjZVxuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUoL1teXFxTXFxuXFxyXS8pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgdW5pdCA9IHVuaXRhdGUodG9rZW4pIHx8IHtcbiAgICBpbnZhbGlkUmVhc29uOiBNSVNTSU5HX0ZUUCxcbiAgfTtcblxuICB1bml0LnRva2VuID0gdG9rZW47XG5cbiAgcmV0dXJuIHVuaXQ7XG59XG5cbmNvbnN0IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsID0ge1xuICB5ZWFyOiB7XG4gICAgXCIyLWRpZ2l0XCI6IFwieXlcIixcbiAgICBudW1lcmljOiBcInl5eXl5XCIsXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgbnVtZXJpYzogXCJNXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiTU1cIixcbiAgICBzaG9ydDogXCJNTU1cIixcbiAgICBsb25nOiBcIk1NTU1cIixcbiAgfSxcbiAgZGF5OiB7XG4gICAgbnVtZXJpYzogXCJkXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiZGRcIixcbiAgfSxcbiAgd2Vla2RheToge1xuICAgIHNob3J0OiBcIkVFRVwiLFxuICAgIGxvbmc6IFwiRUVFRVwiLFxuICB9LFxuICBkYXlwZXJpb2Q6IFwiYVwiLFxuICBkYXlQZXJpb2Q6IFwiYVwiLFxuICBob3VyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIixcbiAgfSxcbiAgbWludXRlOiB7XG4gICAgbnVtZXJpYzogXCJtXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwibW1cIixcbiAgfSxcbiAgc2Vjb25kOiB7XG4gICAgbnVtZXJpYzogXCJzXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwic3NcIixcbiAgfSxcbiAgdGltZVpvbmVOYW1lOiB7XG4gICAgbG9uZzogXCJaWlpaWlwiLFxuICAgIHNob3J0OiBcIlpaWlwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGZvcm1hdE9wdHMpIHtcbiAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gcGFydDtcblxuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICBjb25zdCBpc1NwYWNlID0gL15cXHMrJC8udGVzdCh2YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6ICFpc1NwYWNlLFxuICAgICAgdmFsOiBpc1NwYWNlID8gXCIgXCIgOiB2YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSBmb3JtYXRPcHRzW3R5cGVdO1xuXG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICBjb25zdCByZSA9IHVuaXRzLm1hcCgodSkgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCBcIlwiKTtcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgY29uc3QgYWxsID0ge307XG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgY29uc3QgdG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla051bWJlclwiO1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBsZXQgem9uZSA9IG51bGw7XG4gIGxldCBzcGVjaWZpY09mZnNldDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICB6b25lID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZShtYXRjaGVzLlopO1xuICAgIH1cbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICBjb25zdCBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gW3ZhbHMsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XTtcbn1cblxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XG59XG5cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpO1xuXG4gIGlmICh0b2tlbnMgPT0gbnVsbCB8fCB0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi50b2tlbnMubWFwKCh0KSA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICB1bml0cyA9IHRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKSxcbiAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoKHQpID0+IHQuaW52YWxpZFJlYXNvbik7XG5cbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtyZWdleFN0cmluZywgaGFuZGxlcnNdID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgXCJpXCIpLFxuICAgICAgW3Jhd01hdGNoZXMsIG1hdGNoZXNdID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldF0gPSBtYXRjaGVzXG4gICAgICAgID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKVxuICAgICAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgcmVnZXgsIHJhd01hdGNoZXMsIG1hdGNoZXMsIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB7IHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb24gfSA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCk7XG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgbG9jYWxlKSB7XG4gIGlmICghZm9ybWF0T3B0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXREYXRlVGltZVBhcnRzKGdldER1bW15RGF0ZVRpbWUoKSk7XG4gIHJldHVybiBwYXJ0cy5tYXAoKHApID0+IHRva2VuRm9yUGFydChwLCBmb3JtYXRPcHRzKSk7XG59XG4iLCIvKlxuICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxuICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xuICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXG4qL1xuXG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3MuanNcIjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8vIFRZUEVTXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiICYmIG8gJSAxID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn1cblxuLy8gQ0FQQUJJTElUSUVTXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbiA9IDIpIHtcbiAgY29uc3QgaXNOZWcgPSBpbnB1dCA8IDA7XG4gIGxldCBwYWRkZWQ7XG4gIGlmIChpc05lZykge1xuICAgIHBhZGRlZCA9IFwiLVwiICsgKFwiXCIgKyAtaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwYWRkZWQgPSAoXCJcIiArIGlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH1cbiAgcmV0dXJuIHBhZGRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZsb2F0aW5nKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGYgPSBwYXJzZUZsb2F0KFwiMC5cIiArIGZyYWN0aW9uKSAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8gPSBmYWxzZSkge1xuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkaWdpdHMsXG4gICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZXhwb3J0IGZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgbGV0IGQgPSBEYXRlLlVUQyhcbiAgICBvYmoueWVhcixcbiAgICBvYmoubW9udGggLSAxLFxuICAgIG9iai5kYXksXG4gICAgb2JqLmhvdXIsXG4gICAgb2JqLm1pbnV0ZSxcbiAgICBvYmouc2Vjb25kLFxuICAgIG9iai5taWxsaXNlY29uZFxuICApO1xuXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgLy8gc2V0IHRoZSBtb250aCBhbmQgZGF5IGFnYWluLCB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHllYXIgMjAwMCBpcyBhIGxlYXAgeWVhciwgYnV0IHllYXIgMTAwIGlzIG5vdFxuICAgIC8vIHNvIGlmIG9iai55ZWFyIGlzIGluIDk5LCBidXQgb2JqLmRheSBtYWtlcyBpdCByb2xsIG92ZXIgaW50byB5ZWFyIDEwMCxcbiAgICAvLyB0aGUgY2FsY3VsYXRpb25zIGRvbmUgYnkgRGF0ZS5VVEMgYXJlIHVzaW5nIHllYXIgMjAwMCAtIHdoaWNoIGlzIGluY29ycmVjdFxuICAgIGQuc2V0VVRDRnVsbFllYXIob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXkpO1xuICB9XG4gIHJldHVybiArZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xuICBjb25zdCBwMSA9XG4gICAgICAod2Vla1llYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlXG4gICAgICA3LFxuICAgIGxhc3QgPSB3ZWVrWWVhciAtIDEsXG4gICAgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXIpIHtcbiAgaWYgKHllYXIgPiA5OSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2UgcmV0dXJuIHllYXIgPiBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufVxuXG4vLyBQQVJTSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmV4cG9ydCBmdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpLFxuICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9OiR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfSR7bWludXRlcyA+IDAgPyBgOiR7bWludXRlc31gIDogXCJcIn1gO1xuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfSR7cGFkU3RhcnQobWludXRlcywgMil9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFZhbHVlIGZvcm1hdCAke2Zvcm1hdH0gaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcbiAgcmV0dXJuIHBpY2sob2JqLCBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0pO1xufVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4uL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJbnZhbGlkWm9uZSBmcm9tIFwiLi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcblxuaW1wb3J0IHsgaXNVbmRlZmluZWQsIGlzU3RyaW5nLCBpc051bWJlciB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuLi96b25lcy9zeXN0ZW1ab25lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICBsZXQgb2Zmc2V0O1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBkZWZhdWx0Wm9uZTtcbiAgICBlbHNlIGlmIChsb3dlcmVkID09PSBcImxvY2FsXCIgfHwgbG93ZXJlZCA9PT0gXCJzeXN0ZW1cIikgcmV0dXJuIFN5c3RlbVpvbmUuaW5zdGFuY2U7XG4gICAgZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIGVsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dC5vZmZzZXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmltcG9ydCB7IGhhc1JlbGF0aXZlIH0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyB7XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBoYXNEU1Qoem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lKSB7XG4gICAgY29uc3QgcHJvdG8gPSBEYXRlVGltZS5ub3coKS5zZXRab25lKHpvbmUpLnNldCh7IG1vbnRoOiAxMiB9KTtcblxuICAgIHJldHVybiAhem9uZS5pc1VuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFpvbmUoem9uZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIGlucHV0IGludG8gYSB7QGxpbmsgWm9uZX0gaW5zdGFuY2UuXG4gICAqXG4gICAqICogSWYgYGlucHV0YCBpcyBhbHJlYWR5IGEgWm9uZSBpbnN0YW5jZSwgaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhIHZhbGlkIHRpbWUgem9uZSBuYW1lLCBhIFpvbmUgaW5zdGFuY2VcbiAgICogICB3aXRoIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIHRoYXQgZG9lc24ndCByZWZlciB0byBhIGtub3duIHRpbWUgem9uZSwgYSBab25lXG4gICAqICAgaW5zdGFuY2Ugd2l0aCB7QGxpbmsgWm9uZSNpc1ZhbGlkfSA9PSBmYWxzZSBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXQgaXMgYSBudW1iZXIsIGEgWm9uZSBpbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgZml4ZWQgb2Zmc2V0XG4gICAqICAgaW4gbWludXRlcyBpcyByZXR1cm5lZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgdGhlIGRlZmF1bHQgem9uZSBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZXxudW1iZXJ9IFtpbnB1dF0gLSB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXG4gICAqIEByZXR1cm4ge1pvbmV9XG4gICAqL1xuICBzdGF0aWMgbm9ybWFsaXplWm9uZShpbnB1dCkge1xuICAgIHJldHVybiBub3JtYWxpemVab25lKGlucHV0LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgbW9udGggbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygpWzBdIC8vPT4gJ0phbnVhcnknXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcpWzBdIC8vPT4gJ0phbidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnKVswXSAvLz0+ICcxJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9IClbMF0gLy89PiAnamFudi4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2aEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdsb25nJywgeyBvdXRwdXRDYWxlbmRhcjogJ2lzbGFtaWMnIH0pWzBdIC8vPT4gJ1JhYmnKuyBJJ1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtb250aHMoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9IFwiZ3JlZ29yeVwiIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXG4gICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbW9udGhzRm9ybWF0KFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzKGxlbmd0aCA9IFwibG9uZ1wiLCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCB3ZWVrIG5hbWVzLlxuICAgKiBGb3JtYXQgd2Vla2RheXMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSB3ZWVrZGF5cyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gbW9yZSBkYXRlIGluZm9ybWF0aW9uLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyN3ZWVrZGF5c31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgd2Vla2RheXNGb3JtYXQoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtZXJpZGllbXMoeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGVyYXMsIHN1Y2ggYXMgWydCQycsICdBRCddLiBUaGUgbG9jYWxlIGNhbiBiZSBzcGVjaWZpZWQsIGJ1dCB0aGUgY2FsZW5kYXIgc3lzdGVtIGlzIGFsd2F5cyBHcmVnb3JpYW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdzaG9ydCddIC0gdGhlIGxlbmd0aCBvZiB0aGUgZXJhIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwic2hvcnRcIiBvciBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBlcmFzKGxlbmd0aCA9IFwic2hvcnRcIiwgeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgXCJncmVnb3J5XCIpLmVyYXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZyBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxuICAgKiBLZXlzOlxuICAgKiAqIGByZWxhdGl2ZWA6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmdcbiAgICogQGV4YW1wbGUgSW5mby5mZWF0dXJlcygpIC8vPT4geyByZWxhdGl2ZTogZmFsc2UgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZmVhdHVyZXMoKSB7XG4gICAgcmV0dXJuIHsgcmVsYXRpdmU6IGhhc1JlbGF0aXZlKCkgfTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lLCB7IGZyaWVuZGx5RGF0ZVRpbWUgfSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yLCBJbnZhbGlkSW50ZXJ2YWxFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gXCIuL2ltcGwvZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2ltcGwvZm9ybWF0cy5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIEludGVydmFsXCI7XG5cbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcbiAgICAgIFwiZW5kIGJlZm9yZSBzdGFydFwiLFxuICAgICAgYFRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSR7c3RhcnQudG9JU08oKX0gYW5kIGVuZD0ke2VuZC50b0lTTygpfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsLmZyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwuYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwuYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsLmZyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsLm1lcmdlfSwge0BsaW5rIEludGVydmFsLnhvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbCB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG5cbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG4gICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtzLCBlXSA9ICh0ZXh0IHx8IFwiXCIpLnNwbGl0KFwiL1wiLCAyKTtcbiAgICBpZiAocyAmJiBlKSB7XG4gICAgICBsZXQgc3RhcnQsIHN0YXJ0SXNWYWxpZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gc3RhcnQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxldCBlbmQsIGVuZElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSBEYXRlVGltZS5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBlbmRJc1ZhbGlkID0gZW5kLmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVuZElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCAmJiBlbmRJc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRJc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25JbnRlcnZhbCkgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIGdldCBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGxlbmd0aCh1bml0ID0gXCJtaWxsaXNlY29uZHNcIikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24oLi4uW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY291bnQodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuc3RhcnRPZih1bml0KSxcbiAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAoZW5kLnZhbHVlT2YoKSAhPT0gdGhpcy5lbmQudmFsdWVPZigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcbiAgICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxuICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxuICAgICAgICAuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgSW50ZXJ2YWwuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGVcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhc1xuICAgKiB7QGxpbmsgRGF0ZVRpbWUuREFURV9GVUxMfSBvciB7QGxpbmsgRGF0ZVRpbWUuVElNRV9TSU1QTEV9LiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2RcbiAgICogaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAqIEludGVydmFsIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuXG4gICAqIHNwZWNpZmllZC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2Zvcm1hdE9wdHM9RGF0ZVRpbWUuREFURV9TSE9SVF0gLSBFaXRoZXIgYSBEYXRlVGltZSBwcmVzZXQgb3JcbiAgICogSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHN0YXJ0IERhdGVUaW1lLlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gMTEvNy8yMDIyIOKAkyAxMS84LzIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+IE5vdmVtYmVyIDcg4oCTIDgsIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QwOTowMFovMjAyMi0xMS0wOFQwOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwsIHsgbG9jYWxlOiAnZnItRlInIH0pOyAvLz0+IDfigJM4IG5vdmVtYnJlIDIwMjJcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbUlTTygnMjAyMi0xMS0wN1QxNzowMFovMjAyMi0xMS0wN1QxOTowMFonKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gNjowMCDigJMgODowMCBQTVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDE3OjAwWi8yMDIyLTExLTA3VDE5OjAwWicpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+IE1vbiwgTm92IDA3LCA2OjAwIOKAkyA4OjAwIHBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IEZvcm1hdHMuREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMucy5sb2MuY2xvbmUob3B0cyksIGZvcm1hdE9wdHMpLmZvcm1hdEludGVydmFsKHRoaXMpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPKG9wdHMpfS8ke3RoaXMuZS50b0lTTyhvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBkYXRlIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSB0aW1lIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT1RpbWUob3B0cyl9LyR7dGhpcy5lLnRvSVNPVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0XG4gICAqIHN0cmluZy4gKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBJbnRlcnZhbCN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZVxuICAgKiBmb3JtYXR0aW5nIHRvb2wuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gVGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLnNlcGFyYXRvciA9ICAnIOKAkyAnXSAtIEEgc2VwYXJhdG9yIHRvIHBsYWNlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmRcbiAgICogcmVwcmVzZW50YXRpb25zLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChkYXRlRm9ybWF0LCB7IHNlcGFyYXRvciA9IFwiIOKAkyBcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KX0ke3NlcGFyYXRvcn0ke3RoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIER1cmF0aW9uIHJlcHJlc2VudGluZyB0aGUgdGltZSBzcGFubmVkIGJ5IHRoaXMgaW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDg4NDg5MjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignZGF5cycpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDEuMDI0MTgxMjE1Mjc3Nzc3OCB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQuODIwOTUgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQsIHNlY29uZHM6IDQ5LjI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ3NlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBzZWNvbmRzOiA4ODQ4OS4yNTcgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHRvRHVyYXRpb24odW5pdCwgb3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lLmRpZmYodGhpcy5zLCB1bml0LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gbWFwRm4gb24gdGhlIGludGVydmFsIHN0YXJ0IGFuZCBlbmQsIHJldHVybmluZyBhIG5ldyBJbnRlcnZhbCBmcm9tIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQudG9VVEMoKSlcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnBsdXMoeyBob3VyczogMiB9KSlcbiAgICovXG4gIG1hcEVuZHBvaW50cyhtYXBGbikge1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi96b25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBWRVJTSU9OID0gXCIzLjMuMFwiO1xuXG5leHBvcnQge1xuICBWRVJTSU9OLFxuICBEYXRlVGltZSxcbiAgRHVyYXRpb24sXG4gIEludGVydmFsLFxuICBJbmZvLFxuICBab25lLFxuICBGaXhlZE9mZnNldFpvbmUsXG4gIElBTkFab25lLFxuICBJbnZhbGlkWm9uZSxcbiAgU3lzdGVtWm9uZSxcbiAgU2V0dGluZ3MsXG59O1xuIiwiaW1wb3J0IFN5c3RlbVpvbmUgZnJvbSBcIi4vem9uZXMvc3lzdGVtWm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5cbmltcG9ydCB7IG5vcm1hbGl6ZVpvbmUgfSBmcm9tIFwiLi9pbXBsL3pvbmVVdGlsLmpzXCI7XG5cbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpLFxuICBkZWZhdWx0Wm9uZSA9IFwic3lzdGVtXCIsXG4gIGRlZmF1bHRMb2NhbGUgPSBudWxsLFxuICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbCxcbiAgdHdvRGlnaXRDdXRvZmZZZWFyID0gNjAsXG4gIHRocm93T25JbnZhbGlkO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgbm93KCkge1xuICAgIHJldHVybiBub3c7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgKi9cbiAgc3RhdGljIHNldCBub3cobikge1xuICAgIG5vdyA9IG47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXRvZmYgeWVhciBhZnRlciB3aGljaCBhIHN0cmluZyBlbmNvZGluZyBhIHllYXIgYXMgdHdvIGRpZ2l0cyBpcyBpbnRlcnByZXRlZCB0byBvY2N1ciBpbiB0aGUgY3VycmVudCBjZW50dXJ5LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGdldCB0d29EaWdpdEN1dG9mZlllYXIoKSB7XG4gICAgcmV0dXJuIHR3b0RpZ2l0Q3V0b2ZmWWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1dG9mZiB5ZWFyIGFmdGVyIHdoaWNoIGEgc3RyaW5nIGVuY29kaW5nIGEgeWVhciBhcyB0d28gZGlnaXRzIGlzIGludGVycHJldGVkIHRvIG9jY3VyIGluIHRoZSBjdXJyZW50IGNlbnR1cnkuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDAgLy8gY3V0LW9mZiB5ZWFyIGlzIDAsIHNvIGFsbCAneXknIGFyZSBpbnRlcnByZXR0ZWQgYXMgY3VycmVudCBjZW50dXJ5XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDUwIC8vICc0OScgLT4gMTk0OTsgJzUwJyAtPiAyMDUwXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDE5NTAgLy8gaW50ZXJwcmV0dGVkIGFzIDUwXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDIwNTAgLy8gQUxTTyBpbnRlcnByZXR0ZWQgYXMgNTBcbiAgICovXG4gIHN0YXRpYyBzZXQgdHdvRGlnaXRDdXRvZmZZZWFyKGN1dG9mZlllYXIpIHtcbiAgICB0d29EaWdpdEN1dG9mZlllYXIgPSBjdXRvZmZZZWFyICUgMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdGhyb3dPbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBzZXQgdGhyb3dPbkludmFsaWQodCkge1xuICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgWm9uZUlzQWJzdHJhY3RFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIGdldCBpYW5hTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgb2Zmc2V0TmFtZSh0cywgb3B0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHBhcnNlWm9uZUluZm8sIGlzVW5kZWZpbmVkLCBvYmpUb0xvY2FsVFMgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5sZXQgZHRmQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogem9uZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICBlcmE6IFwic2hvcnRcIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZHRmQ2FjaGVbem9uZV07XG59XG5cbmNvbnN0IHR5cGVUb1BvcyA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDEsXG4gIGRheTogMixcbiAgZXJhOiAzLFxuICBob3VyOiA0LFxuICBtaW51dGU6IDUsXG4gIHNlY29uZDogNixcbn07XG5cbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgXCJcIiksXG4gICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSAoQUR8QkMpLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKSxcbiAgICBbLCBmTW9udGgsIGZEYXksIGZZZWFyLCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF0gPSBwYXJzZWQ7XG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gIGNvbnN0IGZpbGxlZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGZvcm1hdHRlZFtpXTtcbiAgICBjb25zdCBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XG5cbiAgICBpZiAodHlwZSA9PT0gXCJlcmFcIikge1xuICAgICAgZmlsbGVkW3Bvc10gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWxsZWQ7XG59XG5cbmxldCBpYW5hWm9uZUNhY2hlID0ge307XG4vKipcbiAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUFOQVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gWm9uZSBuYW1lXG4gICAqIEByZXR1cm4ge0lBTkFab25lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShuYW1lKSB7XG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xuICAgIGlhbmFab25lQ2FjaGUgPSB7fTtcbiAgICBkdGZDYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSBmb3Igc29tZSB2YWxpZCBJQU5BIG5hbWVzLiBVc2UgaXNWYWxpZFpvbmUgaW5zdGVhZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkWm9uZShzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy56b25lTmFtZSA9IG5hbWU7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImlhbmFcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUodHMsIHsgZm9ybWF0LCBsb2NhbGUgfSkge1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xuXG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xuXG4gICAgY29uc3QgZHRmID0gbWFrZURURih0aGlzLm5hbWUpO1xuICAgIGxldCBbeWVhciwgbW9udGgsIGRheSwgYWRPckJjLCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBkdGYuZm9ybWF0VG9QYXJ0c1xuICAgICAgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpXG4gICAgICA6IGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSk7XG5cbiAgICBpZiAoYWRPckJjID09PSBcIkJDXCIpIHtcbiAgICAgIHllYXIgPSAtTWF0aC5hYnMoeWVhcikgKyAxO1xuICAgIH1cblxuICAgIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XG4gICAgY29uc3QgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcblxuICAgIGNvbnN0IGFzVVRDID0gb2JqVG9Mb2NhbFRTKHtcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheSxcbiAgICAgIGhvdXI6IGFkanVzdGVkSG91cixcbiAgICAgIG1pbnV0ZSxcbiAgICAgIHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiAwLFxuICAgIH0pO1xuXG4gICAgbGV0IGFzVFMgPSArZGF0ZTtcbiAgICBjb25zdCBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdE9mZnNldCwgc2lnbmVkT2Zmc2V0IH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogQSB6b25lIHdpdGggYSBmaXhlZCBvZmZzZXQgKG1lYW5pbmcgbm8gRFNUKVxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkT2Zmc2V0Wm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHV0Y0luc3RhbmNlKCkge1xuICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcbiAgICAgIHNpbmdsZXRvbiA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIHdpdGggYSBzcGVjaWZpZWQgb2Zmc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKG9mZnNldCkge1xuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIG9mIEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIGEgVVRDIG9mZnNldCBzdHJpbmcsIGxpa2UgXCJVVEMrNlwiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2VcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzA2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQy02OjAwXCIpXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZVNwZWNpZmllcihzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIGNvbnN0IHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHJldHVybiBuZXcgRml4ZWRPZmZzZXRab25lKHNpZ25lZE9mZnNldChyWzFdLCByWzJdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2Zmc2V0KSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy5maXhlZCA9IG9mZnNldDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImZpeGVkXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/IFwiVVRDXCIgOiBgVVRDJHtmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgXCJuYXJyb3dcIil9YDtcbiAgfVxuXG4gIGdldCBpYW5hTmFtZSgpIHtcbiAgICBpZiAodGhpcy5maXhlZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiRXRjL1VUQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYEV0Yy9HTVQke2Zvcm1hdE9mZnNldCgtdGhpcy5maXhlZCwgXCJuYXJyb3dcIil9YDtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiZml4ZWRcIiAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbG9jYWwgem9uZVxuICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwic3lzdGVtXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==