This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# WouldYouRather Project by Sameer Mitra

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [Specifications](#specifications)
- [App Structure](#structure)
- [Backend Server](#backend_Server)

## Introduction

This project is an application based on Would You Rather game that allows the user to:
1. Login
2. Answer questions
3. View results of answered questions
4. View Leaderboard
5. Add your own questions

## Instructions

  ### How to start the WouldYouRather React application
  - Application may be downloaded or cloned (git clone https://github.com/sameer-mitra/reactnd-project-would-you-rather )
  - Once downloaded or cloned via git clone terminal command
  - Run `npm install` via terminal, to download all dependencies for the application.
  - Run `npm start` via terminal, to launch application's dev server.
  
## Specifications
  ### Application Setup
  - Verify that the application requires only npm install and npm start to install and launch.
  - Verify that a README is included with the project. The README includes a description and clear instructions for installing and launching the project.

  ### Main Page
  - Verify that the main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
  - Verify that the main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
  - Verify that when the browser is refreshed, the same information is displayed on the page.
  
  ### Login Flow
  - Verify that:
    1. There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
	2. The application works correctly regardless of which user is selected.
  3. The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
  4. Once the user logs in, the home page is shown.
  5. Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

  ### Application Functionality
  #### Home Page
  - Verify that:
   1. The answered and unanswered polls are both available at the root.
   2. The user can alternate between viewing answered and unanswered polls.
   3. The unanswered questions are shown by default.
   4. The name of the logged in user is visible on the page.
   5. The user can navigate to the leaderboard.
   6. The user can navigate to the form that allows the user to create a new poll.
  
  ### Code Functionality
  - Verify that component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
  - Verify that books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
  - Verify that the code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.
  

  ## Structure

  - The application is build using the React library, using a few class based components containing component state and several stateless functional components.
  - App routing, linking, etc is all done through react-router-dom with use of several router components _BrowserRouter, Route, Switch & Link_
  - The application has the following file and folder structure:

```bash
├── README.md - Main readme file with instrcutions on how to run and use application. This file.
├── package.json # npm package manager file. Contains all app dependencies and npm scripts.
├── public
│   ├── favicon.ico # React App Icon.
│   └── index.html # Base HTML file with boilerplate html for app and script  tags to load main js file.
└── src
    ├── components
    │   ├── Book.js # Book with book image, title and author.
    │   ├── BookCase.js # Book case that has multiple shelves.
    │   ├── BookShelf.js # Shelf that keeps books.
    │   ├── BookShelfChanger.js # Component that places book in shelf.
    │   ├── OpenSearchBtn.js # Component that moves to Search page.
    │   ├── SearchBar.js # The top component that has a back button and unput list to enter search terms.
    │   └── SearchResults.js # The results section in the Search Page.
    ├── icons # images/icons used in app interface. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root(parent)component of the app (class based) which houses all pages and other components of app as well as routing.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. 
    ├── index.js # Primary JavaScript file in project. It is used for DOM rendering only (ReactDOM.render method call).
    ├── ListBooks.js # Main Page with the book case. 
    └── SearchBooks.js # Search Page with the SearchBar and Search Results.
```

  ## Backend_Server

  The backend Server is provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

  * [`getAll`](#getall)
  * [`update`](#update)
  * [`search`](#search)

  ### `getAll`

  Method Signature:

  ```js
  getAll()
  ```

  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * This collection represents the books currently in the bookshelves in your app.

  ### `update`

  Method Signature:

  ```js
  update(book, shelf)
  ```

  * book: `<Object>` containing at minimum an `id` attribute
  * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
  * Returns a Promise which resolves to a JSON object containing the response data of the POST request

  ### `search`

  Method Signature:

  ```js
  search(query)
  ```

  * query: `<String>`
  * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
  * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

  ## Important
  The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
