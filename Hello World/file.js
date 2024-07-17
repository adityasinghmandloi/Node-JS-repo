const fs=require("fs")

// Synchronous call
//fs.writeFileSync('./test.txt', "Hey there this is Synchrtonous call")

// Asynchronous call
//fs.writeFile("./test.txt", "Hey there this is Asynchronous call", (err)=>{})


//Synchronous call
/*const result= fs.readFileSync("./contacts.txt", "utf-8")
console.log(result)*/

//Asynchronous call
/*fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("Error", err)
    }
    else{
        console.log(result)
    }
});*/

/*========In the synchronous task it return the result directly ============*/
/*==========While in asynchronous task it expects a callback function with an error and result in it & doesn't return anything ========== */ 


// Blocking and Non-Blocking Request tasks

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`)

fs.cpSync('./test.txt', './copy.txt')

//fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt").isFile())

fs.mkdirSync("my-docs/a/b", {recursive: true})