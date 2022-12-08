// DAY #
// title: Challenge Name 
// status: * or **

// import data given
const fs = require("fs");
const input = fs.readFileSync("./days/7/input.txt","utf-8").toString().replace(/\r/g,"").split("\n");

let instructionData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split('\n')

/* ----PART ONE---- */
function partOne(data){
    // create list of directories
    let sortObj = {}
    for (let command of data){
        if (command.includes('cd') && !command.includes('..')){
            let directory = command.split(' ')[2]
            sortObj[directory] = []
        }
    }
    let countObj = JSON.parse(JSON.stringify(sortObj))
    // sorting the files and dir according to parent
    for (let i=0; i<data.length;i++){
        if (data[i].includes('cd')){
            if (!data[i].includes('..')){
                let directory = data[i].split(' ')[2]
                for (let j=i+2; j<data.length; j++){
                    if (!data[j].includes('$')){
                        sortObj[directory].push(data[j])
                    } else {
                        break;
                    }
                }
            }
        }
    }
    let memoryObj = JSON.parse(JSON.stringify(sortObj))
    // calculate the number of directories
    // var hasOwn = Object.prototype.hasOwnProperty;
    // var count = 0;
    // for (var k in sortObj) if (hasOwn.call(sortObj, k)) ++count
    console.log(countObj);
    // calculate the size of each directory based on num files
    for (const [key, value] of Object.entries(sortObj)) {
        for (let i=0; i<value.length;i++){
            if (/\d/.test(value[i])){
                let num = Number(value[i].split(' ')[0])
                countObj[key].push(num)
            } 
        }
    }
    console.log(countObj);
    // add to parent directories
    for (const [key, value] of Object.entries(memoryObj)) {
        for (let i=0; i<value.length ;i++){
            console.log(value)
            if (value[i].includes('dir')){
                let dir = value[i].split(' ')[1]
                let num = countObj[dir]
                countObj[key].push(num)
            }
        }
    }
    console.log(sortObj, countObj);

    let sumArr = [];
    for (const [key, value] of Object.entries(countObj)){
        let sum = 0;
        for (let i=0; i<value.length; i++) {
            if (!Array.isArray(value[i])){
                sum += value[i]
            } else {
                for (let j=0; j<value[i].length; j++) {
                    sum += value[i][j];
                }
            }
        }
        console.log(key,' :',sum)
        if (sum<100000){
            sumArr.push(sum)
        }
    }
    console.log(sumArr)
    return sumArr.reduce((a, b) => a + b, 0)
}

// test data in instructions
console.log("\n------TESTING, 1------")
console.log(`expected: ${partOne(instructionData)} to equal: 95437`)

// real data run 
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ /*
function partTwo(data){}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionData)} to equal: ??`)
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) */