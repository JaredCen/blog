'use strict';

let count = 0;
function factorial(n, r = 1) {
  count++;
  return n === 1 ? r : factorial(n - 1, n * r);
}
const n = 100000;
try {
  factorial(n);
  console.log(`[success], n = ${n}, num = ${count}`);
} catch(e) {
  console.log(`[stack overflow], num = ${count}`);
}