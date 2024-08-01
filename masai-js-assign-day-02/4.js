const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
  ];
  
  function sortStudentsByCondition(students, conditionFunction) {
    return students.sort(conditionFunction);
  }
  
  // Condition function: Sort by age in descending order
  function sortByAgeDescending(a, b) {
    return b.age - a.age;
  }
  
  const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
  console.log(sortedStudents);
  