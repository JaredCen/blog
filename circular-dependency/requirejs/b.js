define(['./a', 'exports'], function(a, exports) {
  console.log('b starting');
  exports.done = false;
  console.log('in b, a.done =', a.done);
  console.log('b done');
  exports.done = true;
});