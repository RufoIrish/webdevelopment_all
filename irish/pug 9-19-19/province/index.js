const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
// const router = express.Router();
const request= require('./request');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(function(req,res,next){
    request.NumOfRequest();
    next();
})

app.use(express.static(path.resolve('./public')));

app.get('/provinces/:provinceName', function(req, res) {
    
    fs.readFile("./provinces/" + req.params.provinceName + ".json", function(e, data) {
        if (e) {
            console.log(e);
        }
        var newData = JSON.parse(data);
        res.render('index', {name: req.params.provinceName, image: newData.image[0],image1:newData.image[1],image2:newData.image[2], group: newData.group, population: newData.population, delicacies: newData.delicacies ,history:newData.history,result:newData.result});
    });
    console.log(req.params.provinceName + ".json");
});
app.post('/rate',function(data){
    alert(data);
});
app.listen(process.env.port || 3006);
console.log('Running at Port 3006');