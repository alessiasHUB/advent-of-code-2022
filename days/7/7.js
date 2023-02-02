// DAY #7
// title: No Space Left On Device
// status: * or **

// import data given
const fs = require("fs");
const input = fs
  .readFileSync("./days/7/input.txt", "utf-8")
  .toString()
  .replace(/\r/g, "")
  .split("\n");
const instructionData = `$ cd /
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
7214296 k`.split("\n");

/* ----PART ONE---- */
/*------my function------*/
function partOne(input) {
  let lines = input;
  const folders = {};
  //-------------------------------store all the folder names
  lines.filter((el) => {
    if (el.includes("$ cd")) {
      let dir = el.split(" ")[2];
      if (dir !== "..") {
        folders[dir] = [];
      }
    }
  });
  //-------------------------------sort files (& sub-folders) to their folders
  for (let i = 2; i < lines.length; i++) {
    if (lines[i - 1].includes("ls")) {
      let dir = lines[i - 2].split(" ")[2];
      for (let j = i; j < lines.length; j++) {
        if (lines[j].includes("dir")) {
          let value = lines[j].split(" ")[1];
          folders[dir].push(value);
        } else if (lines[j].includes("$")) {
          break;
        } else {
          let value = Number(lines[j].split(" ")[0]);
          folders[dir].push(value);
        }
        i++;
      }
    }
  }
  //-------------------------------get size of each folder (recursion)
  function replaceStrings(obj, key) {
    if (!key) {
      let keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        replaceStrings(obj, keys[i]);
      }
    } else {
      for (let i = 0; i < obj[key].length; i++) {
        let value = obj[key][i];
        if (typeof value === "string") {
          obj[key].splice(i, 1, ...obj[value]);
          return replaceStrings(obj, key);
        }
      }
    }
    return obj;
  }
  let result = replaceStrings(folders);
  //-------------------------------sum all the files for each folder
  function sumArrays(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      obj[key] = obj[key].reduce((sum, value) => sum + value, 0);
    }
    return obj;
  }
  let summedResult = sumArrays(result);
  //-------------------------------sum all the folders less than 10'000
  let sum = 0;
  for (let key in summedResult) {
    if (summedResult[key] <= 100000) {
      sum += summedResult[key];
    }
  }
  return sum;
}

// test data in instructions
console.log("\n------TESTING, 1------");
console.log(`expected: ${partOne(instructionData)} to equal: 95437`);

// real data run
console.log("\n------PART ONE------");
console.log(`result: ${partOne(input)}`); /*

/* ----PART TWO---- */ /*
function partTwo(data){}

console.log("\n------TESTING, 2------")
console.log(`expected: ${partTwo(instructionData)} to equal: ??`)
console.log("\n------PART TWO------")
console.log(`result: ${partTwo(input)}`) */
