export default function cleanSet(set, startString) {
  const chain = [];
  if (startString === '') return '';
  set.forEach((str) => {
    if (str.startsWith(startString)) chain.push(str.replace(startString, ''));
  });
  return chain.join('-');
}
