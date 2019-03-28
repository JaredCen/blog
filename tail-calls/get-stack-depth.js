function getDeep() {
  try {
    return 1 + getDeep();
  } catch(e) {
    return 1;
  }
}

// 12500
console.log(getDeep());