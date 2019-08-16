//获取学生列表
let fs = require('fs')
exports.find = function  (callback) {
    fs.readFile('./db.json','utf8', (err,data) => {
		if (err) {
			return callback(err)
		}
		 callback(null,JSON.parse(data).students)
		
	});
}

// 添加保存学生
exports.save = function(callback){
   // let Stu = {id,name,class:cl,fraction}
   // let Studetns = exports.findAll()
   // console.log(Studetns)
   // // Studetns = Studetns.push(Stu)
   // Studetns = JSON.stringify(Studetns)
   // fs.writeFile('./db.json',Studetns,(err,data) => {
   // 	// console.log(data)
   // });
   let Studetns = exports.find()
   console.log(Studetns)
}
