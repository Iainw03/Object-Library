const myLibrary = [];

function Book(title,author) {
  this.title = title;
  this.author = author;

}

function addBookToLibrary(title,author) {
  let bookDetails = new Book(title,author);
  myLibrary.push(bookDetails);
  displayBooks();
}

function displayBooks(){
    let i = myLibrary.length;
        let title = myLibrary[i];
     const Book = document.querySelector(".book")
         const BookBox = document.createElement("div");
    BookBox.classList.add("bookCover");
    Book.appendChild(BookBox);

    const BookTitle = document.createElement("div");
    BookBox.appendChild(BookTitle);

}

const dialog = document.querySelector("dialog");
const bookButton = document.querySelector(".openbutton");
const closeButton = document.querySelector(".closebutton");

bookButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const createBook = document.querySelector("#addBookForm")
createBook.addEventListener("submit", ()=>{ 

  event.preventDefault();
const author = createBook.author.value
const title = createBook.title.value;
console.log(author);

addBookToLibrary(title, author);

   createBook.reset();
    dialog.close();
});

