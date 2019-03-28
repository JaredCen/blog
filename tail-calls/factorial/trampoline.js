function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}

function factorial(n, r = 1) {
  return n === 1 ? r : factorial.bind(null, n - 1, n * r);
}

console.time('t1');
console.log(trampoline(factorial(100000)));
console.timeEnd('t1');