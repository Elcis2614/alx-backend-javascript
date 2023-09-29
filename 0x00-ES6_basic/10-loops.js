export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const str of array) {
    array[idx] = appendString + str;
    idx += 1;
  }

  return array;
}
