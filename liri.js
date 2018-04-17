require("dotenv").config();


// Data taken from keys.js
var keys = require('./keys.js');

var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

// Load the user Spotify and Twitter keys

var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitterKeys);



console.log("keys " + keys.twitter.consumer_key);
console.log("keys " + keys.twitter.consumer_secret);
console.log("keys " + keys.twitter.access_token_key);
console.log("keys " + keys.twitter.access_token_secret);

console.log("keys " + keys.spotify.id);
console.log("keys " + keys.spotify.secret);

//Stored argument's array
var actionArgv = process.argv;
var liriCommand = process.argv[2];


//Switch case statement

switch (liriCommand) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movies();
        break;

    case "do-what-it-says":
        itSays();
        break;
}

function tweets() {
    console.log("tweets function");
}

function spotify() {
    console.log("spotify function");
}

function movies() {
    console.log("movies");
}

function itSays() {
    console.log("it-says function");
}
