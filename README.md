# Chatty App

A simple chat app using React and WebSockets.


![ChattyApp screenshot](https://github.com/ivallee/chatty-app/blob/master/docs/screen1.png?raw=true)

### Getting started

- Install dependencies using npm install
  
- Chatty-server has it's own dependencies that need to be installed as well. Be sure to run npm install from the chatty-server folder

-Run the app
```
npm start
```

-In a seperate terminal window, run the WebSockets server (from the chatty-server directory)
```
node chatty-server.js
```

Open http://localhost:3000/



### Dependencies (App)

* React
* ReactDOM

### Dev dependencies
* [babel-loader](https://github.com/babel/babel-loader)
* babel-preset-2015
* babel-preset-react
* css-loader
* eslint
* eslint-plugin-react
* node-sass
* sass-loader
* socksjs-client
* style-loader
* webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Chatty-server dependencies

* express
* ws
* uuid

