let count = 0;
function fib(n) {
  count++;
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}
const n = 40;
try {
  fib(n);
  console.log(`[success], n = ${n}, num = ${count}`);
} catch(e) {
  console.log(`[stack overflow], num = ${count}`);
}