const myLibrary = ["hello","hello2","hello3","hello4","hello6,hello9","no"];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let bookDetails = new Book(title,author,pages,read);
  myLibrary.push(bookDetails);
}

function displayBooks(){
    for(let i=0; i<myLibrary.length;i++){
        let title = myLibrary[i];
     const Book = document.querySelector(".book")
         const BookBox = document.createElement("div");
    BookBox.classList.add("bookCover");
    Book.appendChild(BookBox);

    const BookTitle = document.createElement("div");
    BookBox.appendChild(BookTitle);
}
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


displayBooks();