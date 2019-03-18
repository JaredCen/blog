console.log('b starting');
import a from './a';
console.log('in b, a.done =', a.done);
export default {
  done: true,
}
console.log('b done');