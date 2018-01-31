"use strict";

const angular = require("angular");

angular.module("NoteApp").factory("FirebaseFactory", function($q, $http, firebaseCreds) {
    let getNotes = uid => {
        return $q((resolve, reject) => {
            $http.get(`${firebaseCreds.dbUrl}/notes.json?orderBy="uid"&equalTo="${uid}"`)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    };

    let addNote = (uid, content) => {
        return $q((resolve, reject) => {
            $http.post(`${firebaseCreds.dbUrl}/notes.json`, {
                "content": content,
                "uid": uid
            })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    };

    return { getNotes, addNote };
});