// Write a function named firstPalindrome which takes a parameter: words. 
// Given an array of string words, return the first palindromic string in the array. 
// If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.


// Input words = ["abc", "car","ada","racecar","cool"]
// Output: "ada"
// Expalnation: The first string that is "ada"
// Note that "racecar" is also palindromic, but it is not the first.


function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

function firstPalindrome(words) {
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
}

const words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words)); 

