// Sample book data
const books = [
    { name: "To Kill a Mockingbird", author: "Harper Lee" },
    { name: "1984", author: "George Orwell" },
    { name: "Moby Dick", author: "Herman Melville" },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ];
  
  // Function to display all books
  function displayBooks(bookArray) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear existing content
    bookArray.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `"${book.name}" by ${book.author}`;
      bookList.appendChild(li);
    });
  }
  
  // Function to search for books
  function searchBook() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book =>
      book.name.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
  }
  
  // Initialize book list on page load
  document.addEventListener("DOMContentLoaded", () => {
    displayBooks(books);
  });
  