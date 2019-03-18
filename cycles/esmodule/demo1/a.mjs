console.log('a starting');
export default {
  done: true,
}
import b from './b.mjs';
console.log('in a, b.done = %j', b.done);
console.log('a done');