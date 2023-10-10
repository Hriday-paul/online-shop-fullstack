const productModel = require("../model/productModel")
const { v4: uuidv4 } = require('uuid');
const getData = async (req, res) => {
    const data = await productModel.find();
    await res.json(data)
}

const postData = async (req, res) => {
    const newProduct = await productModel({
        id : uuidv4(),
        product_name: req.body.productName,
        image: req.file.filename,
        product_model : req.body.productModel,
        brand : req.body.brand,
        stock : req.body.stock,
        description : req.body.description,
        price : req.body.price,
        discount : req.body.discount,
    })
    await newProduct.save()
    res.json({ add: "post success" })
}


module.exports = {
    getData,
    postData
}