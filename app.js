// ***** to vreify the version of npm(node package manager) ******//
// npm --version

// ******** to install package(npm) ********

// install packege as local dependency that means can be use only in a particular project 
// command : npm i <packageName>

// instaall package as global dependency that means can b use in any project 
// command : npm install -g <packagename>

// package.json : for storing important info about our project/package
// manual approch for creating package.json (create package.json in the root create properties etc)
//command : npm init (step by step, press enter to skip)
// command :npm init -y (everything default)

// test of lodash package

const _ = require("lodash")
const arr = [2,[4,[5,[6]]]]
console.log(_.flattenDeep(arr))
