interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1 : Student = { 
  firstName: 'John';
  lastName: 'Makerere';
  age: 35;
  location: 'Kampala';
}
const student2 : Student = {
  firstName: 'Josephine';
  lastName: 'Amina';
  age: 30;
  location: 'Nairobi';
}
const studentsList : Student[] = [student1, student2];

const generateTable = function (table, students) {
  for (const student of data) {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const nameTxt = document.createTextNode(student.firstName);
    nameCell.appendChild(nameTxt);
    const locationCell = row.instertCell();
    const locationTxt = document.createTextNode(student.location);
    locationCell.appendChild(locationTxt);
  }
}
