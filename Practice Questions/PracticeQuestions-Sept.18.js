// Question 1 - Given r (radius) of a circle, calculate the area of a circle (A = π * r * r). 

function circleArea(r){
    var A = Math.PI*r*r
    console.log(A)
}

circleArea(3);

// Question 2 - Simulate rolling a dice using random(). 
// The function should allow the caller to specify any number of sides, 
// but default to 6 if no side count is given: roll() (assume 6 sided, 
// return random number between 1 and 6) vs. roll(50) (50 sided, return 
//number between 1 and 50).[You might need Math class or specifically 
//Math.random() to produce a random number in JavaScript]

function roll(num=6){
    let x = Math.floor(Math.random()*num)
    console.log(x)
}

roll();
roll(50);

// Question 3 - Write a function that converts values in Celcius to Farenheit: 
// convert(0) should return "32 F". 

function convertCtoF(C){
    let F = (C * 9/5) + 32
    console.log(F)
}

convertCtoF(0);

// Question 4 -	Modify your solution to the previous function to allow a second argument: 
// "F" or "C", and use that to determine what the scale of the value is, 
// converting to the opposite: convert(122, "F") should return "50 C". 

function convert(temp, S){
    //if S is C, convert to F else convert F to C.
    //print it
    if (S === "C"){
        let tempF = (temp * 9/5) + 32
        console.log(tempF)
    } else {
        let tempC = (temp - 32) * 5/9
        console.log(tempC)
    }
}

convert(30, "C");
convert(60, "F");


// Question 5 - 5.	Function taking any number of arguments (Numbers), 
// returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) 
// should return false. 

// NOT SURE HOW TO DO THIS ONE

// Question 6 -	Function allowing any number of arguments (Numbers), 
// returning their sum: sum(1, 2, 3) should return 6. 

function sum(...numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    console.log(total)
}

sum(1, 2, 3)

// Question 7 - Function to check if a number is a multiple of 3 (returns true or false) 

function check3(x){
    if (x % 3 === 0) {
        console.log("true")
    } else {
        console.log("false")
    }
}

check3(7);

// Question 8 -	Function to subtract a discount % from a total. If no % is given, return the original value. 

function discount(total, discount){
    if (discount === undefined){
        let discountedValue = total
        console.log(discountedValue)
    } else {
        let discountedValue = total - total*(discount/100)
        console.log(discountedValue)
    }
}

discount(100, 20);

// Question 9 - 9.	Function that takes a number of seconds as a Number, 
// returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute. 

function secondsToString(seconds){

    let minutes = Math.round(seconds/60)
    let hours = Math.floor(minutes/60)
    let days = Math.floor(hours/24)

    hours %= 24
    minutes %= 60

    console.log(days + " Days, "+ hours + " Hours, " + minutes + " Minutes")
}

secondsToString(3600);

// Question 10 - 10.	Modify your solution above to only include units that make sense: 
// "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc.

// NOT SURE WHAT THIS QUESTION IS ASKING FOR...
