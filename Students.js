//获取学生列表
let fs = require('fs')
exports.find = function(callback) {
    fs.readFile('./db.json','utf8', (err,data) => {
		if (err) {
			return callback(err)
		}
		
		 callback(null,JSON.parse(data).students)
		
	});
}



// 添加保存学生
exports.save = function(student,callback){

  exports.find(function(err,students){
  	if (err) {return callback(err)}
  		if (students.length==0) {
  			student.id = 1
  		}else {
  			student.id = students[students.length-1].id+1
  		}
        students.push(student)
         fs.writeFile('./db.json',  JSON.stringify({students}),(err,data) => {
         	if (err) {callback(err)}

         });

  })
   
}

//编辑页面 
exports.edit = function(id,callback){
	exports.find(function(err,students){
		if (err) {return callback(err)}
			id = parseInt(id)
			Stu = students.find(item =>{
				return item.id == id
			})
            callback(null,Stu)
	})
}

//更新
exports.updata = function(student,callback){
	exports.find(function(err,students){
       if (err) {return callback(err)}
       student.id = parseInt(student.id)
        let Stu = students.find(item => {
       		return item.id == parseInt(student.id)
       	})
       for(pro in student){
       	Stu[pro] = student[pro]
       }
       console.log(Stu)
        fs.writeFile('./db.json',  JSON.stringify({students}),(err,data) => {
         	if (err) {callback(err)}

         });
	})
}

//删除
exports.del = function(id,callback){
	exports.find(function(err,students){
		if (err) {return callback(err)}

         students.forEach((item,index,arr)=>{
         	if (item.id == id) {
                  students.splice(index,1)
                 
         	}
         })
       fs.writeFile('./db.json',  JSON.stringify({students}),(err,data) => {
         	if (err) {callback(err)}

         });
	})
}