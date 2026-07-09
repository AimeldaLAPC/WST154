let books = [];
let filteredBooks = [];
let currentIndex = 0;

const genreSelect = document.getElementById('genreSelect');
const bookList = document.getElementById('bookList');
const bookImage = document.getElementById('bookImage');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookDescription = document.getElementById('bookDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

fetch('books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        filteredBooks = books;
        displayBookList(filteredBooks);
        displayCarouselBook();
    })
    .catch(error => {
        console.error('Error loading books:', error);
        bookList.innerHTML = '<p>Sorry, the books could not be loaded.</p>';
    });

function displayBookList(bookArray) {
    bookList.innerHTML = '';

    bookArray.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p>${book.description}</p>
        `;

        bookList.appendChild(bookItem);
    });
}

function displayCarouselBook() {
    if (filteredBooks.length === 0) {
        bookTitle.textContent = 'No books found';
        bookAuthor.textContent = '';
        bookDescription.textContent = 'Try choosing another genre.';
        bookImage.src = '';
        bookImage.alt = 'No book available';
        return;
    }

    const book = filteredBooks[currentIndex];

    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = 'by ' + book.author;
    bookDescription.textContent = book.description;
}

genreSelect.addEventListener('change', () => {
    const selectedGenre = genreSelect.value;

    if (selectedGenre === 'all') {
        filteredBooks = books;
    } else {
        filteredBooks = books.filter(book => book.genre.toLowerCase() === selectedGenre);
    }

    currentIndex = 0;
    displayBookList(filteredBooks);
    displayCarouselBook();
});

prevBtn.addEventListener('click', () => {
    if (filteredBooks.length === 0) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = filteredBooks.length - 1;
    }

    displayCarouselBook();
});

nextBtn.addEventListener('click', () => {
    if (filteredBooks.length === 0) return;

    currentIndex++;

    if (currentIndex >= filteredBooks.length) {
        currentIndex = 0;
    }

    displayCarouselBook();
});