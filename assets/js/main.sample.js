"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let myApp = angular.module("appName", [ngRoute]);

require("./router.js");

require("./ctrl/controllers");

require("./factory/factories");