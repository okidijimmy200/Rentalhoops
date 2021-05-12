const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        enum: ['Apartment', 'Bungalow', 'villas', 'RowHouses'],
        required: 'Type of house is required'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    location: {
        type: String,
        required: 'Location is required'   
    },
    price: {
        type: Number,
        required: 'Price is required',
    },
    bedRooms: {
        type: Number,
        required: 'Please include the number of rooms'
    },
    bathRooms: {
        type: Number,
        required: false
    },
    familyNumber: {
        type: String,
        enum: ['Single', 'Nuclear', 'Big']
    },
    category: {
        type: String,
        enum: ['GuluCity', 'MetroplitanGulu']
    },
    owner:{
        type: mongoose.Schema.ObjectId, ref: 'User'
    }
})

module.exports =  mongoose.model('Property', PropertySchema)