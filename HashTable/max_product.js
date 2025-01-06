function maxProduct(nums){
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = maxProduct;

    for(let i = 1; i < nums.length; i++){
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        result = Math.max(result, maxProduct);
    }
    return result;
}


const nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); 
