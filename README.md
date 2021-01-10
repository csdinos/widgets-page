This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages

#### Main page
Main page where we can see the existing widgets, delete them or add a new one

#### Language selection
First step of widget creation process where we have to pick a language our of a dropdown

#### Name selection
Second and last step of the widget creation process where we have to input a name

#### 
## Scripts

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

#### `yarn test`

Run the tests on watch mode

#### `yarn cy:run`

***Important: The App needs to be running as cypress visits localhost***

Run the cypress integration tests

#### `yarn cy:open`

***Important: The App needs to be running as cypress visits localhost***

Open the cypress UI tool for interactive integration testing

#### `yarn build`

Builds the app for production to the `build` folder.

## Improvements

- Further tests could be added (ex. reducers)
- More scenarios besides the happy cases that are mainly tested
- Add a non broken test for the DeleteModal component :D
- Replace 'any' in the reducers, either by splitting the reducers or figuring our why it complains when you pass your own types for the payload
- We could have a confirmation page as a last step of the wizard where the user can see his input and decide on whether we wants to proceed with the creation