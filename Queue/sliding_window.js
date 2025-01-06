function slidingWindowMaximum(nums, k) {
    const result = [];
    
    for (let i = 0; i <= nums.length - k; i++) {
        let maxInWindow = nums[i];
        for (let j = i + 1; j < i + k; j++) {
            maxInWindow = Math.max(maxInWindow, nums[j]);
        }
        result.push(maxInWindow);
    }
    return result;
}


const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMaximum(nums, k)); 
