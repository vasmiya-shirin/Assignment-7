//1. Write a program to count the number of digits in a given number
let n=Number(prompt("Enter the number"))
console.log("Number : "+ n)
 count=0
while(n>0){
    n=Math.floor(n/10)
    count++
}
console.log(" number of digits : " + count)