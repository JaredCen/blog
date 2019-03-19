console.log('a starting');
const app = require('./app');
console.log('in a, app.done =', app.done);
exports.done = true;
console.log('a done');