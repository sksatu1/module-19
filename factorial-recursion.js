// 5! = 5 X 4 X 3 X 2 X 1
// 5! = 5 X 4!
// 6! = 6 X 5!
// 7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
// n! = n X (n-1)!


function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n = n * factorial(n - 1);
}
const factorialValue = factorial(5);
console.log(factorialValue);
