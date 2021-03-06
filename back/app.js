var express = require('express');
var app = express();
const session = require('express-session');
const cors = require('cors')
        app.use(cors()) 
        app.use(
            session({
                secret: 'secret string',
                resave: false,
                saveUninitialized: false,
                cookie: { /* can add cookie related info here */ }
            })
        );
        app.get('/', function(req, res){
            if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
                req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
            req.session.pageCountByCurrentUserOrAnyNameYouWant++;
            res.send({
                pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
            });
        });
        var PORT = 5000;
        app.listen(PORT, function(err){
            if (err) console.log("Error in server setup")
            console.log("Server listening on Port", PORT);
        })
        
