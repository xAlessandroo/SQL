// Imagine you're designing a database to manage a bookstore. Create a table named "Books" with attributes for book_id, title, author, genre, published_year, isbn, price, rating, and stock_count.

// CREATE TABLE Book (
// 	book_id INTEGER PRIMARY KEY,
//     title TEXT NOT NULL,
//     author TEXT NOT NULL,
//     genre TEXT,
//     published_year INTEGER,
//     isbn TEXT,
//     price REAL NOT NULL,
//     rating REAL,
//     stock_count INTEGER
// )

// You want to add more details about each book. Modify the "Books" table to include columns for the publisher and the number of pages.

ALTER TABLE Book ADD COLUMN publisher TEXT

ALTER TABLE Book ADD COLUMN number_pages INTEGER
