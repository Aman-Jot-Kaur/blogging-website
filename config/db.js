const mongoose = require('mongoose');
const colors = require('colors')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongodb".bgMagenta.white);
    }
    catch (error) {
        console.log(' mongo db connection error '.bgRed.white)
    }
}
module.exports = connectDB;