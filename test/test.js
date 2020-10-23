require('../server.js');
var expect = require('chai').expect;
var request = require('request');

let contacts = [{"Jane": "1234"}, {"Dave": "1878788"}, {"Oren": "45435"}, {"Ben": "4308345098345"}]
describe('Basic GET POST tests', function () {
    it('should GET the greeting and return a string', function() {
      request.get('http://localhost:3000/whos-there', function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal('Hi Trax! This is Jane') 
    });
    })
  
    it('Should GET all contacts', function () {
      request.get('http://localhost:3000/get-all-contacts', function(err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal(JSON.stringify(contacts));
      });
    });

    it('Should GET a non existing contact by name', function(){
        request.get('http://localhost:3000/find-contact/Guy', function(err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.equal('This contact does not exists!');
        });
    });

    it('Should GET an existing contact by name', function(){
        request.get('http://localhost:3000/find-contact/Ben'), function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal({"Ben": "4308345098345"})
        }
    })

    it('Should POST a new contact', function(){
        request.post('http://localhost:3000/add-contact', 
        {json: {'contactName': 'Gilad', 'phoneNumber': '8787878'}}, function(err, res){
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('Contact was added successfully!')
        })
    })
  });