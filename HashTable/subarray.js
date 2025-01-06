function subarraySum(nums, k) {
    let count = 0;
    let currentSum = 0;
    const map = new Map();

    for (let num of nums) {
        currentSum += num;
      
        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
}


const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k)); 