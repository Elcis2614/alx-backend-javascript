export default function cleanSet(set, startString) {
  const chain = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((str) => {
    if (str.indexOf(startString) === 0) chain.push(str.replace(startString, ''));
  });
  return chain.join('-');
}
