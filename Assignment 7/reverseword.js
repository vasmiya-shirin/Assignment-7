//4. Write a program that reverses the order of words in a sentence but keeps the words intact. 
let sentence=prompt("Enter a sentence")
console.log(sentence)
let word=sentence.split(/\s+/)
console.log(word)
let length=word.length
let temp=""
for(let i=length-1;i>=0;i--)
{
        temp=temp +" "+ word[i]
        
}
console.log(temp)