
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')

mongoose.connect(config.database)

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
})
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
})

const app = express()

const users = require('./routes/users')
const clients = require('./routes/clients')


const port = process.env.PORT || 3000

// CORS Middlerware //
app.use(cors())

// Set Static Folder //
app.use(express.static(path.join(__dirname, 'public')))

// Body Parse Middlerware //
app.use(bodyParser.json())

// Passport Middlerware //
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

// app.use('/client', client)
app.use('/users', users)
app.use('/clients', clients)

app.get('/', (req, res) => {
    res.send('It\'s Starts')
})

app.listen(port, () => {
    console.log('Its Starts' + ' on port: ' + port)
})