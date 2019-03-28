function fa(x) {
  return x;
}

function fb(x) {
  const b = 1;
  return fa(x) + b;
}

console.log(fb(5));