// EXAMPLE 1 - Check if a Function returns True in JavaScript

function doWork() {
  // logic ...
  return true;
}

// 👇️ Check if returns explicitly `true`
if (doWork() === true) {
  // 👇️ this runs
  console.log('✅ function returns true');
} else {
  console.log('the function does NOT return true');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Function returns a Truthy value in JavaScript

// function doWork() {
//   // logic ...
//   return true;
// }

// // 👇️ Check if returns Truthy value
// if (doWork()) {
//   // 👇️ this runs
//   console.log('✅ function returns TRUTHY value');
// } else {
//   console.log('The function does NOT return a truthy value');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a function returns a truthy value using logical AND (&&)

// function doWork() {
//   // logic ...
//   return true;
// }

// function sum(a, b) {
//   return a + b;
// }

// const result = doWork() && sum(10, 15);
// console.log(result); // 👉️ 25

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a function returns a truthy value using ternary operator

// function doWork() {
//   return true;
// }

// function sum(a, b) {
//   return a + b;
// }

// const result = doWork() ? sum(10, 10) : 'abcd';
// console.log(result); // 👉️ 20
