const express=require('express')
const { signup, login, all } = require('../Controllers/AuthController')
const { middleware } = require('../Middleware/Middleware')
const router=express.Router()
router.post('/signup',signup)
router.post('/login',login)
router.get('/all',middleware,all)
module.exports=router