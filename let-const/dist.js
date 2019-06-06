"use strict";

var _loop = function _loop(i) {
  c = function c() {
    console.log(i);
  };
};

for (var i = 0; i < 5; i++) {
  var c;

  _loop(i);
}