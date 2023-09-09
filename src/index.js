const express = require('express')

const app = require('./app')
const slackRoute = require('./routes/slackRoute')

const port = process.env.PORT || 3010

app.use('/', slackRoute)

app.listen(port, async () => {
  console.log(`Server is connected, listening on port ${port}`)
})
