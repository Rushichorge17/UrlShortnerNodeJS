const mongoose = require('mongoose');
mongoose.set("strictQuery",true)

// Connect to MongoDB
 
async function connectToMongoDB(url) {
    return mongoose.connect(url)
}

module.exports={
    connectToMongoDB
}