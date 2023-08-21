const express = require('express');
const user = require('../controller/userauthinformation')
const userrouter = express.Router()

// create/add user to database
userrouter.post('/',user.createuser)
userrouter.post('/login',user.verifyuser)


exports.userrouter = userrouter