"use strict";

const angular = require("angular");
const firebase = require("firebase");

angular.module("NoteApp").run(firebaseCreds => {
    let config = {
        apiKey: firebaseCreds.key,
        authDomain: firebaseCreds.domain
    };
    firebase.initializeApp(config);
});