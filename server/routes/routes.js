const Router = require('express')
const router = new Router()

const {Guest} = require('../models/models')

router.get('/emptyRooms', async (req, res) => {
    const guests = await Guest.findAll()
    res.json({guests})
})

module.exports = router