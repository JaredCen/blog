console.log('app starting');
const a = require('./a');
console.log('in app, a.done =', a.done);
exports.done = true;
console.log('app done');
