//write a function that searches for an element in an array and returns the index,
// if the element is not found, return -1

let arr = [4, 2, 0, -1, -3, 18, 29, 8, 30];

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement(arr, 8));

function negativeNumbers(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      num++;
    }
  }
  return num;
}

console.log(negativeNumbers(arr));

function smallestNumber(arr) {
  let smallestNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

console.log(smallestNumber(arr));

function findSecondLargest(arr) {
  if (arr.length === 0) return "Array should have at least two element";
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargest(arr));
