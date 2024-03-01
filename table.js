// INSERT INTO Book(
//    title,
//    author,
//    genre,
//    published_year,
//    isbn,
//    price,
//    rating,
//    stock_count,
//    publisher,
//    number_pages
//  )
//  VALUES
//  ("A Journey to the Center", "Jules Verne", "Adventure", 1864, "1234567890123", 12.99, 4.5, 10, "Verne Publishing", 350),
//  ("War and Peace", "Leo Tolstoy", "Historical", 1869, "1234567890124", 14.99, 4.8, 5, "Tolstoy Prints", 1200),
//  ("Whispers of the Wind", "Amelia Blackburn", "Romance", 1982, "1234567890125", 9.99, 4.2, 20, "Blackburn House", 275),
//  ("The Galactic Odyssey", "Orion Starfield", "Science Fiction", 2005, "1234567890126", 19.99, 4.9, 15, "Nebula Press", 450);



// There's been a price reduction for "War and Peace" and one copy has been sold. Update the price and stock count for this book.

UPDATE Book SET price = 9.99, stock_count = 4 WHERE title = "War and Peace"
