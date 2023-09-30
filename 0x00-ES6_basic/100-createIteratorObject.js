export default function createIteratorObject(report) {
  const iterator = [];
  for (const dpt of Object.keys(report.allEmployees)) {
    iterator.push(report.allEmployees[dpt]);
  }
  return iterator;
}
