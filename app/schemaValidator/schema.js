const Joi = require('joi');

const schemaTouristSite = Joi.object({
    
    name: Joi.string()
        .required(),

    location: Joi.string()
        .required(),

    photo_url: Joi.string()
        .required(),

    lat: Joi.number()
        .required(),

    long: Joi.number()
        .required(),

    description: Joi.string()
            .required(),

    tags: Joi.string(),

})

module.exports = {
    schemaTouristSite
}