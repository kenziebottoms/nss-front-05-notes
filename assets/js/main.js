"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let myApp = angular.module("NoteApp", [ngRoute]);

require("./keys");
require("./router");

require("./ctrl/noteList");

require("./factory/user");