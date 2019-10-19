const fs = require('fs');
exports.NumOfRequest = function () {
    fs.readFile('request.txt',function(err,data){
        console.log("irish");
        if(err) throw err;
         var dataNew = data *1;
        dataNew++;
        console.log(dataNew);
        fs.writeFile('request.txt',dataNew, function(err){
            if (err) throw err;
            console.log('saved!');
        });
    });    
  };