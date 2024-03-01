// Dataset: Titanic dataset
// Schema: tested (PassengerId, Survived, Pclass, Name, Sex, Age, Parch, Ticket, Fare, Cabin, Embarked)
// Link: here

// List of tasks:

// Display female passengers who survived and are older than 30.

SELECT PassengerId, Name FROM tested WHERE sex = 'female' AND survived = 1 AND age > 30;

// Find the average age of men who didn't survive.

SELECT AVG(age) AS AverageAge FROM tested where sex = 'male' AND survived = 0;

// Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."

SELECT * from tested WHERE fare BETWEEN 20 AND 50 AND embarked = 'C';

// Find the total number of the survivors in the first class.

SELECT COUNT(*) as Survivors_FirstClass FROM tested WHERE survived = 1 AND pclass = 1;

// . Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT * from tested WHERE embarked = 'C' and fare > 75;
