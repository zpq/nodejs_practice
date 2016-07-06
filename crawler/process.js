var fs = require("fs");
var uuid = require('node-uuid');

var dir_path = "F:\\imgs\\nodejs";

fs.readdir(dir_path, function(err, files) {
    
    if (err) {
        console.error(err)
    } else {
        files.forEach(function(file) {

            fs.renameSync(dir_path + "\\" +file, dir_path + "\\" + uuid.v1() + ".jpg");
        })
    }
    
});