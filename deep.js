let original = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "gaming"],
    address: {
      city: "Wonderland",
      zip: "12345"
    }
  };
  
 
  let deepCopy = JSON.parse(JSON.stringify(original));
  
  
  deepCopy.name = "Bob";
  deepCopy.hobbies.push("traveling");
  deepCopy.address.city = "New Wonderland";
  
  console.log("Original Object:");
  console.log(original);
  
  console.log("Deep Copy:");
  console.log(deepCopy);
  