const express = require('express')
const app = express()
const routes = require('./src/routes/routes')

app.use(routes)

const port = process.env.PORT || 3010

app.listen(port, () => {
  console.log(`Server is connected, listening on port ${port}`)
})
