var LOG_TAG = "ContentHandler";
var UsersDAO = require('../DAO/users').UsersDAO
var User = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId;


function ContentHandler(db, mongodb) {

    /*
     |--------------------------------------------------------------------------
     | DB Collections
     |--------------------------------------------------------------------------
     */
    var mongodb = mongodb;
    var users = new UsersDAO(db);

    /*MENU*/
    var menu = db.collection("menu");

    /*ARTA*/
    var bancuri_animale   = db.collection("bancuri_animale");
    var bancuri_diverse   = db.collection("bancuri_diverse");
    var culmi     = db.collection("culmi");
    var ghicitori = db.collection("ghicitori");
    var anunturi = db.collection("anunturi");

    /*LISTE*/
    var topCarti = db.collection("topCarti");
    var desene = db.collection("desene");
    var filme = db.collection("filme");

    /*MEDIA*/
    var gifs = db.collection("gifs");
    var music = db.collection("music");
    var poze = db.collection("poze");

    /*SUFLET & MINTE*/
    var facts = db.collection("facts");
    var citateAristotel = db.collection("citateAristotel");




    /*
     |--------------------------------------------------------------------------
     | Content Handler functions
     |--------------------------------------------------------------------------
     */
    this.myProfile = function(req, res, next){
        console.log("req.user",req.user)
        User.findById(req.user, function(err, user) {
            res.send(user);
        });
    }

    /*API - GET MENU*/
    this.getMenu = function(req, res, next){
        menu.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " menu items");

            res.json(items);
        });
    }

    /*
     |--------------------------------------------------------------------------
     | ARTA API's
     |--------------------------------------------------------------------------
     */

    /*GET BANCURI*/
    this.getBancuriAnimale = function(req, res, next){
        bancuri_animale.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " bancuri_animale");

            res.json(items);
        });
    }

    this.getBancuriDiverse = function(req, res, next){
        bancuri_diverse.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " bancuri_diverse");

            res.json(items);
        });
    }

    /*GET CULMI*/
    this.getCulmi = function(req, res, next){
        culmi.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " culmi");

            res.json(items);
        });
    }

    /*GET GHICITORI*/
    this.getGhicitori = function(req, res, next){
        ghicitori.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " ghicitori");

            res.json(items);
        });
    }

    /*GET ANUNTURI*/
    this.getAnunturi = function(req, res, next){
        anunturi.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " anunturi");

            res.json(items);
        });
    }

    /*
     |--------------------------------------------------------------------------
     | LISTE API's
     |--------------------------------------------------------------------------
     */

    /*GET TOP CARTI*/
    this.getTopCarti = function(req, res, next){
        topCarti.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " topCarti");

            res.json(items);
        });
    }

    /*GET TOP DESENE*/
    this.getDesene = function(req, res, next){
        desene.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " desene");

            res.json(items);
        });
    }

    /*GET TOP FILME*/
    this.getFilme = function(req, res, next){
        
    }

    /*
     |--------------------------------------------------------------------------
     | MEDIA API's
     |--------------------------------------------------------------------------
     */

    /*GET GIFS*/
    this.getGifs = function(req, res, next){
        gifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET MUSIC*/
    this.getMusic = function(req, res, next){
        music.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " songs");

            res.json(items);
        });
    }

    /*GET POZE*/
    this.getPoze = function(req, res, next){

    }


    /*
     |--------------------------------------------------------------------------
     | SUFLET & MINTE API's
     |--------------------------------------------------------------------------
     */

    /*GET FACTS*/
    this.getFacts = function(req, res, next){
        facts.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " facts");

            res.json(items);
        });
    }

    /*GET FACTS*/
    this.getCitateAristotel = function(req, res, next){
        citateAristotel.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }



    /*
     |--------------------------------------------------------------------------
     | ADD LIKES
     |--------------------------------------------------------------------------
     */

    this.addLike = function(req, res, next){
        console.log("id coming from Service: ",req.body._id);
        var id = req.body._id;

        bancuri.update({_id : new mongodb.ObjectID(id)}, {$inc : {likes : 1}}, function(err, objectFound) {
            if (err) {
                console.log("Error processing request. Cannot find user with this id.");
            } 
            //console.log("User has been found. Processing request ...");
            console.log("added likes: ", objectFound)
            //res.json(objectFound)
        });
    }


}

module.exports = ContentHandler;