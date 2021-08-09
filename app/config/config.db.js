const mongoose = require('mongoose');

const dbConnetion = async() =>{

   try {
        await mongoose.connect('', {
                            useNewUrlParser: true, 
                            useUnifiedTopology: true,
                            useCreateIndex: true,
                            useFindAndModify: false
                        });
        console.log('');
   } catch (error) {
       
        throw new Error('');
   }    
};

module.exports = {
    dbConnetion
};
