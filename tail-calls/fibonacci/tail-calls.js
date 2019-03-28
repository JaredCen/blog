let count = 0;
function fib(n, ac1 = 1, ac2 = 1) {
  count++;
  return n <= 1 ? ac2 : fib(n - 1, ac2, ac1 + ac2);
}
const n = 40;
try {
  console.log(fib(n));
  console.log(`[success], n = ${n}, num = ${count}`);
} catch(e) {
  console.log(`[stack overflow], num = ${count}`);
}