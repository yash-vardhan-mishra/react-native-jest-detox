# React Native Project with Jest and Detox Testing
=====================================================

This project was created to practice writing basic test cases using Jest and `@testing-library/react-native`, as well as configuring Detox for end-to-end (e2e) testing. The project was developed on a Apple MacBook M3 Pro.

## Getting Started
---------------

To run the project, follow these steps:

1. Start the Metro Server by running `npm start` or `yarn start` from the root of the project.
2. Open a new terminal and run `npm run ios` or `yarn ios` to start the iOS app.

Note: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Testing
---------

This project includes Jest tests for unit testing and Detox tests for e2e testing. To run the tests, use the following commands:

* `npm run test` or `yarn test` to run Jest tests
* `npx detox test --configuration ios.sim.debug` to run Detox e2e tests on iOS
* `npx detox test --configuration android.emu.debug` to run Detox e2e tests on Android

## Building
---------

To build the project, use the following commands:

* `npx detox build --configuration ios.sim.debug` to build the iOS app
* `npx detox build --configuration android.emu.debug` to build the Android app

## Apologies for the UI
---------------------

Please note that the UI of this project is not the main focus, and I apologize for its simplicity. The goal of this project was to practice testing with Jest and Detox, not to create a visually stunning app.
