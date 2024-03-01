// You decide to remove a book with BookID = 101 from the Books table. Ensure this change is saved permanently.

// BEGIN TRANSACTION;
// DELETE FROM Book WHERE id = 101;
// COMMIT;


// You're testing the database by removing a book with BookID = 103 but want to revert the change immediately after.

BEGIN TRANSACTION;
DELETE FROM Book WHERE id = 103;
ROLLBACK;
