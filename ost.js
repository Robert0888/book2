class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }  
}








class Ui{
    addBook(book) {
        const container = document.querySelector('.output')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>`
        container.append(row)
        console.log(container);
    }
}

document.getElementById('form').addEventListener('submit', function(e) {
   const title = document.querySelector('#title').value
   const author = document.querySelector('#author').value
   const isbn = document.querySelector('#isbn').value

   const book = new Book(title, author, isbn)

   const ui = new Ui()
   ui.addBook(book) 
   
    e.preventDefault()
})