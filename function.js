function getFirstElement(arr) {
  if (arr.length == 0) {
    return undefined;
  } else {
    return arr[0];
  }
}
function writeAllElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];

console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);
