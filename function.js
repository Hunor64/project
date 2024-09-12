function getFirstElement(arr) {
  return arr[0];
}

const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];

console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);

export function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);