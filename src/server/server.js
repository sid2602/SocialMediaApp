const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
require('dotenv/config')

const auth = require('./routers/auth');



app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/uploads',express.static('public'));
app.use('/uploads',express.static('file'));
app.use('/api',auth);


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  },()=>{
    console.log("conectet to db");
})
app.listen(4000);



