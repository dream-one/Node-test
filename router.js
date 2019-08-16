var express = require('express')
var fs = require('fs')
var student = require('./Students.js')
var router = express.Router()
router.get('/',(req,res) => {
	// let students = fs.readFile('./db.json', (err,data) => {
	// 	if (err) {
	// 		return console.log('shibao')
	// 	}
	// 	// console.log(data.toString())
	// 	res.render('index.html',{
	// 		students: JSON.parse(data).students
	// 	})
	// });
      student.save()
	student.find(function(err,students){
       if (err) {
         return res.status(500).send(('Server error'))
          }
   res.render('index.html',{
   	students
   })
	})
})

router.get('/add',(req,res) => {
	let students = fs.readFile('./db.json', (err,data) => {
		if (err) {
			return console.log('shibao')
		}
		// console.log(data.toString())
		res.render('add.html',{
			students: JSON.parse(data).students
		})
	});
})

router.post('/',(req,res) => {

   if(!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body);

    	let students = fs.readFile('./db.json', (err,data) => {
		if (err) {
			return console.log('shibao')
		}
		// console.log(data.toString())
		res.render('index.html',{
			students: JSON.parse(data).students
		})
	});
})



module.exports = router