// Write a function named fizzBuzz 
// that takes in two(2) parameters which are 
// expected to be strings. 
// The function should return the string Fizz 
// if the combined length of the parameters is divisible by 3, 
// the string Buzz if it is divisible by 5, 
// and the string FizzBuzz if it is divisible by both 5 and 3.




function fizzBuzz(string1,string2){
}

let string1 = "Kihembo"
let string2 = "Sarah"

let combinedLength = string1.length + string2.length

if(combinedLength % 3 === 0 && combinedLength % 5 ===0){
    console.log("Fizzbuzz")
}
else if(combinedLength % 3 === 0){
    console.log("Fizz")
}
else if(combinedLength % 5 === 0){
    console.log("Buzz")
}
else{
    console.log("Invalid")
}






