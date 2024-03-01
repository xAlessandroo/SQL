// You decide to remove a book with BookID = 101 from the Books table. Ensure this change is saved permanently.

BEGIN TRANSACTION;
DELETE FROM Book WHERE id = 101;
COMMIT;
