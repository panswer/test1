const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

const pathRoot = path.resolve(__dirname, './www');
const pathIndex = path.resolve(pathRoot, 'index.html');

if (!fs.existsSync(pathIndex)) {
    console.log("Index did't find");
    process.exit(1);
}

app.use(express.static(pathRoot));

const port = process.env.PORT || 3000;

app.listen(port, err =>
    err ?
    console.log(err) :
    console.log(`Server on`)
);