# React Amazon Clone

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)

## Overview

This project was a fun practice of practical API utilization with axios as well as general application development with React. TheMovieDB's API was used to pull information about films from different genres and sections to display on the homepage. Firebase made authentication easy and quick, as well as provided a database to store favorited movies. This project makes use of Tailwind CSS, a great way to style pages much faster than normal with use of shorthands and classNames to write inline css.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Google Firebase](https://firebase.google.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Tailwind CSS](https://tailwindcss.com/)
- [The Movie DB](https://www.themoviedb.org/)

### Dependencies

@testing-library/jest-dom: ^5.16.5,\
@testing-library/react: ^13.3.0,\
@testing-library/user-event: ^13.5.0,\
axios: ^0.27.2,\
firebase: ^9.9.3,\
react: ^18.2.0,\
react-dom: ^18.2.0,\
react-icons: ^4.4.0,\
react-router-dom: ^6.3.0,\
react-scripts: 5.0.1,\
tailwind-scrollbar-hide: ^1.1.7,\
web-vitals: ^2.1.4

## Features

This project pulls information from TheMovieDB's API to return films that are listed on the home page. Logged in users can chose to favorite items from the homepage. Movies and Shows that are marked as favorite for the user to see in their account tab when logged in. Users that are not logged in do not have this functionality. Users can create accounts easily on the SignUp page thanks to Firebase authentication. Favorited movies are also stored in a Firebase database.
