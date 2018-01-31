"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let isLoggedIn = ($q, UserFactory) => {
    return $q((resolve, reject) => {
        UserFactory.getActiveUser()
            .then(user => resolve(true))
            .catch(err => reject("no active user"));
    });
};

let myApp = angular.module("NoteApp", [ngRoute]);

require("./keys");
require("./router");
require("./autorun");

require("./ctrl/noteList");

require("./factory/firebase");
require("./factory/user");