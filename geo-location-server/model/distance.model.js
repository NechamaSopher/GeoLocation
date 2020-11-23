const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let distanceSchema = new Schema({
    source: {
        type: String
    },
    destination: {
        type: String
    },
    distance:{
        type:Number
    },
    hits:{
      type:Number
    }
}, {
    collection: 'Distance'
})

module.exports = mongoose.model('DistanceSchema', distanceSchema)