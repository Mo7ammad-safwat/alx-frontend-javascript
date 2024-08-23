export default function hasValuesFromArray(set, array) {
  let flag = true;
  array.map((element) => {
    if (!set.has(element)) {
      flag = false;
    }
    return element;
  });
  return flag;
}
