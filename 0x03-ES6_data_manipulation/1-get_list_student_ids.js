export default function getListStudentIds(arr) {
  if (arr.constructor !== Array) return [];
  const ids = arr.map((obj) => obj.id);
  return ids;
}
