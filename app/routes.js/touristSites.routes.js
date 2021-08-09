const express = require('express');
const router = express.Router();

//tourist site controllers
const { 
        getTouristSites,
        getTouristSite,
        addTouristSite,
        editTouristSite,
        deleteTouristSite
} = require('../controllers.js/touristSites.controllers'); 


router.get('/', getTouristSites);
router.get('/:id', getTouristSite);
router.post('/', addTouristSite);
router.put('/:id', editTouristSite);
router.delete('/:id', deleteTouristSite);


module.exports = router;