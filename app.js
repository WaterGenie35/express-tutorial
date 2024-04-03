var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var basicRoutingRouter = require('./routes/basic_routing');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// root: public directory
// path is relative to where the node process is launched,
// so we should use absolute path (the __dirname bit)

// Example: public/img/foo.png
//   Accessible from localhost:3000/img/foo.png
var static_middleware = express.static(path.join(__dirname, 'public'));
app.use(static_middleware);

// Can use a virtual path prefix by specifying a mount path:
app.use('/static', static_middleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/basic-routing', basicRoutingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
