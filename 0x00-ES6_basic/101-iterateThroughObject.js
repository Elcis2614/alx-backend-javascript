export default function iterateThroughObject(reportWithIterator) {
  const iter = [];
  for (const item of reportWithIterator) iter.push(...item);
  return iter.join(' | ');
}
