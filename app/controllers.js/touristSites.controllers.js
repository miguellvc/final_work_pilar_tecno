const TouristSite = require('../models/touristSites.model')

const getTouristSites = async(req, res ) => {
    
    const touristSite = await TouristSite.find({}, 'name location photo_url lat long description tags');
    
    res.json({
        ok: true, 
        touristSite
    }) 

} 

const getTouristSite = async(req, res) => {
    
    const _id = req.params.id
    
    try {
        
        const touristSiteDB = await TouristSite.findById(_id);

        if(!touristSiteDB){

            res.status(404).json({
                ok: false, 
                msg: "error, the tourist site does not exist"
            })
        }

        res.status(404).json({
            ok: true, 
            touristSiteDB
        })

    } catch (error) {
    
        res.status(500).json({
            ok:false, 
            msg: "unexpected error"
        })
    }
}

const addTouristSite = async(req, res) => {
    
    const { name } = req.body;

    try {

        const existsSite = await TouristSite.findOne({ name });

        if ( existsSite ) {
            return res.status(400).json({
                ok: false,
                msg: 'error, the tourist site is already registered'
            });
        }

        const touristSite = new TouristSite( req.body );
    
        await touristSite.save();

        res.json({
            ok: true,
            touristSite,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'unexpected error'
        });
    }

}

const editTouristSite = async(req, res)=>{
    
    const _id = req.params.id
    
    const touristSite = req.body;
    
    try { 

        const touristSiteDB = await TouristSite.findById(_id);

        if(!touristSiteDB){

           return res.status(404).json({
                ok: false, 
                msg: "error, the tourist site does not exist"
            })
        }

        const updatedData = await TouristSite.findOneAndUpdate( _id, touristSite );

        res.status(404).json({
            ok: true,
            TouristSite: updatedData
        });

    }catch(error) {

        res.status(500).json({
            ok: false,
            msg: 'unexpected error'
        })
    }
}

const deleteTouristSite = async(req, res) =>{
    
    const _id = req.params.id
    
    try {
        
        const touristSiteDB = await TouristSite.findById(_id);

        if(!touristSiteDB){

            res.status(404).json({
                ok: false, 
                msg: "error, the tourist site does not exist"
            })
        }

        await TouristSite.findByIdAndDelete(_id);

        res.status(404).json({
            ok: true, 
            msg: "_tourist site removed"
        })

    } catch (error) {
    
        res.status(500).json({
            ok:false, 
            msg: "the tourist site cannot be deleted"
        })
    }

}



module.exports = {
    getTouristSites, 
    getTouristSite, 
    addTouristSite,
    editTouristSite,
    deleteTouristSite
}