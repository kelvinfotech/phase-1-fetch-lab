function fetchBooks() {
  // Sending fetch request to the API and returning the promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Checking if response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parsing JSON data from response and returning it
      return response.json();
    })
    .then(data => {
      // Rendering book titles
      renderBooks(data);
    })
    .catch(error => {
      // Handling errors
      console.error('There was a problem fetching the books:', error);
      throw error; // Re-throwing the error to be caught in the calling context
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .catch(error => {
      console.error('Error fetching books:', error);
    });
});
