const response = '1241521515';
const actualId = 1241521515;
const url = 'https://meet.google.com/yny-rdgr-cvy?authuser=1245151251251';

if ('a' < 'b') {
  console.log('something is true');
}

if ('2' > '10') {
  console.log('something is true');
}

console.log(Number('authuser=1'));
console.log(Number.isNaN(Number('12151')));

const obj1 = {};
const obj2 = {};

const arr1 = [];
const arr2 = [];

console.log(arr1 == arr2);

if (1 < 2 < 3) {
  console.log(true);
}

if (3 > 2 > 1) {
  console.log('result');
}

// логічні оператори

/*
&& - І  
|| - OR АБО 
! 
*/

const inputname = '';
const username = inputname || 'anonymous';

console.log(username);

// пріорітети операторів
console.log(true && !(false || false));
console.log(!(false || false));

const res = undefined;

if (!res) {
  console.log(`${!res}`);
}

const age = 17;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log('Проходь на концерт');
}

if (hasTicket === false) {
  if (hasTicket === true) {
    if (age === true) {
      if (hasTicket === true) {
      }
    }
  }
  console.log('Хлопче, іди квиток купляй');
}

if (hasTicket === false) {
  console.log('Хлопче, іди квиток купляй');
} else {
  console.log('Хлопче, іди виростай');
}

/*
> - більше true
< - менше true/false
>= 
<= 
==  
===
!= не дорівнює
!==
*/
