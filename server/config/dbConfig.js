
// const mongoose = require('mongoose');

// mongoose.connect(process.env.mongo_url)

// const connectionResult = mongoose.connection;
// mongoose.set(`strictQuery`, false);

// connectionResult.on('error' , ()=>{
//     console.log('error connecting to database');
// });
// connectionResult.on('connected' , ()=>{
//     console.log('connected to database');
// });

const mongoose = require('mongoose')
const UserModel = require('./dbConfig')
const dotenv = require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL
console.log(MONGO_URL)

const connect = async ()=>{
    
    const con = await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Sheywallet-007"
    })
}

mongoose.connection.once('open',()=>{
    console.log("Connection Ready!")
})

mongoose.connection.on('error', (err)=>{
    console.error(err)
})

connect()

module.exports = UserModel.connect