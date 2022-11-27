const express = require('express');
const app = express();
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,  useUnifiedTopology: true}).then((result) => {
        console.log('connected to db')
      }).catch((err) => console.log(err));
      

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Middlewares
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);


app.listen(3000, () => console.log('Server Up and running'));