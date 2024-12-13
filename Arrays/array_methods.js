// size of array
let fruits=["apple","banana","orange"];
let size=fruits.length;
console.log(size);


// toString() convert array to string
console.log(fruits.toString());

// at() to get element at specific index
console.log(fruits.at(2));
console.log(fruits[2]);

// join()
console.log(fruits.join("*"));

// pop() only remove the last element
console.log(fruits.pop()); // orange will be remove

console.log(fruits);

// push() insert new element at last position
fruits.push("date");
fruits.push("mango");
fruits.push("kiwi");
console.log(fruits);

// shift() remove first element and shift all other element to a lower index;
console.log(fruits.shift());
console.log(fruits);


// unshift() add new element to an array(at beginning) and unshift older elements
fruits.unshift("lemmon");
console.log(fruits);

// changing array element
fruits[0]="kiwi"
console.log(fruits);

// concate() merge two array
let arr1=[1,2,3];
let arr2=[4,5,6];
console.log(arr2.concat(arr1));

// merge three array
let arr3=[7,8,9];
console.log(arr1.concat(arr2,arr3));

// merge with value
let name=["aman","rahul"];
let x=name.concat("vishal");
console.log(x);

// copyWithin() method copies array elements to another position in an array
console.log(fruits);

fruits.copyWithin(2,0);
console.log(fruits);

// flat() conver 2d to 1d array
let myarr=[[1,2],[3,4],[5,6]];
console.log(myarr.flat());

// flatMap()
let myarr1=[1,2,3,4,5,6];
let newarr=myarr1.flatMap(x=>[x,x*10]);
console.log(newarr);

// splice() add new items to an array
let newfruits=["banana","orange","apple","mango"];
newfruits.splice(2,0,"lemon","kiwi");
console.log(newfruits);

// splice to remove element
newfruits.splice(0,1);
console.log(newfruits);

//slice() method slices out a piece of an array into a new array
console.log(newfruits.slice(1));




