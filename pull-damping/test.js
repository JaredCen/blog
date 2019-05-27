function linear(x, max) {
  const breakPoints = [
    0,
    max,
    max * 2,
    max * 3,
    max * 5,
    max * 12,
  ];
  const factors = [
    0.18,
    0.14,
    0.1,
    0.05,
    0.025,
    0.005,
  ];

  let y = Math.abs(x);
  for (let i = breakPoints.length; i > 0; i--) {
    if (y > breakPoints[i - 1]) {
      y = (y - breakPoints[i - 1]) * factors[i - 1];
      for (let j = i - 1; j > 0; j--) {
        y += (breakPoints[j] - breakPoints[j - 1]) * factors[j - 1]; 
      }
      break;
    }
  }
  return Math.round(x < 0 ? -y : y);
}

function pow(x, max) {
  let y = Math.abs(x);
  y = 0.12 * max * Math.pow(y, 1/5);
  return Math.round(x < 0 ? -y : y);
}

function log(x, max) {
  let y = Math.abs(x);
  y = 0.08 * max * Math.log(y + 1);
  return Math.round(x < 0 ? -y : y);
}

function curve(x, max) {
  let y = Math.abs(x);
  y = 0.82231 * max / (1 + 4338.47 / Math.pow(y, 1.14791));
  return Math.round(x < 0 ? -y : y);
}

console.time('linear');
linear(6000, 500);
console.timeEnd('linear');
console.time('pow');
pow(6000, 500);
console.timeEnd('pow');
console.time('log');
log(6000, 500);
console.timeEnd('log');
console.time('curve');
curve(6000, 500);
console.timeEnd('curve');