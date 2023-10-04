export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city)
    .map((student) => {
      const newStudent = student;
      for (const grade of newGrades) {
        if (grade.studentId === student.id) {
          newStudent.grade = grade.grade;
          return newStudent;
        }
      }
      newStudent.grade = 'N/A';
      return newStudent;
    });
  return cityStudents;
}
