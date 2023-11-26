const fs = require('node:fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').slice(1);
    const mDict = {};
    let count = 0;
    data.forEach((element) => {
      if (element !== '') {
        const line = element.split(',');
        if (line[3] in mDict) {
          mDict[line[3]].push(line[0]);
        } else {
          mDict[line[3]] = [line[0]];
        }
        count += 1;
      }
    });
    console.log(`Number of students: ${count}`);
    for (const key in mDict) {
      if (key !== 'undefined') {
        console.log(`Number of students in ${key}: ${mDict[key].length}. List: ${mDict[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
