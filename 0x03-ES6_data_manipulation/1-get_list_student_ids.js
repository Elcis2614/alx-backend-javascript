export default function getListStudentIds(arr) {
  if (arr.constructor !== Array) return new Array();
  const ids = arr.map((obj) => obj.id);
  return ids;
}
