// DAY #5
// title: Supply Stacks
// status: **

// import data given
const fs = require("fs");
const input = fs.readFileSync("./days/5/input.txt","utf-8").toString().replace(/\r/g,"").split("\n");

let instructionData = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`
let instructionList = convertData(instructionData)

/* ----PART ONE---- */
function partOne(data){
    let originStack = data.filter(el => /[A-Z]/.test(el))
    let instructions = data.filter(el => !/[A-Z]/.test(el)).slice(2)
    const result = []

    for (let i=1; i<originStack[0].length; i+=4){
        result.push([])
    }
    
    for (let stack of originStack){
        let count = 0
        for (let i=1; i<originStack[0].length; i+=4){
            if (/[A-Z]/.test(stack[i])){
                let box = stack[i]
                result[count].push(box)
            } 
            count ++
        }
    }
    const instrucFormat = {
        move:0,
        from:0,
        to:0,
    }
    for (let lines of instructions){
        let line = lines.split(' ')
        instrucFormat['move'] = Number(line[1])
        instrucFormat['from'] = (Number(line[3])-1)
        instrucFormat['to'] = Number(line[5])-1
        count = Number(line[1])
        for (let i=0; i<count; i++){
            result[instrucFormat['to']].unshift(result[instrucFormat['from']].slice(0,1).join(''))
            result[instrucFormat['from']].splice(0,1)
        }
    }
    const topBoxes = []
    for (let stack of result){
        topBoxes.push(stack[0])
    }
    return topBoxes.join('')
}

// convert data to string array
function convertData(data){
    return data.split('\n')
}

// test data in instructions
console.log("\n------TESTING, 1------")
console.log(`expected: ${partOne(instructionList)} to equal: CMZ`)

// real data run 
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ 
function partTwo(data){

    let originStack = data.filter(el => /[A-Z]/.test(el))
    let instructions = data.filter(el => !/[A-Z]/.test(el)).slice(2)
    const result = []
    
    for (let i=1; i<originStack[0].length; i+=4){
        result.push([])
    }
    
    for (let stack of originStack){
        let count = 0
        for (let i=1; i<originStack[0].length; i+=4){
            if (/[A-Z]/.test(stack[i])){
                let box = stack[i]
                result[count].push(box)
            } 
            count ++
        }
    }
    const instrucFormat = {
        move:0,
        from:0,
        to:0,
    }
    for (let lines of instructions){
        let line = lines.split(' ')
        instrucFormat['move'] = Number(line[1])
        instrucFormat['from'] = (Number(line[3])-1)
        instrucFormat['to'] = Number(line[5])-1
        count = Number(line[1])
        let lilArr = []
        for (let i=0; i<count; i++){
            lilArr.unshift(result[instrucFormat['from']].slice(0,1).join(''))
            // result[instrucFormat['to']].unshift(result[instrucFormat['from']].slice(0,1).join(''))
            result[instrucFormat['from']].splice(0,1)
        }
        for (let el of lilArr){
            result[instrucFormat['to']].unshift(el)
        }
    }
    const topBoxes = []
    for (let stack of result){
        topBoxes.push(stack[0])
    }
    return topBoxes.join('')

}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionList)} to equal: MCD`) 
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) 