"use strict";

const angular = require("angular");

angular.module("NoteApp").config($routeProvider => {
    $routeProvider
        .when("/all", {
            templateUrl: "assets/partials/note-list.html",
            controller: "NoteListCtrl"
        })
        .otherwise("/");
});