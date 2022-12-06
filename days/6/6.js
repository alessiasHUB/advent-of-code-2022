// DAY #6
// title: Tuning Trouble
// status: **

// import data given
const fs = require("fs");
const input = fs.readFileSync("./days/6/input.txt","utf-8").toString().replace(/\r/g,"").split("");

let instructionData = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`.split('')

/* ----PART ONE---- */
function partOne(data){
    const marker = [data[0],data[1],data[2],data[3]]
    for (let i=4; i<data.length; i++){
        if (marker.filter((el, index) => marker.indexOf(el) !== index).length > 0){
            marker.push(data[i])
            marker.shift()
        } else {
            return i
        }
    }
}

// test data in instructions
console.log("\n------TESTING, 1------")
console.log(`expected: ${partOne(instructionData)} to equal: 7`)

// real data run 
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ 

function partTwo(data){
    const marker = []
    for (let i=0; i<=13; i++){
        marker.push(data[i])
    }
    for (let i=14; i<data.length; i++){
        if (marker.filter((el, index) => marker.indexOf(el) !== index).length > 0){
            marker.push(data[i])
            marker.shift()
        } else {
            return i
        }
    }
}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionData)} to equal: 19`) 
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) 