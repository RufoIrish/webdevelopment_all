exports.makeTable = function(file, res) {
    var fs = require("fs");
    var temp = file.split("/")[2] + ".csv";
    var tempclass = temp.split(".csv");
    var content = "";
    var x = false;
    var table = "";
    try {
        var data = fs.readFileSync(temp, 'utf8');
        content = data;
    } catch (e) {
        x = true;
        table = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'>  <meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script><title>Classtable</title></head><style>body{margin-top:50px;margin-right : 50px; margin-left: 50px;text-align : center}table.th{text-align:center}</style><body><h1>List of students enrolled</h1><table style ='border-radius: 10px; padding : 30px;width: 800px; height :20px;margin-left: 24%; background-color :#80e5ff;box-shadow:20px 20px 20px 20px #b3f0ff;'><hr style = 'border: 1px solid darkcyan;'>" + "<h1 style = 'color : #950714; font-family: Times New Roman;'> Cannot find class " + tempclass + "</h1><hr>";

    }
    if (x == false) {
        table =
            "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'>  <meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script><title>Classtable</title></head><style>body{margin-top:50px;margin-right : 50px; margin-left: 50px;text-align : center}table.th{text-align:center}</style><body><h1>List of students enrolled</h1><table style ='border-radius: 10px; padding : 30px;width: 800px; height :20px;margin-left: 24%; background-color :#80e5ff;box-shadow:20px 20px 20px 20px #b3f0ff;'><hr style = 'border: 1px solid darkcyan;'>" +
            "<tr><th style = 'text-align: center; color : #950714; font-family: Times New Roman;'><h4>Name</h4></th><th style = 'text-align: center;color : #950714; font-family: Times New Roman;'><h4>Course</h4></th><th style = 'text-align: center; color : #950714; font-family: Times New Roman;'><h4>Gmail</h4</th></tr></tr>";
        content = content.split(",");
        for (var i = 0; i < content.length; ++i) {
            if (i % 3 == 0) {
                table += ("</tr><tr>");
            }
            table += "<td>" + content[i] + "</td>";
        }
        table += "</tr></table>";

    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(table);
    return res.end();
}