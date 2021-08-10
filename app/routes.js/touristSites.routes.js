const express = require('express');
const router = express.Router();
//Middlewares
const { validatorTouristSite } = require('../middlewares/validator-touristSite');
//Schema Validator 
const { schemaTouristSite } = require('../schemaValidator/schema')
//tourist site controllers
const { 
        getTouristSites,
        getTouristSite,
        addTouristSite,
        editTouristSite,
        deleteTouristSite
} = require('../controllers.js/touristSites.controllers'); 

//Routes
router.get('/', getTouristSites);
router.get('/:id', getTouristSite);
router.post('/', validatorTouristSite(schemaTouristSite), addTouristSite);
router.put('/:id', editTouristSite);
router.delete('/:id', deleteTouristSite);


module.exports = router;