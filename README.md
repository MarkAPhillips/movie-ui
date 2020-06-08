# Movie UI

## Introduction

React UI for Movie database.

CI/CD using Circle CI

Deployed to Heroku at [https://eu-movie-ui.herokuapp.com/](https://eu-movie-ui.herokuapp.com/)

## Installation

In project root run the following:

`echo API_URL=http://localhost:4000 > .env`

This is the location of the API url that all requests are made. Please ensure this is running before running the application.

Run `npm i`

## Run & Build Locally

Run `npm start`

Browse to [Localhost](http://localhost:8080/) to view the application running locally.

A `env.js` is built locally that references any environment variables and well as the latest version of the UI taken from the package.json file.


## Run & Build with Docker

Ensure [Docker](https://docs.docker.com/get-docker/) is installed locally.

For MacOS review the following [documentation](https://runnable.com/docker/install-docker-on-macos)

Run `npm run start:docker`

Browse to [Localhost](http://localhost:8080/) to view the application running locally.

