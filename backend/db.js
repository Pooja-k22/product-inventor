const mongoose = require('mongoose')

const connectString =process.env.DATABASE

 mongoose.connect(connectString).then((res)=>{
    console.log('connected success with database');
    
}).catch((err)=>{
    console.log('connection failed');
    
})



