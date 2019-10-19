exports.addStudent = function(student, res) {
    var fs = require('fs');
    student = JSON.parse(student);
    var temp = (student.Class).split(" ").join("-");
    fs.appendFile(temp + '.csv', student.name + "," + student.course + "," + student.gmail + ",", function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.end(student.name + " is successfully added to class " + student.Class);
};