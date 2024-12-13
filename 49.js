function solve(array) {
    const length = array.length;
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * length);

      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  

  const strings = ["apple", "banana", "cherry"];
  const shuffle = solve(strings);
  console.log(shuffle);
  