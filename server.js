const { constants } = require('buffer')
const express = require('express')
const app = express()
const port = 3000

let contacts = [{'Jane':'1234'}, {'Dave':'1878788'}, {'Oren':'45435'}, {'Ben':'4308345098345'}]

app.get('/whos-there', (req, res) => {
  res.send('Hi Trax! This is Jane')
})

app.get('/get-all-contacts', (req, res) => {
    res.send(contacts)
  })

app.get('/find-contact/:contactName', (req, res) => {
    let name = req.params.contactName
    contacts.forEach(element => {
        if (Object.keys(element)[0] === name){
            res.send(element)
        }
    })
    res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})