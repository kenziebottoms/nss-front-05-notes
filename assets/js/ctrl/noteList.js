"use strict";

const angular = require("angular");

angular.module("NoteApp").controller("NoteListCtrl", function($scope, UserFactory, $location) {
    UserFactory.getActiveUser().then(user => {
        if (user) {
            $scope.user = user;
        } else {
            $location.path("/");
        }
    });
});