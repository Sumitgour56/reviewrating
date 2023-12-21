const { companyModel } = require("../models/companymodel")

let createcompany = async(req,res)=>{
    let oldcompany = await companyModel.findOne({companyName:req.body.companyName})
    if(oldcompany){return res.status(401).send({succes:false,massage:"commpany Already exist"})
    }
    // res.send("running")
    console.log(req.body)

    let newcompany = await companyModel.create(req.body)
    res.send(201).send({success:true,massage:"company Created",data : newcompany})
}
let companylist = async(req,res)=>{
    let allcompany = await companyModel.find();
    if(allcompany.length==0){return res.status(404).send({succes:false,massage:"no massage found"})}
    res.status(200).send({success:true,massage:"all company",total_company : allcompany.length,
    data:allcompany})

}
module.exports={createcompany,companylist}