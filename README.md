# friend-finder

## Description

Friend Finder matches you to friends based on how you answer a 10 question survey. When the survey is submitted, an existing user's record closest to the your/or the user's current response is found and returned. The closest set of user responses is defined by the lowest absolute difference for all ten questions combined.

Friend Finder is meant to simulate a simple dating app but for friends. This app comes to life with the help of node.js and Express on the back end, and elements form both Twitter Bootstrap and Materialized on the front end.

## Demo

You can find the deployed app by following this Heroku link: [click me](https://uwbc-friend-finder.herokuapp.com/)

##Installation

* Clone this repository onto your desktop.
* cd into your application's folder
* Open terminal/gitbash and npm install your required node modules.

## Running on localhost 

To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. There is already a defaulted PORT of '8000' but it can be changed to the PORT of your choice.

After the PORT environment variable has been set, run the Node.js application with the command below.
 * node server.js
Once it's run, you can follow the link to the browser that was returned back in your terminal.

## Languages Used
  * JavaScript
  * npm
    * path
    * express
  * node.js
  * materialize
  * twitter bootstrap
  

## Author

### Ana Lee