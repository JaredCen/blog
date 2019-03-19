let count = 1;

module.exports = {
  count,
  add() {
    count++;
  },
  get() {
    return count;
  }
};