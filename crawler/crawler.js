var cheerio = require("cheerio");
var http = require("http");
var fs = require("fs");
var uuid = require('node-uuid');

//var url = "http://sports.btime.com/others/20160610/n206752.shtml";
// var url = "http://tieba.baidu.com/p/4608122171";

var prefix = "http://www.yixiuba.com/BEAUTYLEGtuimo/2016/7160";
var url;

var range = process.argv[2] || 1;

for (var i = 1;i <= range; i++) {
	if (i == 1) {
		url = prefix + ".html"; 
	} else {
		url = prefix + "_"+ i +".html"; 
	}
	
	http.get(url, function(res) {
		var html = '';
		res.on("data", function(data) {
			html += data;
		});

		res.on("end", function() {
			$ = cheerio.load(html);
			var imgs = $("img");
			// console.log(imgs);
			for (var i = 0; i < imgs.length; i++) {
				// console.log(imgs.eq(i).attr("src"));
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
			var tmp = imgurl.split("/");
			var filename = tmp[tmp.length-1];
			tmp = filename.split("?");
			filename = tmp[0];
			// console.log(filename);
			// filename = uuid.v1() + ".jpg";
			fs.writeFile("F:/imgs/nodejs/" + filename, imgData, "binary", function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log(filename);
				}
			});
		});

	});
};
