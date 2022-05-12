const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, err =>
    err ?
    console.log(err) :
    console.log(`Server on`)
);