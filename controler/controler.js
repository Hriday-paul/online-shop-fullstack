const productModel = require("../model/productModel")
const getData = async(req,res)=>{
    const data = await productModel.find();
    await res.json(data)
}




module.exports = {
    getData
}