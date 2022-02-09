const session = require('express-session');
        
        app.use(
            session({
                secret: 'secret string',
                resave: false,
                saveUninitialized: false,
                cookie: { /* can add cookie related info here */ }
            })
        );
