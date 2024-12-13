function letterFrequency(str) {
    let frequency = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {  
            char = char.toLowerCase();
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    let result = [];
    for (let char in frequency) {
        result.push([char, frequency[char]]);
    }
    return result;
}


let myString = "Hello, World!";
let frequencies = letterFrequency(myString);
console.log(frequencies); 
