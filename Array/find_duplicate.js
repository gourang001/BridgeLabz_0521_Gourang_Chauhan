function findDuplicates(nums){
    const ans = new Set();
    const duplicates = [];

    for (const num of nums) {
        if (ans.has(num)) {
            duplicates.push(num);
        } else {
            ans.add(num);
        }
    }
    return duplicates;
}


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); 
