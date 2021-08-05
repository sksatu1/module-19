// 7!=7 X 6 X 5 X 4 X 3 X 2 X 1
// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);



// factorial by using function and for loop

// function factorial(number) {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// var firstFactorial = factorial(7);
// console.log("my factorial value =", firstFactorial);




// using while loop 
function Fact(value) {
    let Fact = 1;
    let i = 1;
    while (i <= value) {
        Fact = Fact * i;
        i++;
    }
    return Fact;
}
let myAns = Fact(7);
console.log('my factorial value =', myAns);