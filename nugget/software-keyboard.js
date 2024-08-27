"use strict";
var isAndroid = require("./is-android");
var isChromeOS = require("./is-chrome-os");
var isIos = require("./is-ios");
module.exports = function hasSoftwareKeyboard() {
    return isAndroid() || isChromeOS() || isIos();
};
