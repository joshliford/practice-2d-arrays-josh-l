/*
Task 1: Student Scores
You need to organize scores for three students, each of whom has taken three
tests. Create a 2D array named allScores where each inner array contains three
test scores for a single student.
1. Write the code to create the allScores array with three inner arrays.
2. Each inner array should contain three numeric scores of your choice.

Task 2: Build a Seating Grid
You want to model three rows of seats in a theater with four seats per row. Create
a 2D array called theaterSeating that has an outer array of three inner arrays,
each inner array representing a row of four seat labels. (For instance, seat labels
could be "A1", "A2", etc.)
1. Use nested array literals to define the structure.
2. Ensure each inner array has exactly four seat labels

Task 3: Form a Multi-Dimensional Contact List
Create a 2D array named contactsList where each inner array represents one
contact’s info. For now, store three pieces of information in each inner array, such
as ["Name", "Email", "Phone"]. Create two of these inner arrays in
contactsList.
1. Define the outer array contactsList.
2. Insert two inner arrays, each with three strings representing a contact’s
details.
*/

// Task 1:
let allScores = [
    [87, 89, 85],
    [96, 88, 89],
    [91, 94, 89]
];
console.log("Student scores:", allScores);

// Task 2:
let theaterSeating = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]
];
console.log("Theater Seating:", theaterSeating);

// Task 3:
let contactsList = [
    ["Dan Smith", "DSmith@gmail.com", "636-299-0098"],
    ["Madeline Parker", "Mads_P@yahoo.com", "573-888-2154"]
];
console.log("Contacts List:", contactsList);