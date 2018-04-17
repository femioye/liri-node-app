//Get data from keys.js
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var client = new twitter(keys.twitterKeys);
var fs = require('fs');

//Stored argument's array
var cmdArgv = process.argv;
var liriCommand = cmdArgv[2];