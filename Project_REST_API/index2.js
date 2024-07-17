const express=require("express")
const users=require("./MOCK_DATA.json")
const fs=require("fs")
const app=express()
const PORT=4523
const mongoose= require("mongoose")

// CONNECTION WITH THE MONGOOSE

mongoose
    .connect('mongodb://127.0.0.1:27017/node-js-connect-mongodb')
    .then(()=> console.log(" Mongo DB Connected"))
    .catch((err)=> console.log("Mongo error", err))

// SCHEMA

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        //required: true
        type: String,
    },
    gender: {
        type: String,
    }
})

const User = mongoose.model("user", userSchema)

// Middleware - Plugin
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.use((req, res, next) =>{
    fs.appendFile(
        "log.txt",
        `\n ${Date.now()}: ${req.ip} ${req.method} ${req.path}`,
        (err, data)=>{
            next();
        }
    )
})

app.use((req, res, next) =>{
    console.log(" Hello from middleware 1")
    req.myUserName ="adityasinghmandloi.dev"
    //return res.json({mgs: " Hello from the middleware 1"})
    next()
})

app.use((req, res, next)=>{
    console.log(" Hello from middleware 2", req.myUserName)
    //return res.json({mgs: " Hello from the middleware 2"})
    //return res.end(" Hey !!!")
    next()
})




//ROUTES

app.get("/users", (req, res) =>{
    const html =`
    <ul>${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
    </ul>`;
    res.send(html)
})



//REST API
app.get("/api/users", (req, res)=> {
    console.log(req.headers)
    console.log(" I am in the get route ", req.myUserName)
    res.setHeader("X-myName", "Custom Header") // CUSTOM Header
    // Good practice : always add or append X to the custom header
    return res.json(users)
})

/*app.get("/api/users/:id", (req, res) => {
    const id =Number(req.params.id)
    const user=users.find((user) => user.id === id)
    return res.json(user)
})*/

/*app.post("/api/users", (req, res) => {
    // Todo: Create new user
    return res.json({status: "pending"})
})*/

/*app.patch("/api/users/:id", (req, res) => {
    // Todo: Edit the user with id
    return res.json({status: "pending"})
})

app.delete("/api/users/:id", (req, res) => {
    // Todo: Delete the user with id
    return res.json({status: "pending"})
})*/



// GROUPING 

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id =Number(req.params.id)
        const user=users.find((user) => user.id === id)
        if(!user) return res.status(404).json({error: " user not found"})
        return res.json(user)
    })
    .patch((req, res) => {
        // Todo: Edit the user with id
        return res.json({status: "pending"})
    })
    .delete((req, res) => {
        // Todo: Delete the user with id
        return res.json({status: "pending"})
    })


app.post("/api/users", (req, res) => {
    // Todo: Create new user
    const body=req.body
    console.log("Body :", body)
    if(!body || !body.first_name || !body.last_name|| !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: "All fields are req..."})
    }
    users.push({...body, id: users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({status: " success ", id: users.length })
    })
    //return res.json({status: "pending"})
})

app.listen(PORT, ()=> console.log(`Server started at the port no. ${PORT}`))