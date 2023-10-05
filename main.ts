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
