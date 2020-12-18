require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const adminController = require('./controllers/admin_controller');
const cloudinaryController = require('./controllers/cloudinary_controller');
const userController = require('./controllers/user_controller');
const productsController = require('./controllers/products_controller');


const mongoose = require('mongoose');
const express = require('express');

const kittySchema = new mongoose.Schema({
    name: String
  });

const app = express();
const PORT = 4000;

mongoose.connect(
    //process.env.CONNECTION_STRING, 
    "mongodb+srv://312akim:44fbf6c7@cluster0.sqp5f.mongodb.net/sample_airbnb?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    (err) => {
        if(err) {
            console.log('Data Base Error---------------', err);
        }
        console.log('Connect to database');
    }
);
console.log("GOT PAST MONGOOSE -------------");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const Kitten = mongoose.model('Kitten', kittySchema);
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);

    kittySchema.methods.speak = function () {
        const greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
    }
      

    const fluffy = new Kitten({ name: 'fluffy' });

    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log("fluffy hit");
    });

    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
      })

      Kitten.find({ name: /^fluff/ }, (req, res) => {
          console.log("hit callback");
      });
});


app.listen(PORT, () => console.log('Listening on port:', PORT));