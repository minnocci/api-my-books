# My Books API

## Outline
Simple API for fetching books and data related on https://github.com/minnocci/books using Express and Mongoose on MongoDB

## Getting started
To run this project, you must first install the dependencies with `npm install`.

## Connecting to Mongo DB
To configure your DB connection, you can set the URI in `app.js`.

The following example is reading a previously set environment variable for the deployed version on Heroku.

```
const mongoDB = process.env.MONGO_URI
```

## Launching the server
For launching locally I have added nodemon and the API is launched by running `npm start`.

For a deployed API (i.e. on Heroku) you can use the Proc file, which runs `node app.js`.

# Endpoints
`POST` `/auth`

Authentication Endpoint. Returns always the same object with the user id and the status "success".

`GET` `/me`

Returns always the same object with the user id and the access type for the user (free or premium).

`GET` `/categories`

Retreives the list of all categories.

`GET` `/books`

Retreives the list of all books.

`GET` `/books/:book_id`

Retreives a book record.

`GET` `/category/:category_id`

Retreives a category record.

# Demo

Demo API is available at https://api-my-books.herokuapp.com