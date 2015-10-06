var mongoose = require('mongoose');

// Create Day schema
var DaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    purchases: [{
        purchase: {type: String, required: true},
        store: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true}
    }]
});


// Export schema
module.exports = DaySchema;