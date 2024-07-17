const http=require("http");
const fs=require("fs");
const url=require("url");

// makes web server for us - then for taking the incoming request we'll use a callback function  REQUESTLISTENER
const myServer=http.createServer((req, res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}: ${req.url} New Request received\n`;
    const myUrl=url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data)=>{
        //res.end("Hello from server again")
        switch(myUrl.pathname){
            case "/":
                res.end("Homepage")
                break
            case "/about":
                const username=myUrl.query.myname;
                res.end(`Hi, ${username}`)
                //res.end("I am Aditya")
                break
            case"/search":
                const search=myUrl.query.search_query;
                res.end("Here are your results for the search" + search)
                break
            default:
                res.end("404 Not Found")
        }
        /*switch(req.url){
            case "/":
                res.end("Homepage")
                break
            case "/about":
                res.end("I am Aditya")
                break
            default:
                res.end("404 Not Found")
        }*/
    });
    //console.log("New Request received.")
    //console.log(req.headers)
    //console.log(req)
    //res.end("Hello from server again")
});

myServer.listen(8030, () => console.log("Server Started"))