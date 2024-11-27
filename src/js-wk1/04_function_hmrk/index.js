// ! 1. Pass a number into a function that will return the absolute value of that number
// ! (absolute value of -1 is 1, and absolute value of 1 is 1) without the use of built in math functions.

function absoluteNum(d){
    if (d < 0) {
        return d * -1;
    }
    return d;
}
console.log(absoluteNum(-456567));
console.log(absoluteNum(100000000));



//! 2. Make a function called pow that accepts arguments x and y and returns the value of x to the y power

function pow(x,y) {
    return x**y;
}
console.log(pow(18,15));


//! 3. Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words, replace them with "REDACTED.

function redactBadwords(approvedWords, bannedWords){

}

let goodWords = ["good", "great", "bad", "wonderful"];
let badWords = ["bad", "gross"];

let result = redactBadWords(goodWords, badWords);
console.log(result);