const getTouristSites = (req, res ) => {
    
    res.status(404).json({
        ok: true, 
        msg: 'get Tourist sites '
    }) 

} 

const getTouristSite = (req, res) => {
    const { id } = req.params
    res.status(404).json({
        ok: true, 
        params: id,
        msg: 'get Tourist site '
    })
}

const addTouristSite = (req, res) => {
    const touristSite = req.body; 

    res.status(404).json({
        ok: true, 
        touristSite
    })
}


const deleteTouristSite = (req, res) =>{
    const { id } = req.params

    res.status(404).json({
        ok: true, 
        id,
        mgs: 'successfully removed',
    })
}

const editTouristSite = (req, res)=>{
    const { id } = req.params
    
    const touristSite = req.body;

    res.json({
        ok: true,
        id, 
        touristSite, 
        msg: 'success'
    })
}

module.exports = {
    getTouristSites, 
    getTouristSite, 
    addTouristSite,
    deleteTouristSite,
    editTouristSite
}