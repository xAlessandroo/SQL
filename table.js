// Imagine you're designing a database to manage a bookstore. Create a table named "Books" with attributes for book_id, title, author, genre, published_year, isbn, price, rating, and stock_count.

CREATE TABLE Book (
	book_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    published_year INTEGER,
    isbn TEXT,
    price REAL NOT NULL,
    rating REAL,
    stock_count INTEGER
)
