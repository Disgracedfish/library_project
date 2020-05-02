const addButton = document.getElementById('add-button');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}


function render(library) {
    let shelf = document.getElementById('bookshelf-table');
    shelf.innerHTML = '';

  for (let i = 0; i<library.length; i++) {
    book = library[i];
    let row = document.createElement('tr');
    row.dat
    for (key in book) {
        let cell = document.createElement('td');
        cell.textContent = book[key];
        row.appendChild(cell);
    }
    let delButton = document.createElement('td');
    delButton.appendChild(createDeleteButton(i));
    row.appendChild(delButton);
    shelf.appendChild(row);
  }
}

function createDeleteButton(index) {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "<img src='trashcan.png' height='16px'>";
    deleteBtn.addEventListener('click', deleteBook);
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('data-id', index);
    return deleteBtn;
}

function addBook() {
    if (!titleInput.value || isNaN(pagesInput.value)) {return;}
    
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
    
    myLibrary.push(newBook);
    render(myLibrary);
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}

function deleteBook(e) {
    let index = e.target.parentElement.dataset.id;
    myLibrary.splice(index,1);
   render(myLibrary);
}


addButton.addEventListener('click', addBook);


// adds blue outlines for focus if someone is navigating using tab
function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}
window.addEventListener('keydown', handleFirstTab);