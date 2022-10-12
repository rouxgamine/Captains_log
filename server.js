
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.set('view engine', 'jsx') // register the jsx view engine
app.engine('jsx', require('jsx-view-engine').createEngine()) 


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
    // req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    res.send(req.body)
    // res.send('received')
  })

// EDIT (not applicable in an api)


// SHOW ---- READ ---- GET


/* END ROUTES */


// Tell the app to listen on a port
app.listen(3003, () => {
    console.log('Listening on Port 3003')
})