const pi = 3.14;

// global, functional, block-scope
function fizz() {
  console.log(pi);
  const abc = 'abc';

  function fizzBuzz() {
    console.log(abc);
    var def = 'ed123';
  }

  fizzBuzz();
  console.log(def);
}

fizz();

//block scope
if (true) {
  var x = 20;
  let y = 12;
}

// console.log(x);
console.log(y);

// console.log(abc);

function buzz() {
  console.log(pi);
}

function dojo() {
  console.log(pi);
}

let dojo = 123;
let dojo = 234;

console.log(dojo);

fizz();
buzz();
dojo();
