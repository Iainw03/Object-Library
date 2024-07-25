const myLibrary = ["hello","hello2","hello3","hello4","hello6"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
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

displayBooks();