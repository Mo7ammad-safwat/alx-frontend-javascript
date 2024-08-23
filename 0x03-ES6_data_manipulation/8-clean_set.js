function cleanSet(set, startString) {
  const arr = [];
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  [...set].map((element) => {
    if (element && element.startsWith(startString)) {
      if (element.slice(startString.length) === '' || startString.length === 0) {
        // do nothing
      } else {
        arr.push(element.slice(startString.length));
      }
    }
    return element;
  });
  return arr.join('-');
}
export default cleanSet;
