function findMissingNumber(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== i + 1) {
            return i+1;
        }
    }
    return nums.length+1;
}


console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); 
