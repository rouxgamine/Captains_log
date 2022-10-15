const mongoose = require('mongoose')

// Make a Schema 

const logSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true }, 
    shipIsBroken: Boolean
})
// { 
//     timestamps: true 
// })

// Make a Model From the Schema
const Log = mongoose.model('Log', logSchema) // we make Log collection inside the Database 

// Export the Model For Use in the App 
module.exports = Log 