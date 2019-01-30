const express = require('express'),
    path = require('path'),
    port = process.env.PORT || 3000,
    app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rendering ejs files to site.
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/frontend', (req, res) => {
    res.render('frontend');
});

app.get('/backend', (req, res) => {
    res.render('backend');
});

app.post('/users/add', (req, res) => {
    console.log('FORM SUBMITTED');
});

app.listen(port, () => console.log('Ears up on port 3000'));