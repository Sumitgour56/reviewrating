const { default : mongoose}=require("mongoose")

const reviewschema = new mangoose.Schema({

Subject :{
    type:String,
    require:true,
},
review :{
    type:String,
    require:true,
    
},
rating:{
    type:Number,
    require:true,
},
isActive :{
    type:Boolean,
    deafult:true,
},
company_Id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"companyModel",
},
UserId : {
    type: mongoose.Schema.Types.ObjectId,
    require:true,
    ref :"usermodel",
},

},
{timestamps : true}
);
let reviewmodel = new mongoose.model("reviewModel",reviewSchema);
module.exports ={reviewModel};