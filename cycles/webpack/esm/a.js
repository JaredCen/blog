console.log('a starting');
import b from './b';
console.log('in a, b.done =', b.done);
export default {
  done: true,
}
console.log('a done');