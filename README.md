# User Notes with Authentication

![](https://img.shields.io/badge/data-firebase_api-blue.svg)
![](https://img.shields.io/badge/template-angular-red.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_framework-materialize-F95972.svg)
![](https://img.shields.io/badge/mvp-working-green.svg)

### Run locally

```bash
git clone git@github.com:kenziebottoms/nss-front-05-notes.git
cd nss-front-05-notes
npm install
grunt
hs -o
```

> Note: This won't work unless you have the `keys.js` module. Which I'm not going to give you.

## Requirements

In this exercise, you'll be requiring users to register and log into your application before they can use it. The user interface is very simple once they log in, because this is a basic application that will allow them to enter notes, and then view all notes.

### Firebase

- [x] Create a Firebase collection named `notes`
- [x] Use the basic Firebase email/password authentication to register users for your application.

### Application

- [x] Create an Angular application module.
- [x] Create 4 partials for views.
    - [ ] ~~A registration view~~
    - [x] A login view
    - [x] A new note form
    - [x] A note list form
- [x] Configure your application to support the following routes.
    - [ ] ~~`/register`~~
    - [x] `/login`
    - [x] ~~`/notes`~~ `/all`
    - [x] `/new`
- [x] Write a controller for each of the partials
    - [ ] ~~`RegisterCtrl`~~
    - [x] `LoginCtrl`
    - [x] `NoteListCtrl`
    - [x] `NewNoteCtrl`

### New Note Form

- [x] A text field labeled "Enter note:".
- [x] A button labeled "Save".
    - [x] When the button is clicked, save a new item in the Firebase `notes` collection, along with the current user's unique id.

### Note List

- [x] When the user visits the ~~`/notes`~~ `/all` URL, the user should see all of the notes that were entered by that user, and no others.
- [x] Use the `orderBy` and `equalTo` parameters in the `$http` request to only return notes created by the current user.

### Should do:

- [ ] Prevent submission of empty textarea.
- [ ] Date and order the notes.
- [ ] Add delete feature.