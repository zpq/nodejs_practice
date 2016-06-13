var cheerio = require("cheerio");
var http = require("http");
var fs = require("fs");

var url = "http://sports.btime.com/others/20160610/n206752.shtml";

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
			// console.log(filename);
			fs.writeFile("./imgs/" + filename, imgData, "binary", function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log(filename);
				}
			});
		});

	});
};
