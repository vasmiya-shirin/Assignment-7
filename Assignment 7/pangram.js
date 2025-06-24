//5. Write a program to check if a given sentence is a pangram (contains every letter from A-Z).
let sentence=prompt("Enter a string")
console.log(sentence)
sentence=sentence.toUpperCase()
const alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let temp=""

for(let i=0;i<alphabets.length;i++){
    for(let y=0;y<sentence.length;y++){
        if(sentence[y]== alphabets[i]){
          temp+=sentence[y]
          break
        }
    }
}
if(temp=== alphabets){
    console.log("it is a pangram" )
}
else{
    console.log("not a pangram")
}