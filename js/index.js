// Iteration 1: Names and Input
let hacker1 = `Callie`
console.log(hacker1) //Callie
console.log(`The driver's name is ${hacker1}.`)
//The driver's name is ${hacker1}
let hacker2 = "Doles"
console.log(`The navigator is ${hacker2}.`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) 
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
}


// Iteration 3: Loops
let uppercased = hacker1.toUpperCase();
let seperate = uppercased.split('')
console.log(seperate)
