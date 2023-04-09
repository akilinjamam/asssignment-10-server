const express = require('express');
const app = express();
const cors = require('cors');

const homeEventRouter = require('./routes/v1/homeEvent.route');
const globalEventRouter = require('./routes/v1/globalEvent.route');
const bannerEventRouter = require('./routes/v1/bannerEvent.router');


// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("route is working now.......")
});



// router
app.use('/api/v1/homeEvents', homeEventRouter);
app.use('/api/v1/globalEvents', globalEventRouter);
app.use('/api/v1/bannerEvents', bannerEventRouter);


module.exports = app;