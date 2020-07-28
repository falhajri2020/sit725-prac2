var express = require('express');
const { restart } = require('nodemon');
var app = express()
let accounts = [
    { id: 1, name: 'alex', deposit: 5 },
    { id: 2, name: 'sarah', deposit: 5 },
    { id: 3, name: 'jim', deposit: 15 }
]

app.get('/', function(req, res) {
    res.send('hello world')
})
app.use(express.static(__dirname + '/public'))
var adder = function(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sub = function(num1, num2) {
    var result = num1 - num2;
    return result;
}
app.get('/test', function(req, res) {
    var username = req.query.username;
    console.log('Ye I\'ve been hit by ' + username);
    res.send('Hello you hit me! ' + username);
})
app.get('/adder', function(req, res) {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = adder(num1, num2);
    res.send('The result is: ' + result);
})

app.get('/sub', function(req, res) {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = sub(num1, num2);
    res.send('The result is: ' + result);
})
app.get('/AcHolders', function(req, res) {
    res.send(accounts);
})

var port = 3000;
app.listen(port)
console.log('Server listerning on : ' + port)