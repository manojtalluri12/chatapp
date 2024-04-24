const express=require('express');
const auth=require('./Auth/Auth.js')
const user=require('./Auth/UserAuth.js')
const todo=require('./Auth/TodoAuth.js')
const cors=require('cors')
const { Dbconnect } = require('./db/db');
const app=express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use('/',auth)
app.use('/',user)
app.use('/',todo)
app.listen(5000,()=>{
    console.log('server starting........');
})
Dbconnect()