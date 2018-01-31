"use strict";

const angular = require("angular");

angular.module("NoteApp").controller("NewNoteCtrl", function($scope, UserFactory, FirebaseFactory, $location) {
    UserFactory.getActiveUser().then(user => {
        if (user) {
            $scope.uid = user.uid;
        } else {
            $location.path("/");
        }
    });

    $scope.saveNote = () => {
        FirebaseFactory.addNote($scope.uid, $scope.content)
            .then(results => $location.path("/all"));
    };
});