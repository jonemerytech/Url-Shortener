const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/views', express.static(path.join(__dirname, '/views')));

// Connect to database
connectDB();

// app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/home', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.use('/success', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
