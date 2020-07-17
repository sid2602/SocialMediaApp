const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  },()=>{
    console.log("conectet to db");
})
app.listen(4000);



