# User Notes with Authentication

### Run locally

```bash
git clone git@github.com:kenziebottoms/nss-front-05-notes.git
npm install
grunt
```

## Requirements

In this exercise, you'll be requiring users to register and log into your application before they can use it. The user interface is very simple once they log in, because this is a basic application that will allow them to enter notes, and then view all notes.

### Firebase

- [x] Create a Firebase collection named `notes`
- [x] Use the basic Firebase email/password authentication to register users for your application.

### Application

- [x] Create an Angular application module.
- [ ] Create 4 partials for views.
    - [x] A registration view
    - [x] A login view
    - [ ] A new note form
    - [ ] A note list form
- [ ] Configure your application to support the following routes.
    - [ ] `/register`
    - [x] `/login`
    - [ ] ~~`/notes`~~ `/all`
    - [ ] `/new`
- [ ] Write a controller for each of the partials
    - [ ] ~~`RegisterCtrl`~~
    - [x] `LoginCtrl`
    - [x] `NoteListCtrl`
    - [ ] `NewNoteCtrl`

### New Note Form

- [ ] A text field labeled "Enter note:".
- [ ] A button labeled "Save".
    - [ ] When the button is clicked, save a new item in the Firebase `notes` collection, along with the current user's unique id.

### Note List

- [x] When the user visits the ~~`/notes`~~ `/all` URL, the user should see all of the notes that were entered by that user, and no others.
- [x] Use the `orderBy` and `equalTo` parameters in the `$http` request to only return notes created by the current user.
