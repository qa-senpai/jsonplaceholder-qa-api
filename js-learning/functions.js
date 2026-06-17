//DRY - Don`t repeat yourself
// const coffee = coffeeMachine('Americano', true, true);
openCan();

// function declaration
export function coffeeMachine(coffeeType, coffeeBeans, milk) {
  //   if (coffeeType == 'Americano' && coffeeBeans) {
  //     console.log('Варимо американо!');
  //     return 'Чашка американо';
  //   }
  //   if (coffeeType == 'Latte' && coffeeBeans && milk) {
  //     console.log('Варимо латте!');
  //     return 'Чашка латте';
  //   } else {
  //     console.log('Вкажіть валідний напій Americano or Latte');
  //   }
}

console.log(coffee);

// function expression
const openCan = function () {
  console.log('can openned');
};

// arrow function
const test = () => {};

[].find((value, index) => {});
