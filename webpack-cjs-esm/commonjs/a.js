console.log('a starting');
const b = require('./b');
console.log('in a, b.done =', b.done);
exports.done = true;
console.log('a done');