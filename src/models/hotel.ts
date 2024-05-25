import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    googleMapLink: {    
        type: String,
        required: false
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        default: 'Kenya'
    },
    contactPerson:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    rooms:{
        type: Array,
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    bookings:{
        type: Number,
        default: 0
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;