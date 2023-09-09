const express = require('express')
const slackController = require('../controllers/slackController')

const router = new express.Router()

router.get('/api', slackController)

module.exports = router
