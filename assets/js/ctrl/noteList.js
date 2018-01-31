"use strict";

const angular = require("angular");

angular.module("NoteApp").controller("NoteListCtrl", function($scope, UserFactory, FirebaseFactory, $location) {
    UserFactory.getActiveUser().then(user => {
        if (user) {
            $scope.uid = user.uid;
            console.log("getting notes");
            FirebaseFactory.getNotes(user.uid)
                .then(({data}) => {
                    $scope.notes = Object.values(data);
                })
                .catch(err => console.log("couldn't get notes", err));
        } else {
            $location.path("/");
        }
    });
});