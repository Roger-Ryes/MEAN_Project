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