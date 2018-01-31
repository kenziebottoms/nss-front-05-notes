"use strict";

const angular = require("angular");
const firebase = require("firebase");

angular.module("NoteApp").factory("FirebaseFactory", function($q, $http) {
    let getNotes = uid => {
        return $q((resolve, reject) => {
            $http.get(`${firebase.dbUrl}/notes.json?orderBy="uid"&equalTo=${uid}`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    return { getNotes };
});