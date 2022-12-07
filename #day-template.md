// DAY #
// title: Challenge Name 
// status: * or **

// import data given
const fs = require("fs");
const input = fs.readFileSync("./days/#/input.txt","utf-8").toString().replace(/\r/g,"").split("\n");

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
console.log(`expected: ${partOne(instructionList)} to equal: ??`)

// real data run 
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ 
function partTwo(data){}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionList)} to equal: ??`)
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) 