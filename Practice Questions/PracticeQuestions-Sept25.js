// Practise Questions - September 25, 2023
// Completed by: Ellen Dalton

// Question 1 - Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 15243;    // reverseNumber(15234)
// Expected Output: 34251

// Hint: reverse() reverses what is given to it.

function reverseNumber(num){
    numString = num.toString();
    numArray = numString.split("")
    numReversed = numArray.reverse()
    numReversedJoined = numReversed.join("")
    return numReversedJoined
}

console.log(reverseNumber(1234));

// Question 2 - Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'keyincollege'
// Expected Output : 'ceeegikllnoy'

function alphabeticalOrder(s){
    sArray = s.split("");
    sSorted = sArray.sort();
    sSortedJoined = sSorted.join("")
    console.log(sSortedJoined)
}

alphabeticalOrder("keyincollege");

// Question 3 - Write a JavaScript function to get the extension of a filename.

var fileName = "keyin.js";

function splitName(s){
    sArray = s.split(".");
    return sArray[1];
}

console.log(splitName(fileName));

// Question 4 -	Write a JavaScript function to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//  NOT SURE HOW TO DO THIS ONE...


// Question 5 - Write a function in JavaScript “captalize(str)” 
// that returns the string “str” with its first letter converted 
// to capital (if that is small letter – if it is already capital, 
// returns the string as is)

function capitalize(str){
    let array = str.split("");
    array[0] = array[0].toUpperCase();
    for(let i=1;i<array.length;i++){
        array[i] = array[i].toLowerCase();
    }
    return array.join("");
}

console.log(capitalize("hello"))

// Question 6 - Write a function in JavaScript “checkPeriod(str)”
// that returns “contain period” if str contains a period “.”, otherwise
// it returns “no period”.

function checkPeriod(str){
    if (str.endsWith(".")){
        return "contains period"
    } else {
        return "no period"
    }
}

console.log(checkPeriod("hello."));

// Question 7 - Write a function in JavaScript “putSuffix(num)” 
// that takes a number “num” as parameter and puts a suffix with it. 
// For example, if num is 22 then the function returns 22nd, if num 
// is 23 then function returns 23rd and so on. If user does not provide 
// a parameter, then it should return without anything.

function putSuffix(num) {
    let numString = num.toString();
    if (numString === "11"){
        return numString + "th";
    } else if (numString.endsWith("1")) {
        return numString + "st"
    } else if (numString.endsWith("2")) {
        return numString + "nd";
    } else if (numString.endsWith("3")) {
        return numString + "rd";
    } else {
        return numString + "th";
    }
}

console.log(putSuffix(11));