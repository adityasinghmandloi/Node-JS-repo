const fs=require("fs")
const os=require("os")

console.log("Maximum Thread size can be -", os.cpus().length)

console.log("1")
// ===================BLOCKING SEQUENCE=====================
const result=fs.readFileSync("./contacts.txt", "utf-8")
// ==================NON-BLOCKING SEQUENCE==================
fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    console.log(result)
});
console.log(result)

console.log("2")

// Default Thread pool size = 4
// Maximum Thread? = 8core vcpu->8