define(function(require, exports) {
  console.log('a starting');
  exports.done = false;
  var b = require('./b');
  console.log('in a, b.done =', b.done);
  console.log('a done');
  exports.done = true;
});