const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const mongoose = require('mongoose')
const config = require('./config/database')



const app = express();


// mongoose connection
mongoose.connect(config.database, {
        useNewUrlParser: true, // Need this for API support
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));




// express static folder
app.use(express.static(path.join(__dirname, ('public'))));

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyparser.json());

// passport middleware
app.use(passport.initialize())
app.use(passport.session())


require('./config/passport')(passport);


// Route
// app.get('/', (req, res) => {
//     res.send('hello')
// })

app.use('/user', require('./routes/user'))









// port number
const PORT = process.env.process || 3000;

// Start server
app.listen(PORT, () => `server started on port ${PORT}`)