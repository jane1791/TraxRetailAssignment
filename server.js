const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let contacts = [{ 'Jane': '1234' }, { 'Dave': '1878788' }, { 'Oren': '45435' }, { 'Ben': '4308345098345' }]

// GET greeting function
app.get('/whos-there', function (req, res) {
    res.send('Hi Trax! This is Jane')
})

// GET function to return all contacts 
app.get('/get-all-contacts', function (req, res) {
    res.status(200).send(JSON.stringify(contacts))
})

// GET function to return specific contact by its name or a message if the contact does not exist
app.get('/find-contact/:contactName', function (req, res) {
    let name = req.params.contactName
    let result;
    contacts.forEach(element, function (){
        if (Object.keys(element)[0] === name){
            result = element;
        }
    })
    if (!result){
        res.status(404).send('This contact does not exists!')
    } else {
        res.status(200).send(result).end()
    }
  })


// POST function to add a new contact item to the array
app.post('/add-contact', function (req, res) {
        let contactDetails = { [req.body.name]: req.body.phone }
        contacts.push(contactDetails)
        res.send('Contact was added successfully!')
})

app.listen(port, function () {
        console.log(`Listening at http://localhost:${port}`)
})

    module.exports = app;