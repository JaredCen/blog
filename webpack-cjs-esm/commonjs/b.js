console.log('b starting');
const a = require('./a');
console.log('in b, a.done =', a.done);
exports.done = true;
console.log('b done');