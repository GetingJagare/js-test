const calcFactorial = (n) => {
    if (n <= 1) {
    return 1;
    }
    return n * calcFactorial(n - 1);
}

const res = calcFactorial(100);
const num = BigInt(res);
const digitSum = num.toString().split('').reduce((sum, d) => +sum + +d);
console.log(digitSum);