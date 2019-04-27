const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

//app.use(express.static('public'))
app.use("/styles",express.static(__dirname + "/styles"));
app.get('/', (req, res) => res.render("home.ejs"))

app.listen(port)