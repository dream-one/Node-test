const express = require('express')
var router = require('./router')
var bodyParser = require('body-parser');
let app = express()
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
let port = 3000
app.engine('html',require('express-art-template'))
             app.use(express.static('./public/'))
app.use(router)
     app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
// 解析 application/json

app.listen(port,() => {
	console.log('sserver is running...')
})