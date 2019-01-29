var cheerio = require("cheerio");
var http = require("http");
var fs = require("fs");
var path = require('path');

//var url = "http://sports.btime.com/others/20160610/n206752.shtml";
// var url = "http://tieba.baidu.com/p/4608122171";
//test
var prefix = "http://www.yixiuba.com/BEAUTYLEGtuimo/2016/7160";
prefix = "http://sports.btime.com/others/20160610/n206752.shtml";
var dir = __dirname + "\\imgs\\";
console.log(dir)
var url;
var range = process.argv[2] || 10;

for (var i = 1; i <= range; i++) {
	// if (i == 1) {
	// 	url = prefix + ".html"; 
	// } else {
	// 	url = prefix + "_" + i + ".html"; 
	// }
	url = prefix
	http.get(url, function(res) {
		var html = '';
		res.on("data", function(data) {
			html += data;
		});

		res.on("end", function() {
			$ = cheerio.load(html);
			var imgs = $("img");
			for (var i = 0; i < imgs.length; i++) {
				download(imgs.eq(i).attr("src"));
			};
		});
	});
}


function download(imgurl) {
	http.get(imgurl, function(res){
		res.setEncoding("binary");
		var imgData = "";
		res.on("data", function(chunk) {
			imgData += chunk
		});

		res.on("end", function(){
			var tmp = imgurl.split("?");
			var filename = tmp[0];
			tmp = filename.split("/");
			filename = tmp[tmp.length - 1];

			fs.writeFile(dir + filename, imgData, "binary", function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log(filename);
				}
			});
		});

	});
};
