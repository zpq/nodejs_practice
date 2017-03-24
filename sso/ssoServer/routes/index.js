var express = require('express');
var router = express.Router();
var session = require("express-session");
var utils = require("../utils/utils");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  console.log("from cookie = " , req.cookies.sid)

  res.render('login', {
    remote: req.query.remote,
    redirectUrl: req.query.redirectUrl
  });
});

router.post('/doLogin', function(req, res, next){
    let username = req.body.username
    let password = req.body.password
    if (username == "admin" && password == "admin") {
      req.session.username = username;
    let token = utils.signJwt({
      username: username,
      sid: req.sessionID
    })
    console.log("gen sessid=" , req.sessionID)
    //redirect to attach client
    res.redirect(req.body.remote + "/attach?jwt="+token+"&redirectUrl="+req.body.redirectUrl)
    } else {
      res.writeHead(401)
      res.end();
    }
});

router.get('/logout', function(req, res, next){
    req.session.destroy()
    res.redirect(req.query.redirectUrl)
});

router.get('/validate', function(req, res, next){
    let data = utils.verifyJwt(req.query.jwt);
    if (data) {
        // console.log("redisdata= ", data)
        // console.log("success");
        res.writeHead(200);
        res.end();
        // RedisStore.get(data.sid, function(err, sess) {
        //   if (err) {
        //     console.log("redis get error : ", err)
        //     res.writeHead(404);
        //     res.end();
        //   } else {
        //     console.log(`sess = ${sess}`)
        //     if (sess.username) {
        //       res.writeHead(200);
        //       res.end();
        //     } else {
        //       console.log(`there is no username`)
        //       res.writeHead(501);
        //       res.end();
        //     }
        //   }
        // });
    } else {
      res.writeHead(400);
      res.end();
    }
});


module.exports = router;
