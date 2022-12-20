//? BigInt

const elonMusk = 123456789012345678901234567890n; // n means big integer

console.log(elonMusk);

//* Symbol
const symObj = {name: 'Mike'}
const s1 = Symbol('memo');
const s2 = Symbol();

console.log('s1:', s1, 'typeof s2',typeof s2);

const obj = {};
const nullObj = null;

// Null
console.log("obj.name", obj.name); // undefined
console.log(null, typeof null); // null, object
// console.log('nullObj.name', nullObj.name); // TypeError: Cannot read properties of null (reading 'name')

// undefined
console.log(undefined, typeof undefined);
