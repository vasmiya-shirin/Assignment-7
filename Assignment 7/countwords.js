// 3. Write a program that counts the number of words in a given sentence.
let sentence=prompt("Enter a sentence")
console.log(sentence)
let count=1
let length=sentence.length
for(let i=0;i<length;i++){
    if(sentence[i] == ' '){
        count++
    }
}
console.log("Number of words : " + count)