// DAY #6
// title:  
// status: 

// import data given
const fs = require("fs");
const input = fs.readFileSync("./days/5/input.txt","utf-8").toString().replace(/\r/g,"").split("\n");

let instructionData = ``
let instructionList = convertData(instructionData)

/* ----PART ONE---- */
function partOne(data){}

// convert data to string array
function convertData(data){
    return data.split('\n')
}

// test data in instructions
console.log("\n------TESTING, 1------")
console.log(`expected: ${partOne(instructionList)} to equal: 2`)

// real data run 
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ 
function partTwo(data){}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionList)} to equal: 4`)
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) 