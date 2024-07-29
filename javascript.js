const myLibrary = [];

function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookId = `book${++Book.id}`;

}

Book.bookID = 0;

function addBookToLibrary(title,author,pages) {
  let bookDetails = new Book(title,author,pages);
  myLibrary.push(bookDetails);
  displayBooks(title,author,pages);
}



function displayBooks(title,author,pages){
    let i = myLibrary.length; 

        
        const Book = document.querySelector(".book");

        const full = document.createElement("div");
        full.classList.add("bookBase");
        Book.appendChild(full);

        const remBtn = document.createElement('button');
        remBtn.classList.add("deleteButton");
    full.appendChild(remBtn);
    remBtn.textContent = 'Remove';
    remBtn.onclick = remBook;

         const BookBox = document.createElement("div");
         BookBox.classList.add(`${myLibrary.bookId}`);
    BookBox.classList.add("bookCover");
    full.appendChild(BookBox);

    const BookTitle = document.createElement("div");
    const titleDiv = document.createElement("div");
    titleDiv.textContent = "Title: " + title;
    titleDiv.classList.add("textDiv");

    const authorDiv = document.createElement("div");
    authorDiv.textContent = "Author: " + author;
    authorDiv.classList.add("textDiv");

    const pagesDiv = document.createElement("div");
    pagesDiv.textContent = "Pages: " + pages;
    pagesDiv.classList.add("textDiv");

    BookBox.appendChild(BookTitle);
    BookTitle.appendChild(titleDiv);
    BookTitle.appendChild(authorDiv);
    BookTitle.appendChild(pagesDiv);





}

function remBook() {
  const bookId = this.parentElement.classList[1];

  const findBook = myLibrary.findIndex(
    (element) => element.bookId === bookId
  );
  const delBook = myLibrary.splice(findBook, 1);
  this.parentElement.remove();
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
const pages = createBook.pages.value;

console.log(title);
console.log(author);

addBookToLibrary(title, author, pages);

   createBook.reset();
    dialog.close();
});

