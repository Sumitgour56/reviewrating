const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sumit')
.then(()=>console.log('mongodb connected')).catch(()=>{console.log('not connected')})