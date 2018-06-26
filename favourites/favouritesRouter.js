const express = require('express');
const router = express.Router();
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {
    const favourites = {
        ales: [
            'Moon Dog Jumping The Shark',
            'Mornington Peninsula Russian Imperial'
        ],
        lagers: [
            'VB',
            'Tiger Beer'
        ]
    }
    res.status(200).json(favourites)
})

module.exports = router