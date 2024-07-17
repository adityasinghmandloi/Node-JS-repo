const express= require("express")

const router = express.Router()

const {
    handleGetAllUsers, 
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require('../controllers/user')

//ROUTES

/*router.get("/", async (req, res) =>{
    const allDBusers = await User.find({})
    const html =`
    <ul>${allDBusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join(" ")}
    </ul>`;
    res.send(html)
})*/



//REST API

router.get("/", handleGetAllUsers)

router.get("/", async (req, res)=> {

    const allDBusers = await User.find({})

    console.log(req.headers)
    console.log(" I am in the get route ", req.myUserName)
    res.setHeader("X-myName", "Custom Header") // CUSTOM Header
    // Good practice : always add or append X to the custom header
    //return res.json(users)
    return res.json(allDBusers)
})


// GROUPING 

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)

router
    .route("/:id")
    /*get(/*async(req, res) => {
        const user = await User.findById(req.params.id)
        const id =Number(req.params.id)
        //const user=users.find((user) => user.id === id)
        if(!user) return res.status(404).json({error: " user not found"})
        return res.json(user)
    })*/
    .get(handleGetUserById)

    /*.patch(/*async(req, res) => {
        await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
        return res.json({status: "Success"})
        // Todo: Edit the user with id
        //return res.json({status: "pending"})
    })*/
    .patch(handleUpdateUserById)
    /*.delete( async(req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.json({status: "Success"})
        // Todo: Delete the user with id
        //return res.json({status: "pending"})
    })*/
    .delete(handleDeleteUserById)


    /*router.post("/", async (req, res) => {
    // Todo: Create new user
    const body=req.body
    console.log("Body :", body)
    if(!body || !body.first_name || !body.last_name|| !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: "All fields are req..."})
    }
    /*users.push({...body, id: users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({status: " success ", id: users.length })
    })*/
    //return res.json({status: "pending"})*/
    /*const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log("result", result)

    return res.status(201).json({msg: "success", id: result._id})*/


//})
router.post("/", handleCreateNewUser)


module.exports=router;