"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
    res.send("Please Use Appropriate Routes");
});

app.listen(8000, function () {
    console.log("Server Listening on 8080");
});