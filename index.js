// Iteration 1: Names & Input

let hacker1 = "Julius Pontificus";
console.log("The driver's name is", hacker1);

let hacker2 = "Nerva Romanicus";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, the person has", hacker1.length, "characters");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names,", hacker1.length ,"characters!");
} else{
    console.log("The navigator has the longest name, the person has", hacker2.length, "characters");
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " "));

// Reverse name

function reverseName(element) {
    let revName =  [...element].reduce((x, y) => y.concat(x));
    console.log(revName);
}

// Function call
reverseName(hacker2);

// Lexicographic order

if (hacker1 > hacker2){
console.log("The driver's name goes first");
} else if(hacker1 === hacker2)
{
console.log("What?! You both have the same name?");
} else {
console.log("Yo, the navigator goes first, definitely");
}