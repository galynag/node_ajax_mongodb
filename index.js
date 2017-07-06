/**
 * Created by Galina on 06.07.2017.
 */
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const app = express();
const MyEmitter = require('events');
const db = require('./modules/db.js');
const favicon = require('serve-favicon');
const path = require('path');
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');
const $ = require('jquery');

// создаем парсер для данных в формате json
let jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.post("/user", jsonParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.json(`${request.body.userName} - ${request.body.userAge}`);
// });

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect( "mongodb://admin:123456@ds157320.mlab.com:57320/list", (err, database) => {
    if (err) return console.log(err);
    app.post("/user", jsonParser, function (request, response) {
        console.log(request.body);
        const note = { name: request.body.userName, age: request.body.userAge};
        database.collection('aaaa').insertOne(note, (err, result) => {
            if (err) {
                response.send ({'error': 'An error has occurred'});
            } else {
                response.send(result.ops[0]);
            }
        })

    });

    app.post("/number", jsonParser, function (request, response) {
        console.log(request.body);

        let numberIs = request.body.numberWas*5;
        const number = { numberWas: request.body.numberWas, numberIs : numberIs };
        database.collection('numbers').insertOne(number, (err, result) => {
            if (err) {
                response.send ({'error': 'An error has occurred'});
            } else {
                response.send(result.ops[0]);
            }
        })

    });
    app.post("/files", jsonParser, function (request, response) {
        console.log('folder body',request.body);
        fs.readdir('./test4', function (err, files) {
            if (err) return console.error(err)
            console.log(files);
            response.send(files);
            files.forEach(function (file) {
                if (path.extname(file) === '.txt') {
                    console.log(file);
                }
            })
        })
    });

});


app.listen(3000);

