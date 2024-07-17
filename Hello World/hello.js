console.log("Hello World")

//console.log(alert("Hey"))

// no document.elementbyid such window objects are not available here like web browser

// DOM related work not required in server side is not available

// require used to import package or file in the current file
const math = require("./math.js")
 // require("./fs")- searches for the current directory with the following system
 
console.log("The value of math is:", math)

// require("fs") - goes to node directory for searching of its functions
const newone = require("fs")
console.log(newone)