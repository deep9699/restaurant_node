var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var cusine_route=require('./routes/cusine_routes');
var cusine_route1=require('./routes/cusine_routes1');
var bill_router=require('./routes/bill_routes');
var bill_details_router=require('./routes/bill_details_router');
var customer_router=require('./routes/customer_router');
var customer_router1=require('./routes/customer_route1');
var order_rouer=require('./routes/order_router');
var dish_router=require('./routes/dish_routes');
var dish_router1=require('./routes/dish_routes1');
var order_details_rouer=require('./routes/order_details_router');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cusine',cusine_route);
app.use('/cusine1',cusine_route1);
app.use('/bill',bill_router);
app.use('/order',order_rouer);
app.use('/dish',dish_router);
app.use('/dish1',dish_router1);
app.use('/order_details',order_details_rouer);
app.use('/customer',customer_router);
app.use('/customer1',customer_router1);
app.use('/bill_details',bill_details_router);
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
