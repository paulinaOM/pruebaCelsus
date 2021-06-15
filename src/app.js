const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const estadoRutas = require('./routes/estado') ;
const nacionalidadRutas = require('./routes/nacionalidad') ;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/celsus', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('db is connected'))
.catch(err => console.log(err));

// Settings
app.set('port', process.env.PORT || 3000);


app.use(bodyParser.json()); 
app.use(morgan('dev')); 

// Start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'))
});

//routes
app.use('/estado', estadoRutas);
app.use('/nacionalidad', nacionalidadRutas);

