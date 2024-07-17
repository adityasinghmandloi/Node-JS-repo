const express= require("express")


const app=express()

app.get('/', (req, res)=>{
    return res.send("Hello from Home page");
});

/*app.get('/about', (req, res)=>{
    return res.send("Hello from About page") ;
});*/

app.get('/about', (req, res)=>{
    return res.send("Hello from About page" + " hey "+ req.query.name + " you are " + req.query.page ) ;
});

app.get('/profile', (req, res)=>{
    return res.send("Profile Page");
});


app.listen(8021, ()=> console.log("Server Started"))