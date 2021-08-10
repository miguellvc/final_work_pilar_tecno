const { Schema, model } = require('mongoose');

const TouristSiteSchema = Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    photo_url: {
        type: String,
    },
    lat: {
        type: Number
    }, 
    long : {
        type: Number
    },
    description: {
        type: String
    },
    tags: {
        type: String
    }
}, {  collection: 'touristSites' });


module.exports = model('TouristSites', TouristSiteSchema);