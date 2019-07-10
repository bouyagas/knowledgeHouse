const arr = [1, 2, 3, 4, 5];

// Mutative iterator
arr.forEach(function(el) {
  console.log(el);
});

// Unmutative iterator
arr.map(el => el + 1);

// Declaring variable in JS
// var, let, const

// var variable are not generally block-scope

// variable is define in the global scope
var i = 0;
console.log(i);

// variable that have the same name in both global and local scope can be overwritten
var i = 0;
console.log(i);

function example() {
  var i = 1;
  console.log(i);
}
example();

// output ii 1

// variable is define in the local scope
function example1() {
  var i = 0;
  console.log(i);
}
example1();

// let variable are block-scope
function example2() {
  let i = 0;
  console.log(i);
}
example2();

// const varibles the value remain the same
// if you change the value if will throw an error

function example3() {
  const i = 0;
  // i = 1 when it will and error call typeError: Assigment to constant variable
  console.log(i);
}
example2();

// varLetConst exercices

const _replaceMe_ = null;

// Remove _replaceMe_ and add your own code so that each variable is the type that its name indicates
const numberVar = 1;
const stringVar = 'Hello World';
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;

// Remove _replaceMe_ and use math operators to assign the following variables. Use Math methods where ever possible.
const pi = Math.PI;
const piPlusOne = pi + 1;
const piMinusOne = pi - 1;
const piDividedByThree = pi / 1;
const piSquared = Math.pow(pi, 2);
const piRoundedDown = Math.floor(pi);
const piRoundedUp = Math.ceil(pi);

// Remove _replaceMe_ and assign the variables below using x and y.
const x = 5;
const y = 4;
const isXLessThanY = x < y;
const xMinusY = x - y;
const yDividedByX = y / x;
const xAsAString = 'x';
const YToThePowerOfX = Math.pow(y, x);
const yRoundedUp = Math.ceil(y);

/* Use `let` to keep x from 'leaking' out of our conditional block.
 * */
let k = 1;

if (k === 1) {
  let k = 2;
}

console.log(k); // should output 1

/* Use `const` so `x` can't change
 *
 * Consider renaming to const convention
 * */
const j = 1;

if (true) {
  const j = 2; // should raise a TypeError
}

console.log(j); // 1
