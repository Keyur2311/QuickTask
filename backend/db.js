const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://patelkeyur2311:keyur2311@cluster0.ofqvuop.mongodb.net/quicktask?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;