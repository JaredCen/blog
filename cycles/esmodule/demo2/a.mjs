import b from './b.mjs';
console.log('a starting');
console.log('in a, b.done = %j', b.done);
export default {
  done: true,
}
console.log('a done');