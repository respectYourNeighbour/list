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
    var bancuri_animale   = db.collection("bancuriAnimale");
    var bancuri_diverse   = db.collection("bancuriDiverse");
    var culmi     = db.collection("culmi");
    var ghicitori = db.collection("ghicitori");
    var anunturi = db.collection("anunturi");

    /*LISTE*/
    var topCarti = db.collection("topCarti");
    var desene = db.collection("desene");
    var filme = db.collection("filme");

    /*MEDIA*/
    var coolGifs = db.collection("gifsCool");
    var failGifs = db.collection("gifsFail");
    var funnyGifs = db.collection("gifsFunny");
    var interestingGifs = db.collection("gifsInteresting");
    var wowGifs = db.collection("gifsWow");
    var reactionGifs = db.collection("gifsReaction");


    var music = db.collection("music");
    var poze = db.collection("poze");

    /*SUFLET & MINTE*/
    var facts = db.collection("facts");

    var citateAbrahamLincoln = db.collection("citateAbrahamLincoln");
    var citateAlbertEinstein = db.collection("citateAlbertEinstein");
    var citateAltii = db.collection("citateAltii");
    var citateAristotel = db.collection("citateAristotel");
    var citateBenjaminFranklin = db.collection("citateBenjaminFranklin");
    var citateBuddha = db.collection("citateBuddha");
    var citateCharlesDickens = db.collection("citateCharlesDickens");
    var citateConfucius = db.collection("citateConfucius");
    var citateDalaiLama = db.collection("citateDalaiLama");
    var citateDemocrit = db.collection("citateDemocrit");
    var citateEuripide = db.collection("citateEuripide");
    var citateGeorgeBernardShaw = db.collection("citateGeorgeBernardShaw");
    var citateGeorgeWashington = db.collection("citateGeorgeWashington");
    var citateImmanuelKant = db.collection("citateImmanuelKant");
    var citateLaoTzu = db.collection("citateLaoTzu");
    var citateLuciusAnnaeusSeneca = db.collection("citateLuciusAnnaeusSeneca");
    var citateMahatmaGandhi = db.collection("citateMahatmaGandhi");
    var citateMaicaTereza = db.collection("citateMaicaTereza");
    var citateMarkTwain = db.collection("citateMarkTwain");
    var citateMartinLutherKingJr = db.collection("citateMartinLutherKingJr");
    var citateNapoleonBonaparte = db.collection("citateNapoleonBonaparte");
    var citateNealeDonaldWalsch = db.collection("citateNealeDonaldWalsch");
    var citateOscarWilde = db.collection("citateOscarWilde");
    var citatePabloPicasso = db.collection("citatePabloPicasso");
    var citatePlaton = db.collection("citatePlaton");
    var citatePubliliusSyrus = db.collection("citatePubliliusSyrus");
    var citateRalphWaldoEmerson = db.collection("citateRalphWaldoEmerson");
    var citateRichardWurmbrand = db.collection("citateRichardWurmbrand");
    var citateSfantulAugustin = db.collection("citateSfantulAugustin");
    var citateSfantulCiprian = db.collection("citateSfantulCiprian");
    var citateSfantulIoanGuraDeAur = db.collection("citateSfantulIoanGuraDeAur");
    var citateSfantulIoanScararul = db.collection("citateSfantulIoanScararul");
    var citateSfantulIrineu = db.collection("citateSfantulIrineu");
    var citateSfantulPetru = db.collection("citateSfantulPetru");
    var citateSfantulSimeonNoulTeolog = db.collection("citateSfantulSimeonNoulTeolog");
    var citateSfantulVasileCelMare = db.collection("citateSfantulVasileCelMare");
    var citateSocrates = db.collection("citateSocrates");
    var citateStevenWright = db.collection("citateStevenWright");
    var citateSunTzu = db.collection("citateSunTzu");
    var citateThomasJefferson = db.collection("citateThomasJefferson");
    var citateWilliamShakespeare = db.collection("citateWilliamShakespeare");
    var citateWinstonChurchill = db.collection("citateWinstonChurchill");




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

    /*GET COOL GIFS*/
    this.getCoolGifs = function(req, res, next){
        coolGifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET FAIL GIFS*/
    this.getFailGifs = function(req, res, next){
        failGifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET FUNNY GIFS*/
    this.getFunnyGifs = function(req, res, next){
        funnyGifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET INTERESTING GIFS*/
    this.getInterestingGifs = function(req, res, next){
        interestingGifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET WOW GIFS*/
    this.getWowGifs = function(req, res, next){
        wowGifs.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " gifs");

            res.json(items);
        });
    }

    /*GET REACTION GIFS*/
    this.getReactionGifs = function(req, res, next){
        reactionGifs.find().toArray(function(err,items) {
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


    this.getCitateAbrahamLincoln = function(req, res, next){
        citateAbrahamLincoln.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateAlbertEinstein = function(req, res, next){
        citateAlbertEinstein.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateAristotel = function(req, res, next){
        citateAristotel.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateBenjaminFranklin = function(req, res, next){
        citateBenjaminFranklin.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateBuddha = function(req, res, next){
        citateBuddha.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateCharlesDickens = function(req, res, next){
        citateCharlesDickens.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateConfucius = function(req, res, next){
        citateConfucius.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateDalaiLama = function(req, res, next){
        citateDalaiLama.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateDemocrit = function(req, res, next){
        citateDemocrit.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateEuripide = function(req, res, next){
        citateEuripide.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateGeorgeBernardShaw = function(req, res, next){
        citateGeorgeBernardShaw.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateGeorgeWashington = function(req, res, next){
        citateGeorgeWashington.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateImmanuelKant = function(req, res, next){
        citateImmanuelKant.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateLaoTzu = function(req, res, next){
        citateLaoTzu.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateLuciusAnnaeusSeneca = function(req, res, next){
        citateLuciusAnnaeusSeneca.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateMahatmaGandhi = function(req, res, next){
        citateMahatmaGandhi.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateMaicaTereza = function(req, res, next){
        citateMaicaTereza.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateMarkTwain = function(req, res, next){
        citateMarkTwain.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateMartinLutherKingJr = function(req, res, next){
        citateMartinLutherKingJr.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateNapoleonBonaparte = function(req, res, next){
        citateNapoleonBonaparte.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateNealeDonaldWalsh = function(req, res, next){
        citateNealeDonaldWalsch.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateOscarWilde = function(req, res, next){
        citateOscarWilde.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitatePabloPicasso = function(req, res, next){
        citatePabloPicasso.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitatePlaton = function(req, res, next){
        citatePlaton.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitatePubliliusSyrus = function(req, res, next){
        citatePubliliusSyrus.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateRalphWaldoEmerson = function(req, res, next){
        citateRalphWaldoEmerson.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateRichardWurmbrand = function(req, res, next){
        citateRichardWurmbrand.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulAugustin = function(req, res, next){
        citateSfantulAugustin.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulCiprian = function(req, res, next){
        citateSfantulCiprian.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulIoanGuraDeAur = function(req, res, next){
        citateSfantulIoanGuraDeAur.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulIoanScararul = function(req, res, next){
        citateSfantulIoanScararul.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulIrineu = function(req, res, next){
        citateSfantulIrineu.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulPetru = function(req, res, next){
        citateSfantulPetru.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulSimeonNoulTeolog = function(req, res, next){
        citateSfantulSimeonNoulTeolog.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSfantulVasileCelMare = function(req, res, next){
        citateSfantulVasileCelMare.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSocrates = function(req, res, next){
        citateSocrates.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateStevenWright = function(req, res, next){
        citateStevenWright.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateSunTzu = function(req, res, next){
        citateSunTzu.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateThomasJefferson = function(req, res, next){
        citateThomasJefferson.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateWilliamShakespeare = function(req, res, next){
        citateWilliamShakespeare.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateWinstonChurchill = function(req, res, next){
        citateWinstonChurchill.find().toArray(function(err,items) {
            "use strict";
            if (err) throw err;

            console.log("err",err)
            console.log("Found " + items.length + " citate");

            res.json(items);
        });
    }

    this.getCitateAlteCitate = function(req, res, next){
        citateAltii.find().toArray(function(err,items) {
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
