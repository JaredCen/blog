let count = 0;
function factorial(n) {
  count++;
  return n === 1 ? 1 : n * factorial(n - 1);
}
const n = 100000;
try {
  factorial(n);
  console.log(`[success], n = ${n}, num = ${count}`);
} catch(e) {
  console.log(`[stack overflow], num = ${count}`);
}