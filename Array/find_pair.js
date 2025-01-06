function findPairWithSum(nums,target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [nums[i], nums[j]]; 
            }
        }
    }

    return null; 
}
console.log(findPairWithSum([1, 2, 3, 4, 6, 8, 9], 10)); 