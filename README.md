## liri-node-app
liri-node-app

## What the app provides

The Liri App is a powerful app that allows for 4 different commands to search for different results. These results include concert information, movie information, song and artist information and the ability to pull a command from a readme.txt file. 

## Organization 

The App is organzied with a switch/case that allows the user to input a command which runs one of 4 different functions. Each function executes a call from an API for the information searched for and prints it out organized in the console. 

## Instructions on how to run it

* `node liri.js concert-this <artist/band name here>`
    * Insert the atrist/band name in any order with spaces and you will get all the information on where the artist will play next.
![Image of concert-this](https://github.com/cddavidson86/liri-node-app/blob/master/images/Screen%20Shot%202019-06-25%20at%2010.05.10%20PM.png)



* `node liri.js spotify-this-song '<song name here>'`
    * Insert the song name and the artist in any order with spaces and it will pull up all information on the song. As you can see in the top picture, if nothing is entered as input, it will default to "The Sign" by Ace Of Base.
![Image of spotify-this-song](https://github.com/cddavidson86/liri-node-app/blob/master/images/Screen%20Shot%202019-06-25%20at%2010.05.46%20PM.png)
![Image of spotify-this-song](https://github.com/cddavidson86/liri-node-app/blob/master/images/Screen%20Shot%202019-06-25%20at%2010.06.22%20PM.png)



* `node liri.js movie-this '<movie name here>'`
    * Insert the movie name at the end of the command with spaces to get all the information on the movie. If nothing is entered, it will default to the movie "Mr. Nobody".
![Image of movie-this](https://github.com/cddavidson86/liri-node-app/blob/master/images/Screen%20Shot%202019-06-25%20at%2010.09.26%20PM.png)
    
    

* `node liri.js do-what-it-says`
    * This command runs the spotify band search function using a command that is entered in the random.txt file. In this case being, "I want it that way",Back street boys.
![Image of do-what-it-says](https://github.com/cddavidson86/liri-node-app/blob/master/images/Screen%20Shot%202019-06-25%20at%2010.10.06%20PM.png)
    
    
## Deployed version

https://cddavidson86.github.io/liri-node-app/

# Technologies

- Dependencies

    "axios": "^0.19.0",
    "dotenv": "^8.0.0",
    "moment": "^2.24.0",
    "node-spotify-api": "^1.1.1"

# My role

Design and Programmer. 

