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