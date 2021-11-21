const express = require( 'express' );
const app = express();

//KEEP THIS TO LET MY INDEX.HTML RUNS WITHOUT SET UP AN ENDPOINT FOR IT
app.use(express.static(__dirname + "/static"));

//INSTRUCTING TO THE SERVER WHERE WILL PLACED THE EJS FILES
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/cats', function( request, response ){
    response.render( 'cats' );
});

app.get("/cat1", function(request, response){
    let details = {
        name : "Flyer Cat",
        photo : "cat1.jfif",
        favoriteFood : "Special Kitty",
        age : "1",
        sleepingSpots : ["Under the frezzer", "Over the chair", "In the kitchen"]
    }
    response.render( 'details', details );
});

app.get("/cat2", function(request, response){
    let details = {
        name : "Covid Cat",
        photo : "cat2.jpg",
        favoriteFood : "Wiskas",
        age : "3",
        sleepingSpots : ["Under the table", "Over the couch", "In the backyard"]
    }
    response.render( 'details', details );
});

app.get("/cat3", function(request, response){
    let details = {
        name : "Pug Cat",
        photo : "cat3.jpg",
        favoriteFood : "Ascan",
        age : "2",
        sleepingSpots : ["Under the sun", "Over the turf", "In the living room"]
    }
    response.render( 'details', details );
});


app.listen(8000, function() {
    console.log( 'This server is running in port 8000.' );
});