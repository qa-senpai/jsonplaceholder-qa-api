// структура даних

function sendLatter(names) {
  // loops/цикли
  //   for (let i = 0; i < names.length; i++) {
  //     console.log(names[i]);
  //   }

  for (const name of names) {
    console.log(name);
  }
}

const students = ['Ira', 'Olga', 'Yuriy'];
// console.log(students[-1]);
// console.log(students[students.length - 1]);

students[5] = 'Pavlo';
console.log(students[5]);

sendLatter(students);

// Ira - 0 index
// Olage - 1 index
// Yuriy - 2 index

// const i = fruits.forEach((value, index, array) => {
//   array[index] = 'test' + index;
// });

// console.log(fruits);

// const newFruits = fruits.map((value, index, array) => {
//   return value;
// });

const arr = () => 'test';

const fruits = ['Apple', 'Orange', 'Pear'];
const numbers = [1, 2, 3, 4, 5, 6];
console.log(
  numbers.find((value, index, arr) => {
    console.log(arr);
    return value === 2 + 2;
  }),
);

const fruits = ['Apple', 'Orange', 'Pear', 'Apple', 2, 2, 3, 3, true, true];
const uniqueFruits = new Set(fruits);
const uniqueFruitsMap = new Map(fruits);

console.log(uniqueFruits);

console.log(uniqueFruits);

// Перетворення Set на array - спосіб 1: spread operator
const arrayFromSet1 = [...uniqueFruits];
console.log(arrayFromSet1);

// Перетворення Set на array - спосіб 2: Array.from()
const arrayFromSet2 = Array.from(uniqueFruits);
console.log(arrayFromSet2);
