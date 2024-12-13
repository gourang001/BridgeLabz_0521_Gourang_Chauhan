// A Map is a collection of key-value pairs where keys can be of any type (objects, functions, primitive values, etc.)
// Key Features of Map:
// Keys can be of any type (not just strings).
// Maintains the order of insertion.
// Offers methods like set, get, delete, and has.

//use case
//Frequency Counter: Count the frequency of elements in an array


const myMap=new Map();
myMap.set('name','Rahul');
myMap.set('age','30');
myMap.set('address','Ambala');

//console.log(myMap);

// retrive the data by key
console.log(myMap.get('name'));
console.log(myMap.get("age"));

// Check if a key exists o/p will be boolean only
console.log(myMap.has('age'));

// delete key-value pair
myMap.delete('address');
console.log(myMap);

// size of map
console.log(`size of map: ${myMap.size}`);

// Iterate through the Map
myMap.forEach((key, value) => {
    console.log(`${key}: ${value}`);
});

// clear the map
myMap.clear();

// updated map size
console.log(myMap.size);



// A Set is a collection of unique values. It ensures that no duplicate values are stored and it maintains the insertion order of elements.
// Key Features of Set:
// Stores unique values of any type.
// Maintains insertion order.
// Offers methods to add, delete, and check for the presence of values.

//use case
// Removing Duplicates from an Array
// Tracking Unique Events: Keep track of unique events, like users who have visited a website.
// Finding Intersection of Two Arrays: Use Set to find common elements between two arrays

const mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); //it will not add repiting no

console.log(mySet);

// Check if a value exists o/p will be boolean only
console.log(mySet.has(2)); 
console.log(mySet.has(4)); 

// Delete a value
mySet.delete(2);
console.log(mySet);

// size of the Set
console.log(mySet.size);

// Iterate through the Set
mySet.forEach(value => {
    console.log(value);
});

// clear the set
mySet.clear();
console.log(mySet.size);