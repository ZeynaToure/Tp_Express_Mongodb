const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let movies = [];

// Chargement des données de films depuis movies.json
fs.readFile('movies.json', 'utf8', (error, data) => {
    if (error) {
        console.error('erreur de chargement des films', error);
        return;
    }
    movies = JSON.parse(data);
    console.log('Les films ont été chargés avec succès.');
});


/**const express = require("express");

const logger = require("morgan");

const movies = require("./movies.json");

const app= express();

const port = 4000;

app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Our movies...");
});

app.get("/movies/:id", (req, res) => {
    
});
app.post("/movies" , (req, res) => {
    movies.push(req.body);
    res.status(200).json(movies);
});

app.put("/movies/:id" , (req, res) => {

    const id= parseInt(req.params.id);
    let movies = data.find(m => m.id === id);
    (movie.title = req.body.title), (movies.release =req.body.release);
    res.status(200).json(movies);
});



app.listen(port, () =>
      console.log(`Express listening at http://localhost:${port}`)
); **/

