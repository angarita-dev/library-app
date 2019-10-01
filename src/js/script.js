let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let numPages = document.querySelector("#numPages").value;
  let read = document.querySelector("#read").value;

  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  displayAllBooks(newBook);
  alert(newBook.title + " was added successfully !!!");
}

function displayBook(book) {
  let parentNode = document.getElementById("input");
  let row = document.createElement("TR");
  row.appendChild(document.createElement("TD").innerHTML = `${book.title}`);
  template.innerHTML =`<tr class='book'>
  <td>${book.title} </td>
  <td>${book.author} </td>
  <td>${book.numPages} </td>
  <td>${book.read}</td>`;
  render(parentNode,template);
}

function displayAllBooks() {
  myLibrary.forEach( book => {
    displayBook(book)
  })
}

let render = (node,template) => {
  node.appendChild(template);
};
