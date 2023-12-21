const express = require('express');
const { userRoutes } = require('./Routes/userRoutes');
const { companyRoutes } = require('./Routes/companyRoutes');
require('./Dbconnection/connection')
const app = express();
PORT =7000
app.use(express.json())
app.get('/',(req,res)=>{
         res.send("TESTING")
     })

app.use('/user',userRoutes)
app.use('/company',companyRoutes)


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})