'use strict';

function fa() {
  throw new Error();
}

function fb() {
  return fa();
}

fb();