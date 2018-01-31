"use strict";

const angular = require("angular");

angular.module("NoteApp").factory("UserFactory", function($q, $http) {
    const firebase = require("firebase");
    const getActiveUser = () => {
        return $q((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    resolve(user);
                } else {
                    reject("No active user");
                }
            });
        });
    };

    return { getActiveUser };
});