console.log(`Hello, World!`); // string
console.warn(`This is a warning message!`);
console.error(`This is an error message!`);

//string
('test " "');

const st = "test ' ' ' ' ' ' '";

//number
console.log(9007199254740991);

//BinInt
console.log(9007199254740991n);

//boolean
true;
false;

console.log(typeof (2 > 1));

//null vs undefined
let test = null;
console.log(typeof test);

console.log(typeof function () {});

//Symbol
const a = Symbol('test');
const b = Symbol('test');
console.log(a == b);

console.log(typeof a);
console.log(typeof b);

const aobj = {};
const bobj = [];
const set = new Set();
const map = new Map();

console.log(typeof set);
console.log(typeof map);

// variables змінні
let response = {};
const json = ``;
var oldvar = false;

const PI = 3.14;

let pi = 3.14;
pi = 1 + false;

//true = 1
//false = 0

console.log(pi);
console.log(typeof pi);

//hoisting
