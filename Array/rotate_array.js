function rotateArray(nums,k){
    const n = nums.length;
    for(let i=0;i<k;i++){
        nums.unshift(nums.pop());
    }
    return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
