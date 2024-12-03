const submit = document.querySelector("#submit");
const display = document.querySelector(".display");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, book is read : ${this.read}`;
  };
}

submit.addEventListener("click", addBookToLibrary);

display.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const paraBoxRemove = e.target.parentElement;
    display.removeChild(paraBoxRemove);
  }
});

display.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const editParaBox = e.target.parentElement;
    const paraRead = editParaBox.querySelector("p:nth-child(4)");
    const editBtn = editParaBox.querySelector(".edit-btn");

    if (paraRead.textContent === "Read it: yes") {
      paraRead.textContent = "Read it: no";
      editBtn.textContent = "Read it: yes";
    } else {
      paraRead.textContent = "Read it: yes";
      editBtn.textContent = "Read it: no";
    }
  }
});

function addBookToLibrary(e) {
  e.preventDefault();

  const bookTitleInput = document.querySelector("#book-title");
  const bookAuthorInput = document.querySelector("#book-author");
  const bookPagesInput = document.querySelector("#book-pages");
  const bookReadInput = document.querySelector("#book-read");

  bookTitle = bookTitleInput.value.trim().toLowerCase();
  bookAuthor = bookAuthorInput.value.trim().toLowerCase();
  bookPages = bookPagesInput.value.trim().toLowerCase();
  bookRead = bookReadInput.value.trim().toLowerCase();

  if (
    bookTitle === "" ||
    bookAuthor === "" ||
    bookPages === "" ||
    bookRead === ""
  )
    return false;

  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);

  const paraBox = document.createElement("div");
  paraBox.setAttribute("class", "para-box");

  const paraTitle = document.createElement("p");
  const paraAuthor = document.createElement("p");
  const paraPages = document.createElement("p");
  const paraRead = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  paraTitle.textContent = `Title: ${newBook.title}`;
  paraAuthor.textContent = `Author: ${newBook.author}`;
  paraPages.textContent = `Total pages: ${newBook.pages}`;
  paraRead.textContent = `Read it: ${newBook.read}`;
  deleteBtn.textContent = "Delete";

  if (paraRead.textContent === "yes") {
    editBtn.textContent = "no, I did not";
  } else {
    editBtn.textContent = "yes, I read";
  }

  paraTitle.setAttribute("class", "para");
  paraAuthor.setAttribute("class", "para");
  paraPages.setAttribute("class", "para");
  paraRead.setAttribute("class", "para");
  deleteBtn.setAttribute("class", "delete-btn");
  editBtn.setAttribute("class", "edit-btn");

  paraBox.appendChild(paraTitle);
  paraBox.appendChild(paraAuthor);
  paraBox.appendChild(paraPages);
  paraBox.appendChild(paraRead);
  paraBox.appendChild(deleteBtn);
  paraBox.appendChild(editBtn);

  display.appendChild(paraBox);

  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookReadInput.value = "";
}
