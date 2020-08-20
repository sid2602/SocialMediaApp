const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
require('dotenv/config')

const PORT = process.env.PORT || 4000;

const auth = require('./routers/auth');
const profile = require('./routers/profile')
const posts = require('./routers/posts')

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use('/uploads',express.static('public'));
app.use('/uploads',express.static('file'));
app.use('/api',auth,profile,posts);



mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  },()=>{
    console.log("conectet to db");
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build/'))
}


app.listen(PORT,console.log(`Server is starting at ${PORT}`));



