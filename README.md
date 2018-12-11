## Magical Predicate Builder   🦄🌈🍀🔮🐇🎩✨🦄🌈🍀🔮🐇🎩✨🦄🌈🍀🔮🐇🎩✨🦄🌈🍀🔮🐇🎩✨🦄

This project was bootstrapped with Create React App. The scripts used to build this project and configuration for tests were created by the team that created Create React App. Run `npm install` or `yarn install` from the root folder to install front-end dependencies.

A live version of this app can be found [here](http://natepharris.me/magical-predicate-builder). The live version utilizes Google Cloud functions for the server.

## Available Scripts

In the project directory, you can run these commands (you can also use `yarn`):

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the application to GitHub pages

### `npm run analyze`

Builds the application and starts the `webpack-bundle-analyzer` server. I tried to use as few external dependencies as possible. The largest dependency is `ReactDOM`.

## Architecture

### Frontend

The client for this application is written utilizing `React` and `styled-components`. `styled-components` is a library that allows for styling of React components directly in an es6 environment. I decided to make most of the components presentational components, meaning that most of the logic for the client is located in the wrapper `App.js` file. I do not use Redux anywhere in the front-end (only local component state) since the state transformations did not get complex enough to warrant it (at least that's what I thought at the beginning, haha). The `src/shared` folder contains constants that I use throughout the app as well as app-wide components such as the `ErrorMessage` and `LoadingSpinner`. I also added some theme standardization by creating standard color and font size constants in the `themes` folder. A lot of the logic in the frontend follows very happy-path 🌈 conditions, and I do not have a lot of logic preventing uncaught exceptions. Making the application more robust with error handling would definitely be the next task on my to-do list though.

### Persistance

To keep a persistant state of predicates and operators as well as information to help me generate SQL, I decided to create a document database in Google's Firestore database service. The Firestore database I am using is completely open to the public so there are no API keys in the front-end or server code. I created a utility to encapsulate some of the Firebase functionality under `predicate-builder-server/src/utils/Firebase.js`. There are two collections in the database: `predicates` and `operators`. `operators` contains docs that follow this structure: `{ title: <operator title in front end>, type: <string or integer>, validPattern: <regex for value operator is expecting>, multiValue: <bool that allows multi-value structure in UI>, sqlEquivalent: <sql string with injection points>, replaceCharacter: <character to replace with actual value in sqlEquivalent>}`. `predicates` follows this structure: `{ title: <predicate title in front end>, type: <string or integer>, dbField: <db field that predicate corresponds with>}`.

### Server

The server for this app runs with Node and Express. It performs requests out to Google Firestore through the helper functions in `predicate-builder-server/src/utils/Firebase.js`. The routes are very simple (although they are honestly not completely RESTful). The first endpoint is `/content`. It accepts `GET` requests and retrieves the predicates and operators for the dropdowns. The response is formatted for the frontend using the `BuilderContentFormatter` util. The second endpoint is called `query`. It accepts `POST` requests and takes an array of filters from the frontend and generates a valid SQL query. It expects the array to be of the form: `[{ predicate: <predicate>, operator: <operator>, value: <array or single value>, ...}]`.

### Testing

The application has a full suite of unit tests for the frontend. Unfortunately, I ran out of time to write any for the server. The tests for the frontend utilize `jest` and `enzyme` and do some mocking for the initial `/content` call.

### Opportunities for Improvement

There are a lot of opportunities for improvement in this app. This is not a full list, but hopefully we can talk more in depth about these later:

1. Error catching is not very robust across client and server.
2. Form validation is most of the logic in the frontend, and it could be a lot cleaner with a rules engine.
3. With the current state complexity, it would probably be a good idea to implement redux.
4. The multi-value logic for the `between` case is a little fragile. I would probably want to add support for more than two values.
5. To support a larger application, most of the logic should be removed from `App.js` and placed in another container component.
6. Tests should be written for the server. If the server got more complex, I might consider using a framework.
7. Tree-shaking for the bundles could probably be improved a little. 50kB still seems a bit high for this application.
8. The pattern matching validation could probably be implemented differently. There are a lot of valid email formats that the tool will say are invalid.
