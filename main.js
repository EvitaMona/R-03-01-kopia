const array1 = [1, 1, 1, 4, null, 6, null, 9, 9, 9];

function uniqArray(array1) {
  const uniqueSet = new Set(array1);
  return [...uniqueSet];
}
console.log(uniqArray(array1));
