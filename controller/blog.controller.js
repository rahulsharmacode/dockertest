const { BlogModel } = require("../model/blog.schema");

const blogfindAll =  async (req,res) => {
    try{
        const data = await BlogModel.find();
        res.status(200).json({status:true,message:"success",data});
    }
    catch(err){
        res.status(500).json({status:false,error : err});
    }
};

const blogAdd =  async (req,res) => {
    try{
        const data = await BlogModel.create(req.body);
        res.status(200).json({status:true,message:"success",data});
    }
    catch(err){
        res.status(500).json({status:false,error : err});
    }
};


module.exports = {blogfindAll,blogAdd};