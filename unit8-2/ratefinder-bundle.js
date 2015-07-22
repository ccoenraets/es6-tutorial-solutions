(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var rates = [{
    "name": "30 years fixed",
    "rate": "13",
    "years": "30"
}, {
    "name": "20 years fixed",
    "rate": "2.8",
    "years": "20"
}];

var findAll = function findAll() {
    return new Promise(function (resolve, reject) {
        if (rates) {
            resolve(rates);
        } else {
            reject("No rates");
        }
    });
};
exports.findAll = findAll;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _modulesMockservice = require('./modules/mockservice');

var service = _interopRequireWildcard(_modulesMockservice);

service.findAll().then(function (rates) {
    var html = '';
    rates.forEach(function (rate) {
        return html += '<tr><td>' + rate.name + '</td><td>' + rate.years + '</td><td>' + rate.rate + '%</td></tr>';
    });
    document.getElementById("rates").innerHTML = html;
})['catch'](function (e) {
    return console.log(e);
});

},{"./modules/mockservice":1}]},{},[2]);
