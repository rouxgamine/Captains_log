require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const Log = require('./models/logs')
const app = express()

app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.set('view engine', 'jsx') // register the jsx view engine
app.engine('jsx', require('jsx-view-engine').createEngine()) 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/*Start Routes */

// INDEX --- READ --- GET
// app.get('/logs/', (req, res) => {

// }
// )

// NEW (Not applicable in an api)
app.get('/logs/new', (req, res) => {
    res.render('logs/New')
  })


// DELETE


// UPDATE



// CREATE
app.post('/logs', (req, res) => {
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.create(req.body, (err, createdLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
  })

// EDIT (not applicable in an api)


// SHOW ---- READ ---- GET


/* END ROUTES */


// Tell the app to listen on a port
app.listen(3003, () => {
    console.log('Listening on Port 3003')
})