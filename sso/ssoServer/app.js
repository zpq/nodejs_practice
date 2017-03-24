var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require("express-session");
var RedisStore = require("connect-redis")(session);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var utils = require("./utils/utils");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var redis_store = new RedisStore({
  host: '127.0.0.1',
  port: 6379,
  ttl: 1000,
  disableTTL: true,
  // db: 1,
  // unref: true,
  // pass: 'secret'
});

app.use(
  session({
  store: redis_store,
  secret: 'ssoSecket',
  resave: false,
  name: "sid",
  saveUninitialized: true,
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {

  console.log("parser = ", cookieParser.JSONCookie(req.cookies.sid));
  return
})

// app.use(function(req, res, next) {
//     redis_store.get(req.cookies.sid, function(err, sess) {
//       console.log(33333333333333)
//      if (err) {
//       res.end("err "+err);
//     } else {
//       console.log("sess "+sess)
//       res.end(sess);
//     }
//       // next()
//   })
// });
// AkDZAcuLlQZwLqU2ATb93JQxOft88wHk

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
