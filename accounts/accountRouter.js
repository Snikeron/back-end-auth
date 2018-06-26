const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {
    
    // if Token correct send user data
    
    // Example Hardcoded User 
    // (you would import a model to fetch something from DB)
    const user = {
        id: 1,
        email: 'test1@mail.com',
        favourites: [
            'Mountain Oak',
            'One Fifty Lashes',
            'Hoegaarden'
        ]
    }
    res.status(200).json(user)
})

module.exports = router