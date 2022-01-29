# recipe-tracker
A Vue.js / Express.js web application for tracking recipes

Based on the tutorial here: https://www.youtube.com/watch?v=Fa4cRMaTDUI but changing to track recipes not songs


# Vue setup:
npm install -g vue-cli
vue init webpack client
cd client
npm install
NB: make sure to change the .eslint.js env to read:
env: {
    browser: true,
    node: true -- this stops the linter being a little bitch
},


# Express setup:
mkdir server
cd server
npm init -f
mkdir src
make a src/app.js file
npm install --save nodemon eslint 
NB: windows users make sure to install nodemon globally and change the scripts in package.json to read:
"scripts": {
    "start": "nodemon --watch src --exec npm run server",
    "server": "node src/app.js",
    "lint": "eslint **/*.js"
},
