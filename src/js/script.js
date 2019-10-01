let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(title, author, numPages, read)
  myLibrary.push(newBook);
}
