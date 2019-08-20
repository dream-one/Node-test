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

router.post('/add',(req,res) => {
   student.save(req.body,function(err,students){
   	  if (err) { return res.status(500).send('Server error') }
   })
      res.redirect('/')
   
})

router.get('/edit',(req,res) => {
	student.edit(parseInt(req.query.id),function(err,Stu){
			res.render('edit.html',{
                student:Stu
	})
	})

})

router.post('/edit',(req,res) => {
	student.updata(req.body,function(err){
        if (err) {return res.status(500).send('Server error')}
	})
        	 res.redirect('/')
})
router.get('/del',(req,res) => {
	console.log(req.query.id)
	student.del(req.query.id,function(err){
        if (err) {return res.status(500).send('Server error')}
	})
        	 res.redirect('/')
})

module.exports = router