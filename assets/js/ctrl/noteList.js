"use strict";

const angular = require("angular");

angular.module("NoteApp").controller("NoteListCtrl", function($scope, UserFactory, FirebaseFactory, $location) {
    UserFactory.getActiveUser().then(user => {
        if (user) {
            $scope.uid = user.uid;
            FirebaseFactory.getNotes(user.uid)
                .then(({data}) => {
                    console.log(data);
                })
                .catch(err => console.log("couldn't get notes", err));
        } else {
            $location.path("/");
        }
    });
});