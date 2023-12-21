const { default: mongoose } = require("mongoose");


const companyschema = new mongoose.Schema({

    companyName :{
        type:String,
        require:true,
    },
    location :{
        type:String,
        require:true,
        default :false,
    },
    city:{
        type:String,
        require:true,
    },
    founded :{
        type:String,
        require:true,
    },
    isActive :{
        type:String,
        deafult:true,
    },
    UserId : {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref :"usermodel",
    },
    company_logo:{
        type:String,
        
    },

},
{timestamps : true}
);
let companyModel = new mongoose.model("companyModel",companyschema);
module.exports ={companyModel};