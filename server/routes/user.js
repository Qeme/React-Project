// call the express router
const express = require('express');
const router = express.Router()

// import the functions from the controller
const {
    signupUser,
    loginUser
} = require('../controllers/userController')


// put the router API for post('/api/user/signup') 
router.post('/signup',signupUser)

// put the router API for post('/api/user/login')
router.post('/login',loginUser)

// export the router to be used inside index.js
module.exports = router