const mongoose = require('mongoose')

const connectionString = process.env.DATABASE 

mongoose.connect(connectionString).then(()=>{
    console.log('database connected successfully');
    
}).catch((err)=>{
    console.log('error in connecting to database', err);
    
})