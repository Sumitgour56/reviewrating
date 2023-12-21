const { userModel } = require("../models/userModel")



let registration = async(req,res)=>{

    let user = await userModel.findOne({email:req.body.email})
    if(user){
        return res.status(409).send("email already exist")
        }
    let newuser = await userModel.create(req.body)
    res.send({success:true,massage:'Registered',data:newuser})
}

    let login = async(req,res)=>{
        let{email,password}=req.body;

        let user = await userModel.findOne({email})
        if(!user){return res.status(404).send({success:false,massage:'email not exist'})}
        if(password != user.password){return res.status(409).send({success:false,massage:'wrong password'})}
        res.status(200).send({success:true,massage:'login succesfully',data:user})

    }


module.exports={registration,login}