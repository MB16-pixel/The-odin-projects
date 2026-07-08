const addBook = document.querySelector("#addbook");
const newBook = document.querySelector("#newbook")
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pgs");
const popUp = document.querySelector(".pop-up")
const form = document.querySelector(".elements"); 
const close = document.querySelector("#close");

const myLibrary = [];

function Book(name, author, pages) {
  
    this.id = crypto.randomUUID(),
    this.name = name,
    this.author = author,
    this.pages = pages

}

function addBookToLibrary() {
  const book1 = new Book(title.value,author.value,pages.value);
  myLibrary.push(book1);
  title.value = "";
  author.value = "";
  pages.value = "";

}

function displayLibrary(myLibrary){
  console.clear();
  for (let i=0;i<myLibrary.length;i++){
    console.log(myLibrary[i]);
  }
}

form.addEventListener("submit",function(){
  event.preventDefault();
  addBookToLibrary();
  read(myLibrary);
})

newBook.addEventListener("click", () => {
  popUp.style.display = "block"; 
});

close.addEventListener("click",function(){
  popUp.style.display = "none";
})