define(function(require) {
  console.log('app starting');
  var a = require('./a');
  var b = require('./b');
  console.log('in app', a, b);
});