"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let myApp = angular.module("NoteApp", [ngRoute]);

require("./keys");
require("./router");
require("./autorun");

require("./ctrl/noteList");
require("./ctrl/login");

require("./factory/firebase");
require("./factory/user");