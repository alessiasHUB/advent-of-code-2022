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
    // sorting the files and dir according to parent
    for (let i=0; i<data.length;i++){
        if (data[i].includes('cd')){
            if (!data[i].includes('..')){
                let directory = data[i].split(' ')[2]
                for (let j=i+2; j<data.length; j++){
                    if (!data[j].includes('$')){
                        console.log(data[j], directory)
                        sortObj[directory].push(data[j])
                    } else {
                        break;
                    }
                }
            }
        }
    }
    console.log(sortObj)
    // calculate the size of each directory
    
}

// test data in instructions
console.log("\n------TESTING, 1------")
console.log(`expected: ${partOne(instructionData)} to equal: 95437`)

// real data run 
/*
console.log("\n------PART ONE------")
console.log(`result: ${partOne(input)}`)

/* ----PART TWO---- */ /*
function partTwo(data){}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionData)} to equal: ??`)
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) */