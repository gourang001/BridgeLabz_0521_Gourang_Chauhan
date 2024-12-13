// WeakMap and WeakSet are similar to Map and Set, but they have some key differences designed for specialized use cases.
// A WeakMap is a collection of key-value pairs where:
// Keys must be objects.
// Values can be arbitrary values.
// Cannot be iterated (no forEach, no size property).

const weakMap = new WeakMap();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakMap.set(obj1, "this is obj1");
weakMap.set(obj2, "this is obj2");

console.log(weakMap.get(obj1)); 

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); 



// A WeakSet is a collection of unique objects where:
// Only objects can be added (no primitives like numbers or strings).
// Key Features:
// Cannot store primitive values.
// Cannot be iterated (no forEach, no size property).

const weakSet = new WeakSet();

const obj3 = { name: "Alice" };
const obj4 = { name: "Bob" };

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet.has(obj3)); 

weakSet.delete(obj3);
console.log(weakSet.has(obj3)); 

