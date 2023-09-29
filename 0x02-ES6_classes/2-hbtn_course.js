export default class HobertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw new Error('Name must be a string');
    this._name = name;
    if (typeof (length) !== 'number') throw new Error('length must be a number');
    this._length = length;
    if (students.constructor !== Array) throw new Error('Students must be a string array');
    students.forEach((item) => {
      if (typeof (item) !== 'string') throw new Error('Students must be a string array');
    });
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') throw new Error('Name must be a string');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') throw new Error('length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students.constructor !== Array) throw new Error('Students must be a string array');
    students.forEach((item) => {
      if (typeof (item) !== 'string') throw new Error('Students must be a string array');
    });
    this._students = students;
  }
}
