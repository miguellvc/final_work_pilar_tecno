const express = require('express'); 
const cors = require("cors");


require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());



//routes
const touristRouter = require('./app/routes.js/touristSites.routes'); 

app.use('/api/touristSite', touristRouter) 



app.get('/api', (req, res) =>{
    res.json({
        ok: true, 
        msg: 'ruta de places'
    });
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server ejecutandose');
})


