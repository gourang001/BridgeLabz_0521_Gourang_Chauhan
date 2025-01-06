function generateBinaryNumbers(N) {
    const result = [];
    const queue = ["1"];

    for (let i = 1; i <= N; i++) {
        const current = queue.shift();
        result.push(current);
        queue.push(current + "0");
        queue.push(current + "1");
    }
    return result;
}

const n = 5;
console.log(generateBinaryNumbers(n));
