const express = require('express')
require('dotenv').config()


// file import 


const app = express()

// connection DB
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT
const connectDB = require('./db/connect')


const connectDataBase = async () =>{
    try{
        await connectDB(DB_URL)
        console.log('successful connection to the database')
        app.listen(PORT,console.log("server running"))
    }catch(e){
        console.log("error connecting database",e)
    }
}
connectDataBase()

app.set("view engine","ejs")    
