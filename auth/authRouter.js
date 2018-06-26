const express = require('express');
const router = express.Router();
const auth = require('./util');

router.post('/login', (req, res) => {

    // authenticate user {HINT: use body-parser}
    const {email, password} = req.body
    
    if (!auth.isAuthenticUser(email, password)) {
        throw new Error('Incorrect email or password')
        return;
    }
    // generate token only if user is authenticated
    const token = {
        token: '007'
    }
    res.status(200).json(token)
})

module.exports = router