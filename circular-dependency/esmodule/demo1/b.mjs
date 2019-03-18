console.log('b starting');
export default {
  done: true,
}
import a from './a.mjs';
console.log('in b, a.done = %j', a.done);
console.log('b done');