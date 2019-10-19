// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response) {
//   var student = "";
//   request.on('data',function(data) {
//      student = data;
//   });
//   request.on('end',function() {
//     student = JSON.parse(student);
//     fs.appendFile(student.Subject+'.txt', student.Name , function (err) {
//       if (err) throw err;
//       console.log(student);
//     });
//     response.end(student);
//   });
  
// }).listen(8080);
var http = require("http");
var fs = require('fs');
http.createServer(function (request, response) {
    var store = '';
    request.on('data', function(data) 
    {
        store += data;
    });
    request.on('end', function() 
    {  
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*");
        store = JSON.parse(store);
        var content = "";
        try {
            var data = fs.readFileSync(store.Class+'.txt', 'utf8');
            content += data.toLowerCase();
        } catch(e) {
            console.log('Error:', e.stack);
        }
        console.log(content);
        var resmsg = "alreadyExisted";
        if (content.includes(store.name.toLowerCase()) == false) {
            resmsg = "successful";
            fs.appendFile(store.Class+'.txt', store.name+'\n', function (err) {
              if (err) throw err;
              console.log(store);
            });
        }
        response.end(resmsg); 
       
    });
 }).listen(8080);