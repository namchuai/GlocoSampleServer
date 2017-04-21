var express = require('express')
var http = require('http')
var fs = require('fs')
var app = express()

app.get('/', function (req, res) {
  res.send('Welcome, Nam!')
})

app.get('/doctors', function (req, res) {
   fs.readFile("doctors.json", 'utf8', function (err, data) {
       res.end(data);
   });
})


app.listen(process.env.PORT || 3000, function () {
  console.log('listening on 3000');
})
