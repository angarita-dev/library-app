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
  render();
  document.getElementsByClassName("input")[0].style.display = "none";
}

function render(){
  var bookList = ""; 
  myLibrary.forEach((book) => { bookList += `<div class='bookInfo'>
                                                 <div class='book'>
                                                     <h2>Title: ${book.title} </h2>
                                                     <h5>Author: ${book.author} </h5>
                                                     <h5>Year Published: ${book.numPages} </h5>
                                                 </div>
                                                </div>`;}); 
  document.getElementById("library").innerHTML = bookList;
}

function newBook(){
document.getElementsByClassName("input")[0].style.display = "block";
}
