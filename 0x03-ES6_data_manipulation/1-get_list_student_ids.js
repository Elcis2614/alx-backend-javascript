export default function getListStudentIds(arr) {
  if (arr.constructor !== Array) return [];
  return arr.map((obj) => obj.id);
}
