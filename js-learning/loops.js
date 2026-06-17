// for (index)
// continue
// break
for (
  let i = 0; // ініціалізація циклу
  i <= 10; // умова (поки true - цикли виконується)
  i++ // виконується ПІСЛЯ виконання тіла циклу
) {
  if (i === 7) {
    break;
  }

  console.log(i); // тіло циклу
}

// while
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

//do while
let j = 0;

do {
  console.log(j);
  j++;
} while (false);

// for of
const arr = [[1, 2, 3], {}, true, 4, '5', 6, Symbol('test'), 8, 9]; // array

for (let i = 0; i <= 10; i++) {
  const username = 'randomusername' + i;
  // createUser(username)
  console.log(username);
}

for (const i of arr) {
  console.log(i);
}

// for in
const obj = {
  a: 10,
  b: 9,
  c: 8,
};

for (const key in obj) {
  console.log('key: ' + key);
  console.log('value: ' + obj[key]);
}
