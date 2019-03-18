import a from './a.mjs';
console.log('b starting');
setTimeout(() => {
  console.log('settimeout in b, a.done = %j', a.done);
}, 0);
export default {
  done: true,
}
console.log('b done');