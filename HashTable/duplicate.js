function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = [];

    for (let num of nums) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }
    return duplicates;
}


const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); 
