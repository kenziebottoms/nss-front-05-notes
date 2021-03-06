"use strict";

const angular = require("angular");

angular.module("NoteApp").config($routeProvider => {
    $routeProvider
        .when("/login", {
            templateUrl: "assets/partials/login.html",
            controller: "LoginCtrl"
        })
        .when("/all", {
            templateUrl: "assets/partials/note-list.html",
            controller: "NoteListCtrl"
        })
        .when("/new", {
            templateUrl: "assets/partials/new-note.html",
            controller: "NewNoteCtrl"
        })
        .otherwise("/");
});