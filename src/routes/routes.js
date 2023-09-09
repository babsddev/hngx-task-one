const express = require('express')
const router = express.Router()
const { getResponse } = require('../controllers/controller')

router.get('/api', getResponse)

module.exports = router
