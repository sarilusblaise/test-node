const {readFile, writeFile} = require("fs");

console.log("start")
readFile("content-1.txt", "utf8", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const text1 = result
    readFile("content-2.txt","utf8", (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const text2 = result
        writeFile("content-3.txt",`here is the result : ${text1}, ${text2}`, (err, result)=>{
            console.log("done with the task")
        })
    })
})
console.log("starting new task")