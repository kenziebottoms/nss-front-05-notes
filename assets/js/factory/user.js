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

    let isLoggedIn = () => {
        return $q((resolve, reject) => {
            getActiveUser()
                .then(user => resolve(true))
                .catch(err => reject("no active user"));
        });
    };

    const register = (email, pw) => {
        return firebase.auth().createUserWithEmailAndPassword(email, pw);
    };
    
    const login = (email, pw) => {
        return firebase.auth().signInWithEmailAndPassword(email, pw);
    };

    const logout = () => {
        return firebase.auth().signOut();
    };

    return { getActiveUser, register, login, isLoggedIn };
});