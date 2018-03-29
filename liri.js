require("dotenv").config();
/* 
var twitter = require('twitter')
var fs = require('fs');
var keys = require("./keys.js"); */
var keys = require("./keys.js");
var twitter = require('twitter')
var spotify = require('spotify')
var request = require('request')
var client = new twitter({
    consumer_key: '20eutgL9zx2eTrTgZRB7QRCuJ',
    consumer_secret: 'IaFCqQjaQPjc6TYIVIXCdLkSJQbyM81Oj937lcQQhxQYTgOE7X',
    access_token_key: '979171882606850048-3vsDWQfkoS5rla1FC7kI5CuY2JjWBZw',
    access_token_secret: 'BeYJ6oAhWJkhNDJy3ZSvFz3lSDm6laicr5NWByOV99EHQ'
  });

var params = {screen_name: 'Shaz99897889'};
var tweetsArray = [];

function mytweets() { 
       client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if(error) throw error;
        tweetsArray = tweets;

					for(i=0; i<tweetsArray.length; i++){
						console.log("Created at: " + tweetsArray[i].created_at);
						console.log("Text: " + tweetsArray[i].text);
						console.log('--------------------------------------');
					}

      });
        
}

mytweets()