'use strict'

var hello = require('./hello')
var test = hello.test;
var s = "Michael";

hello.greet(s);

var g = test();


var a = g.next();
console.log(a.value)
g.next();
var b = g.next(a.value);

