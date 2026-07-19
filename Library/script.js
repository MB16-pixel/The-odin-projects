const addBook = document.querySelector("#addbook");
const newBook = document.querySelector("#newbook")
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pgs");
const popUp = document.querySelector(".pop-up")
const form = document.querySelector(".elements"); 
const close = document.querySelector("#close");
const collectionDiv = document.querySelector(".content");
// const delBtn = document.querySelector(".del-btn");

// Tip: Make sure your HTML checkbox has id="read" or name="read"
// If it uses id="read", we can just query it here to be absolutely safe:
const readCheckbox = document.querySelector("#read") || form.read; 

let read = "";

function displayBookFromLibrary(){
  // 1. FIX: Clear out the display container first to prevent book duplication
  collectionDiv.innerHTML = "";

  for(let book of myLibrary){
    const bookList = document.createElement('div');
    bookList.classList.add('books');
      
    if(book.read === true){
      read += "Read";
    } else if(book.read === false){
      read += "Not Read";
    } else {
      console.log(book.read);
    }

    bookList.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="pages">${book.pages}</p>
      <button class="read-btn">${read}</button>
      <button class="del-btn" data-id=${book.id}>delete</button>
    `;
    collectionDiv.appendChild(bookList);
    read = "";

    bookList.querySelector('.del-btn').addEventListener("click",function(){
      bookList.remove();
      myLibrary = myLibrary.filter(item => item.id !== book.id);
    })

    bookList.querySelector('.read-btn').addEventListener("click",function(){
      book.read = !book.read;
       if (book.read) {
        this.textContent = "Not Read";
      } else {
        this.textContent = "Read";
  }
    })
  }
}

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title; 
        this.author = author; 
        this.pages = pages + ' pg'; // Added a clean space before 'pg'
        this.read = read; 
    }
}

function addBookToLibrary() {
  // 2. FIX: Use your globally defined element variables (title, author, pages) 
  // to grab values safely without relying on matching form name attributes.
  const book1 = new Book(title.value, author.value, pages.value, readCheckbox.checked);
  myLibrary.push(book1);
  
  // Clear the input elements
  title.value = "";
  author.value = "";
  pages.value = "";
  if (readCheckbox) readCheckbox.checked = false; // Reset checkbox state
}

function displayLibrary(myLibrary){
  console.clear();
  for (let i=0;i<myLibrary.length;i++){
    console.log(myLibrary[i]);
  }
}

// 3. FIX: Add the 'event' parameter explicitly inside the function declaration
form.addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
  displayBookFromLibrary();
  popUp.style.display = "none"; // Clean UX: Close the popup after submission
})

newBook.addEventListener("click", () => {
  popUp.style.display = "block"; 
});

close.addEventListener("click", function(){
  popUp.style.display = "none";
})