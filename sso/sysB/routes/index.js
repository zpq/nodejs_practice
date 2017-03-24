var express = require('express');
var http = require("http");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express A' });
});

router.get('/protect', function(req, res, next) {
  console.log("cookies=", req.cookies)
  if (req.cookies.jwtSSO) {
    http.get("http://my.sso.com/validate?jwt=" + req.cookies.jwtSSO + "&redirectUrl=http://systemB.com/protect&remote=http://systemB.com", (res2) => {
      if (res2.statusCode == 200) {
        res.end("you are authed at " + req.hostname);
      } else {
        console.log("not 200")
        res.redirect("http://my.sso.com/login?redirectUrl=http://systemB.com/protect&remote=http://systemB.com")
      }
    });
  } else {
    console.log("no jwt cookie")
    res.redirect("http://my.sso.com/login?redirectUrl=http://systemB.com/protect&remote=http://systemB.com")
  }
});

router.get('/attach', function(req, res, next) {
  let redirectUrl = req.query.redirectUrl;
  let token = req.query.jwt;
  // console.log("receive token from server: "+ token)
  http.get("http://my.sso.com/validate?jwt=" + token + "&redirectUrl=http://systemB.com/protect&remote=http://systemB.com", (res2) => {
    console.log("receive validate resultfrom server: "+ res2.statusCode)
    if (res2.statusCode == 200) {
      console.log("write cookie jwtSSO ", token)
      res.cookie('jwtSSO', token, { domain: 'systemB.com', maxAge: 86400, expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7), path: '/', httpOnly: true });
      res.redirect(redirectUrl);
    } else {
      res.redirect("http://my.sso.com/login?redirectUrl=http://systemB.com/protect&remote=http://systemB.com")
    }

  }).on('error', (e) => {
    console.log(`错误: ${e.message}`);
  });
});

router.get('/logout', function(req, res, next) {
  res.redirect("http://my.sso.com/logout?redirectUrl=http://systemB.com");
});

function check(data) {
  http.get("http://my.sso.com/validate?jwt=" + data + "&redirectUrl=http://systemB.com/protect&remote=http://systemB.com", (res) => {
      console.log("receive validate resultfrom server: "+ res.statusCode)
    return res.statusCode == 200 ? true : false;
  });
}

module.exports = router;
