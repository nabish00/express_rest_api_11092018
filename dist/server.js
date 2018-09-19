'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.use('/api', _routes2.default);

app.listen(8000, function () {
    console.log("Server Listening on 8080");
});