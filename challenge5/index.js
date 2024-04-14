// Given an integer num, 
// write a function that repeatedly 
// adds all its digits until the 
// result has only one digit, and return it.


// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one DOMStringList, return it



function getSingleDigit(num) {
    while (num >= 11) {
      num = Math.floor(num / 10) + num % 10;
    }
    return num;
  }

    console.log(getSingleDigit(38)); 


