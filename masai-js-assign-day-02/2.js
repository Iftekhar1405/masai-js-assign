
// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
  ];

function calculateFinalGrades(students){
    return students.map(function(student){
        let totalMarks = student.scores.reduce(function(sum,score){return sum + score})
        let finalGrade = Math.round(totalMarks/student.scores.length)
        return {id : student.id, name : student.name, finalGrade}
    }).filter(function(student){return student.finalGrade >= 65})
}
  // Output
  const passedStudents = calculateFinalGrades(students);
  console.log(passedStudents);
  // Output should be:
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]
  
  