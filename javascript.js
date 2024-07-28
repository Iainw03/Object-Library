const myLibrary = [];

function Book(title,author) {
  this.title = title;
  this.author = author;
  this.bookId = `book${++Book.id}`;

}

Book.bookID = 0;

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
         BookBox.classList.add(`${myLibrary.bookId}`);
    BookBox.classList.add("bookCover");
    Book.appendChild(BookBox);

    const BookTitle = document.createElement("div");
    BookBox.appendChild(BookTitle);

    const remBtn = document.createElement('button');
    BookBox.appendChild(remBtn);
    remBtn.textContent = 'Remove';
    remBtn.onclick = remBook;

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


console.log(author);

addBookToLibrary(title, author);

   createBook.reset();
    dialog.close();
});

