define(function(require, exports) {
  console.log('b starting');
  exports.done = false;
  var a = require('./a');
  console.log('in b, a.done =', a.done);
  console.log('b done');
  exports.done = true;
});