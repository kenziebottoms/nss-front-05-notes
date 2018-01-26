"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let myApp = angular.module("funStuff", [ngRoute]);

require("./router.js");

require("./ctrl/song");
require("./ctrl/songDetail");

require("./factory/song");