const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')

const auth = require('./routers/auth');

app.use(bodyParser.json());
app.use(cors());
app.use('/api',auth);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  },()=>{
    console.log("conectet to db");
})
app.listen(4000);



