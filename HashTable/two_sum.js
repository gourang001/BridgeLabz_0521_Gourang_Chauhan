function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 



// function twoSum(nums, target) {
//     const hashTable = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        

//         if (hashTable.has(complement)) {
//             return [hashTable.get(complement), i];
//         }

//         hashTable.set(nums[i], i);
//     }

//     return [];
// }


// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); 
