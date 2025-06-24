// 2.Write a program to find the product of all digits in a number. 
let n=Number(prompt("Enter a number"))
console.log("Number : "+ n)
let remainder
let product=1
while(n>0){
    remainder=n%10
    product=product*remainder
    n=Math.floor(n/10)
}
console.log("product of all digits in a number : " + product)
