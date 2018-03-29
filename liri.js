require("dotenv").config();
/* 
var fs = require('fs');
var keys = require("./keys.js"); */
var keys = require("./keys.js");
var twitter = require('twitter')
var spotify = require('spotify')
var omdb = require('omdb');
// var omdb = require('omdb-api-pt')
var request = require('request')

var action = process.argv[2]


var client = new twitter({
    consumer_key: '20eutgL9zx2eTrTgZRB7QRCuJ',
    consumer_secret: 'IaFCqQjaQPjc6TYIVIXCdLkSJQbyM81Oj937lcQQhxQYTgOE7X',
    access_token_key: '979171882606850048-3vsDWQfkoS5rla1FC7kI5CuY2JjWBZw',
    access_token_secret: 'BeYJ6oAhWJkhNDJy3ZSvFz3lSDm6laicr5NWByOV99EHQ'
});

/* var spotify_client = new spotify({
  id: 'befde55db68c4fdc98ec401b54a5369b',
  secret: 'ba5deb8a287940259f625e88dfd381a3'
});
*/

//TWITTER
var params = { screen_name: 'Shaz99897889' };
var tweetsArray = [];

function myTweets() {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) throw error;
        tweetsArray = tweets;

        for (i = 0; i < tweetsArray.length; i++) {
            console.log("Created at: " + tweetsArray[i].created_at);
            console.log("Text: " + tweetsArray[i].text);
            console.log('--------------------------------------');
        }

    });

}


//SPOTIFY
var Spotify = require('node-spotify-api');
// var songsArray = []

var spotify = new Spotify({
    id: 'befde55db68c4fdc98ec401b54a5369b',
    secret: 'ba5deb8a287940259f625e88dfd381a3'
});

function mySpotify() {
    var song = process.argv[3]
    console.log(song)
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(data);
        console.log('');
        console.log('Spotify Results: ');
        // console.log('--------------------------');
        console.log("Artist(s) : " + data.tracks.items[0].artists[0].name);
        console.log("Song Name : " + data.tracks.items[0].name);
        console.log("Song Link : " + data.tracks.items[0].preview_url);
        console.log("Album : " + data.tracks.items[0].album.name);
        // console.log('--------------------------');

    });
}
// mySpotify()

//OMDB
var request = require("request");
function movieThis() {
    /* var title = "twilight" */
    var title = process.argv[3]
    /* request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) { */
    request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            console.log('')
            console.log("OMDB Results :")
            console.log("Movie Title : " + JSON.parse(body).Title);
            console.log("Release Year : " + JSON.parse(body).Year);
            console.log("OMDB Rating : " + JSON.parse(body).imdbRating);
            console.log("Country of Production : " + JSON.parse(body).Country);
            console.log("Language : " + JSON.parse(body).Language);
            console.log("Plot : " + JSON.parse(body).Plot);
            console.log("Actors : " + JSON.parse(body).Actors);

        }
    });
}
// movieThis()


var fs = require("fs");
function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
    });
}


// Switch action
switch (action) {
    case 'myTweets':
        myTweets();
        break;

    case 'mySpotify':
        mySpotify();
        break;

    case 'movieThis':
        movieThis();
        break;

    case "doWhatItSays":
        doWhatItSays();
        break;

    /*  default:
         break; */
    default:
        console.log('Please enter : "myTweets", "mySpotify", "movieThis", "doWhatItSays"')
}



