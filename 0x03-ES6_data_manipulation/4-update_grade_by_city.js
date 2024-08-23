export default function updateStudentGradeByCity(students, city, newGrade) {
  // TODO return a new array with the students' grades updated
  // TODO use map
  const filteredStudents = students.filter((student) => student.location === city);
  const updatedStudents = filteredStudents.map((student) => {
    if (student.id === newGrade[0].studentId) {
      return { ...student, grade: newGrade[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
