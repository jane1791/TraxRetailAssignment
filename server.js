const express = require('express')
const app = express()
const port = 3000

app.get('/whos-there', (req, res) => {
  res.send('Hi Trax! This is Jane')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})