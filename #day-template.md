// DAY #
// title: Challenge Name 
// status: * or **

import data from "./data"

/* ----PART ONE---- */
function nameOne(list){}

// data given
let data = ``

// convert data to string array
function convertData(data){
    return data.split('\n')
}

// test data in instructions
let instructionData = ``
list = convertData(instructionData)
console.log("\n------TESTING------")
console.log(`expected to be: ${nameOne(list)} equal to: ???`)

// real data run
list = convertData(data)
console.log("\n------PART ONE------")
console.log(`result: ${nameOne(list)}`)

/* ----PART TWO---- */
function nameTwo(){}

console.log("\n------PART TWO------")
console.log(`result: ${nameTwo(list)}`)