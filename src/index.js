import { HashMap } from './HashMap.js';

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.entries());

test.set('jacket', 'indigo');
test.set('elephant', 'cyan');

console.log(test.entries());

test.set('moon', 'silver');

test.set('hat', 'invisible');
test.set('apple', 'lime');

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.length());
console.log(test.get('hat'));
console.log(test.has('apple'));
console.log(test.remove('apple'));
console.log(test.has('apple'));
console.log(test.length());
