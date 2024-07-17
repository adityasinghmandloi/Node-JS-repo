const mongoose= require("mongoose")
mongoose.set("strictQuery", true)
async function connectMongoDb(url) {
    return mongoose
    .connect(url)
}

//connectMongoDb("mongodb://127.0.0.1:27017/node-js-connect-mongodb")

module.exports = {
    connectMongoDb,
}