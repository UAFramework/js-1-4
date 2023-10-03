/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents = (students, group) =>
  group.every((student) => students.includes(student)); //I used the .every() method to check if all elements of the group array are students by comparing them to the students array.

if (groupIsOnlyStudents(students, group)) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
