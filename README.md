# Movie UI

## Introduction

React UI for Movie database.

CI/CD using Circle CI

Deployed to Heroku at [https://eu-movie-ui.herokuapp.com/](https://eu-movie-ui.herokuapp.com/)

## Installation

In project root run the following:

```
echo MOVIE_API_URL=http://localhost:4000 > .env
echo AUTH_API_URL=http://localhost:8000 >> .env
```

The application requires connection to two APIs:

- movie-api - a JS GraphQL wrapper around the Movie database REST API with additional storage provided by mongoDb

- auth-api - a Python authentication REST API which handles login and registration

The process of containerising both the applications is WIP and will be updated in due course.

Run `npm i`

## Run & Build Locally

Run `npm start`

Browse to [Localhost](http://localhost:8080/) to view the application running locally.

An `env.js` file is built locally that references any environment variables as well as the latest version of the UI taken from the package.json file.

## Run & Build with Docker

Ensure [Docker](https://docs.docker.com/get-docker/) is installed locally.

For MacOS review the following [documentation](https://runnable.com/docker/install-docker-on-macos)

Run `npm run start:docker`

Browse to [Localhost](http://localhost:8080/) to view the application running locally.

