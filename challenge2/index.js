// Write a JavaScript program that 
// prompts a user to enter their year of birth 
// and in turn prints a string in the console 
// stating whether the user is a minor, a youth, or an elder.  
// Anyone below 18 years is a minor,
// anyone between 18 and 36 years is a youth and the rest are elders.





let birthYear = prompt("Year_of_birth");
let age = new Date().getFullYear() - birthYear;

if(age<18){
    console.log("A minor");
}
else if(age>=18 && age<36){
    console.log("A youth");
}
else{
    console.log("An elder");
}
// console.log(`You are a ${age}`);










