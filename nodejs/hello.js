'use strict'

var s = 'Hello';

function greet(name){
    console.log(s + ' ' + name + '!');
}

function *test(){
    console.log("start")

    var a = yield "a";
    console.log(a, " - inside");

    var b = yield "b"
    console.log(b, " - inside")

    var c = yield "c"
    console.log(c, " - inside")

    return "game over"
}

module.exports = {
    "greet": greet,
    "test": test
};
