function inchTofoot(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchTofoot(myInches);
console.log('my height in feet = ', feet);

var naniheight = 156;
var feet = naniheight / 12;

var nanaHeight = 168;
var feet = nanaHeight / 12;


// mile to kilometer
function mileTokilometer(kilometer) {
    mile = kilometer * 1.60934;
    return mile;
}
var mileValue = 5;
mileValue = mileTokilometer(mileValue);
console.log('the value is =', mileValue);