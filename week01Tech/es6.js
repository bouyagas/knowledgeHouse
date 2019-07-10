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
