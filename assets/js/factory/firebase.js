"use strict";

const angular = require("angular");

angular.module("NoteApp").factory("FirebaseFactory", function($q, $http, firebase) {
    // TODO: actually hook up UID
    let getNotes = uid => {
        return $q((resolve, reject) => {
            $http.get(firebase.dbUrl)
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    };

    return { getNotes };
});