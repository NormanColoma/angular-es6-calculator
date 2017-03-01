const express  = require('express');
const app      = express();                                        

app.use(express.static(__dirname + '/build'));

//app.set('view engine', 'html');
app.set('views', './build')


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(8080);