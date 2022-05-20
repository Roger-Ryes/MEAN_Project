# MEAN
## nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
ref: https://www.npmjs.com/package/nodemon


## Script package.json

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js",
        "start": "node index.js"
    },

Para ejecutar "dev" y "start" 

    npm run dev
    npm start


## Backend

    npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose
    or
    npm i bcryptjs@^2.4.3
 
### bcryptjs
Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.
ref: https://www.npmjs.com/package/bcryptjs

### cors
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
ref: https://www.npmjs.com/package/cors

### dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
ref: https://www.npmjs.com/package/dotenv

### express
Fast, unopinionated, minimalist web framework for node.
ref: https://www.npmjs.com/package/express

### express-validator
An express.js middleware for validator.
ref: https://www.npmjs.com/package/express-validator

### jsonwebtoken
An implementation of JSON Web Tokens.
This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
ref: https://www.npmjs.com/package/jsonwebtoken

### mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
ref: https://www.npmjs.com/package/mongoose

## Router express
ref: https://expressjs.com/es/guide/routing.html

## dotenv
Create a .env file in the root of your project
As early as possible in your application, import and configure dotenv:

    require('dotenv').config()
    console.log(process.env) // remove this after you've confirmed it working

## express.static
This is a built-in middleware function in Express. It serves static files and is based on serve-static.
The function determines the file to serve by combining req.url with the provided root directory. 

    app.use(express.static('public'))
    // or
    var options = {
        dotfiles: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        index: false,
        maxAge: '1d',
        redirect: false,
        setHeaders: function (res, path, stat) {
            res.set('x-timestamp', Date.now())
        }
    }
    app.use(express.static('public', options))

## Validator
ref: https://express-validator.github.io/docs/


# MongoDB
https://cloud.mongodb.com/v2/6019c8c5fe752c43f4ac55a1#clusters

# Hash password
https://www.npmjs.com/package/bcryptjs

# JSON WEB TOKEN JWT
https://jwt.io/


# DEPLIEGUE EN BACKEND
https://www.heroku.com/
pass: face*#

## Despliege del front
Una vez el producto del front este listo, se envia todo los archivos generados, a la carpeta "public"

## Compatibilidad de Routas Metodo 2 Backend
Uso de sendFile y path de express
https://www.geeksforgeeks.org/express-js-res-sendfile-function/

    // Without middleware
    app.get('/', function(req, res){
        var options = {
            root: path.join(__dirname)
        };
        
        var fileName = 'Hello.txt';
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err);
            } else {
                console.log('Sent:', fileName);
            }
        });
    });

## Subir en HEROKU 
Se debe seguir los pasos:
https://dashboard.heroku.com/apps/auth-mean-ap/deploy/heroku-git