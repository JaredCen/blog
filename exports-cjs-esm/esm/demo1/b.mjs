let count = 1;
export default {
  count,
  add() {
    count++;
  },
  get() {
    return count;
  }
}