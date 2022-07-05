let i = 0;
// book_ids = [];
// delete_container_ids = [];
// delete_button_ids = [];

const add_button = document.getElementById("add-button");

const overlay = document.getElementById("overlay");

const modal = document.getElementById("modal");

const modal_close = document.getElementById("modal-close");

let submit_button = document.querySelector(".submit-button");

const books_container = document.querySelector(".books-container");

function deleteBook(delete_icon_button_id) {
    let parentElement = document.getElementById(delete_icon_button_id).parentElement;
    let grandparentElement = document.getElementById(parentElement.id).parentElement;
    grandparentElement.remove();
}

function addBookToLibrary(title,author,number_of_pages) {
    i = i + 1;
    let book = document.createElement("div");
    // adding the book to the books_container
    books_container.appendChild(book);
    // book style
    book.classList.add("book");
    // create an id for each book
    book.id = "book"+i;
    /////////////////// book_ids.push("book"+i);
    // creating and adding the book childs
    let delete_icon_container = document.createElement("div");
    book.appendChild(delete_icon_container);
    delete_icon_container.classList.add("delete-icon-container");
    //giving an id to the delete_icon_container
    delete_icon_container.id = "delcontainer"+i;
    ////////////////// delete_container_ids.push("delcontainer"+i);
    // creating and adding delete_icon_container child
    let delete_icon_button = document.createElement("button");
    delete_icon_container.appendChild(delete_icon_button);
    delete_icon_button.classList.add("delete-icon");
    // create an id for each delete button
    delete_icon_button.id = "delete"+i;
    //////////////// delete_button_ids.push("delete"+i);
    // give the option to delete the book
    var id = delete_icon_button.id;
    delete_icon_button.setAttribute("onclick","deleteBook(id);");
    // creating and adding delete-icon-button child
    let delete_icon_img = document.createElement("img");
    delete_icon_button.appendChild(delete_icon_img);
    delete_icon_img.src = "./images/delete.png";
    // creating and adding second book child
    let book_content_container = document.createElement("div");
    book.appendChild(book_content_container);
    book_content_container.classList.add("book-content-container");
    // creating and adding book_content_container childs
    let title_h2 = document.createElement("h2");
    let author_h2 = document.createElement("h2");
    let number_of_Pages_h2 = document.createElement("h2");

    book_content_container.appendChild(title_h2);
    book_content_container.appendChild(author_h2);
    book_content_container.appendChild(number_of_Pages_h2);

    title_h2.classList.add("book-content-letters");
    author_h2.classList.add("book-content-letters");
    number_of_Pages_h2.classList.add("book-content-letters"); 
    
    title_h2.textContent = "Title: " + title;
    author_h2.textContent = "Author: " + author;
    number_of_Pages_h2.textContent = "Number of Pages: " + number_of_pages;

    // another book_content_container child
    let toggle_container = document.createElement("div");
    book_content_container.appendChild(toggle_container);
    toggle_container.classList.add("toggle-container");

    // creating and adding toggle_container childs
    let read = document.createElement("h2");
    toggle_container.appendChild(read);
    read.textContent = "read";
    read.classList.add("book-content-letters");

    let label = document.createElement("label");
    toggle_container.appendChild(label);
    label.classList.add("switch");

    //creating and adding label childs
    let label_input = document.createElement("input");
    label.appendChild(label_input);
    label_input.type = "checkbox";
    let label_span = document.createElement("span");
    label.appendChild(label_span);
    label_span.classList.add("slider");
    label_span.classList.add("round");
}

add_button.addEventListener("click", addBook);
    function addBook() {
        overlay.classList.add("show");
        modal.classList.add("show");
}

modal_close.addEventListener("click", closeModal);
    function closeModal() {
        overlay.classList.remove("show");
        modal.classList.remove("show");
}

submit_button.addEventListener('click', event => { 
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let number_of_pages = document.getElementById("number-of-pages").value;
    if (title != "" && author != "" && number_of_pages > 0) {
        addBookToLibrary(title,author,number_of_pages);
        overlay.classList.remove("show");
        modal.classList.remove("show");
        // reseting the values
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("number-of-pages").value = "";
    }
    else {
        alert("Please complete the form");
    }
})

$("#form").submit(function(){
    alert("I am going to submit now");
})

















// let i = 0;
// let myLibrary = [];

// function Book(title,author,pages_number,read) {
//     // the constructor
//     this.title = title;
//     this.author = author;
//     this.pages_number = pages_number;
//     this.read = read;
// }

// const player = new Player('steve', 'X')




// // const radioButtons = document.querySelectorAll('input[name="book-read"]');
// // let book_read;
// submit_button.onclick = function() {
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let number_of_pages = document.getElementById("number-of-pages").value;
//     // for (const radioButton of radioButtons) {
//     //     if (radioButton.checked) {
//     //         book_read = radioButton.value;
//     //         break;
//     //     }
//     // }
//     addBookToLibrary(title,author,number_of_pages);
//     overlay.classList.remove("show");
//     modal.classList.remove("show");
// }


// function displayAllBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(myLibrary[i]);
//     }
// }

// displayAllBooks();



// for (const radioButton of radioButtons) {
//     if (radioButton.checked) {
//         book_read = radioButton.value;
//         break;
//     }
// }




