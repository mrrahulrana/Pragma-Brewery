# Pragma-Brewery
This application displays current temperature of each container and notifies when the temperatures are outside the correct range.

Running the application:

# Install dependencies #
$ npm install

# Run development Frontend(Webapp)/Backend(API) #
$ npm start

# Run tests #
$ npm test ## All tests
$ npm run test:backend ## Backend API tests
$ npm run test:webapp ## Frontend application tests

# Architecture:
This solution is built on top of a JavaScript stack, with a NodeJS ans Socket.io API which provides the temprature updates of each beer container and the frontend with ReactJS.

# Frontend-
    React
    Unstated
    Axios
    Socket.io Client
    Jest
    Webpack

# Backend-
    Node.js
    Socket.io
    Axios
    Jest + Supertest

# How does it work:
When the frontend app loads it send a request to backend API(/beers) which respond with an array of beers.
After loading the beers list, each beer component connects to the WebSocket server and listen to temperature updates.
The beer component uses the custom React Hook useBeerUpdates, that connect on the updates
server and dispatch an update after every new socket message.
Developer simulation component(optional) is also created to simulate the temprature by user for any beer.

Each beer component will present 5 possible status and show the alert within component with color change:
# Alert Status
OK: The temperature is under control, No Alert.
Low: The temperature is less than Minimum temperature limit but not with large difference.
TOO LOW: The temperature is less than Minimum temperature limit with large difference.
HIGH: The temperature is higher than Maximum temperature limit but not with large difference.
TOO HIGH: The temperature is higher than Maximum temperature limit with large difference.

# What are the highlights of your logic/code writing style?
The application uses state containers which built upon State management library(i.e. unstated) that relies on plain JavaScript classes to keep the state. It is simple to test and integrate with React. Also, used WebSocket implementation which responsible to handle temperature updates and send the update to the frontend client.
It is Unit testable for both Front-end and Back-end code.

 # What could you do better in your code next iteration?
 I will redesign UI which will compatible for all devices(i.e. mobile, tablet etc.) and better alert way like sound when temperature reaches out of range as it will help while driving. I will enhance it with historical temperature data captured for each container which will support in case any container loose connectivity with sensor service.

 # What were the questions you would ask and your own answers/assumptions? 
 Q.1- Will the internet connectivity be there in all delivery zones?
 Answer- Yes, network connectivity will be available for all delivery zones. So no offline support is expected from current solution.

 Assumption- The application must provide clear and simple visual information w.r.t the latest temperature of each container and alerts. No sound notification is expected with solution.




