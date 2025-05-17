const obj = {
    "a":1,
    "b":2,
    "c":3
}

for (key in obj){
    console.log(obj[key]);
    if(obj[key] == 2){
        console.log("This is number 2");
    }
}


//Utilizing an object to find the first repeated character in a string
let obj2 = {}

const str1 = "aATheTphe"
for(let i =0; i<=str1.length - 1; i++){
       
       if(obj2[str1[i]] == 1){
        console.log("First repeated char found: "+ str1[i])
        break;
       }
       obj2[str1[i]] =1
}

console.log(obj2)

for(char in str1){
    console.log("This is for in on a string: "+ char)
}

for(let i = 0; i< str1.length; i++){
    console.log("This is a normal for loop: "+str1[i])
}

for(let val of str1){
    console.log("This is iterating through the values of a hashmap: "+val)
}