
// checking even number 

function isMynumber(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false
    }
}
const x = 11;
const checkNumber = isMynumber(x);
console.log(checkNumber);


// checking odd number 
function isOdd(oddnumber) {
    if (oddnumber % 2 != 0) {
        return true;
    }
    else {
        return false
    }
}
const y = 11;
const oddnumberCheck = isOdd(y)
console.log(oddnumberCheck);