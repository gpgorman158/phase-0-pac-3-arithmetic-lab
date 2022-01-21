let n;

function add(add1, add2){
    return add1 + add2;
}
function subtract(sub1, sub2){
    return sub1 - sub2;
}
function multiply(mult1, mult2){
    return mult1 * mult2;
}
function divide(div1, div2){
    return div1 / div2;
}
function increment(n){
    return n += 1 ;
}
function decrement(n){
    return n -= 1 ;
}
function makeInt(n){
    return parseInt(n, 10);
}
function preserveDecimal(n){
    return parseFloat(n);
}
console.log(increment(5));
console.log(decrement(5));
console.log(makeInt("10.5", 10));
console.log(preserveDecimal("20.23423"));
