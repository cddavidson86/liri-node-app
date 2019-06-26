require("dotenv").config();

// PLUGIN VARIABLES
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

// taking the values
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");

// We will then create a switch-case statement.
// The switch-case will direct which function gets run.
switch (action) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong(value);
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

// BANDS IN TOWN FUNCTION
function concertThis() {
    axios
        .get(
            "https://rest.bandsintown.com/artists/" +
            value +
            "/events?app_id=codingbootcamp"
        )
        .then(function (response) {
            var dateTime = moment(response.data[0].datetime);

            console.log(
                value +
                " will be performing at " +
                response.data[0].venue.name +
                " in " +
                response.data[0].venue.city +
                " " +
                response.data[0].venue.region +
                " on " +
                dateTime.format("MM/DD/YYYY") +
                "!"
            );
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    // console.log("concertThis run" + value);
}

// SPOTIFY FUNCTION
function spotifyThisSong(aValue) {
    if (aValue.length === 0) {
        spotify.search({ type: "track", query: "the sign ace of base" }, function (
            err,
            data
        ) {
            if (err) {
                return console.log("Error occurred: " + err);
            }

            for (let i = 0; i < data.tracks.items.length; i++) {
                console.log("-------------------------------");
                console.log("Artist: " + data.tracks.items[i].artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name);
                console.log(
                    "Link: " +
                    JSON.stringify(
                        data.tracks.items[i].artists[0].external_urls.spotify
                    )
                );
                console.log(
                    "Album: " + JSON.stringify(data.tracks.items[i].album.name)
                );
            }

            // console.log("Artist: " + data.tracks.items[0].artists[0].name); // items should be i
            // console.log("Artist: " + artistsArray);
            // console.log("Song Name: " + data.tracks.items[0].name);
            // console.log("Link: " + JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify));
            // console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name));
            // console.log("link: " + data.tracks.items[0].artists[1].name);
            // console.log(JSON.stringify(data.tracks.items[0], null, 2));
        });
    } else {
        spotify.search({ type: "track", query: aValue }, function (err, data) {
            if (err) {
                return console.log("Error occurred: " + err);
            }

            for (let i = 0; i < data.tracks.items.length; i++) {
                console.log("-------------------------------");
                console.log("Artist: " + data.tracks.items[i].artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name);
                console.log(
                    "Link: " +
                    JSON.stringify(
                        data.tracks.items[i].artists[0].external_urls.spotify
                    )
                );
                console.log(
                    "Album: " + JSON.stringify(data.tracks.items[i].album.name)
                );
            }

            // console.log("Artist: " + data.tracks.items[0].artists[0].name); // items should be i
            // console.log("Artist: " + artistsArray);
            // console.log("Song Name: " + data.tracks.items[0].name);
            // console.log("Link: " + JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify));
            // console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name));
            // console.log("link: " + data.tracks.items[0].artists[1].name);
            // console.log(JSON.stringify(data.tracks.items[0], null, 2));
        });
    }
}

// MOVIE OMDB FUNCTIONS
function movieThis() {
    if (value.length == 0) {
        value = "mr. nobody";
        // console.log("value is equal to undefined and should now equal - " + value);

        axios
            .get("http://www.omdbapi.com/?apikey=trilogy&t=mr+nobody")
            .then(function (response) {
                console.log("Your movie. - " + response.data.Title);
                console.log("Year the movie came out. - " + response.data.Year);
                console.log("IMDB Rating of the movie. - " + response.data.imdbRating);
                console.log(
                    "Rotten Tomatoes Rating of the movie. - " +
                    response.data.Ratings[1].Value
                );
                console.log(
                    "Country where the movie was produced. - " + response.data.Country
                );
                console.log("Language of the movie. - " + response.data.Language);
                console.log("Plot of the movie. - " + response.data.Plot);
                console.log("Actors in the movie. - " + response.data.Actors);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }

    axios
        .get("http://www.omdbapi.com/?apikey=trilogy&t=" + value)
        .then(function (response) {
            console.log("Your movie. - " + response.data.Title);
            console.log("Year the movie came out. - " + response.data.Year);
            console.log("IMDB Rating of the movie. - " + response.data.imdbRating);
            console.log(
                "Rotten Tomatoes Rating of the movie. - " +
                response.data.Ratings[1].Value
            );
            console.log(
                "Country where the movie was produced. - " + response.data.Country
            );
            console.log("Language of the movie. - " + response.data.Language);
            console.log("Plot of the movie. - " + response.data.Plot);
            console.log("Actors in the movie. - " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    // console.log("movieThis run");
}

// READFILE FUNCTION 
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        // console.log(data);
        var newInput = data.split(",");
        var newValue = newInput.pop();
        spotifyThisSong(newValue);
        // console.log(newValue);

        if (err) {
            return console.log(err);
        }
    });
    // console.log("doWhatItSays run");
}
