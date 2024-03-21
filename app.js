const express = require('express');
const app = express();
const cors = require('cors');


const { routes } = require('./routing_path/routing_path');

// middleware
app.use(cors());
app.use(express.json());

for (let i = 0; i < routes.length; i++) {
    app.use(`/api/v1/${routes[i].path}`, routes[i].variable)
}

app.get("/", (req, res) => {
    res.json({
        message: "hello travelbea"
    })
});


module.exports = app;