function findSubarrayWithGivenSum(arr, target) {
    for (let i = 0; i < arr.length; i++){
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum === target) {
                return arr.slice(i, j + 1);
            }
        }
    }
    return "No subarray found";
}

const arr1 = [1, 2, 3, 7, 5];
const target1 = 12;
console.log(findSubarrayWithGivenSum(arr1, target1)); 
