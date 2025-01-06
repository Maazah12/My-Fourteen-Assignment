var subject1 = prompt("Enter marks for Subject 1 (out of 100): ");
var subject2 = prompt("Enter marks for Subject 2 (out of 100): ");
var subject3 = prompt("Enter marks for Subject 3 (out of 100): ");

subject1 = parseInt(subject1) || 0;
subject2 = parseInt(subject2) || 0;
subject3 = parseInt(subject3) || 0;

var totalMarks = 300;
var marksObtained = subject1 + subject2 + subject3;
var percentage = (marksObtained / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
alert(
    "Marks Sheet\n" +
    "------------------\n" +
    "Total Marks: " + totalMarks + "\n" +
    "Marks Obtained: " + marksObtained + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%\n" +
    "Grade: " + grade + "\n" +
    "Remarks: " + remarks
);