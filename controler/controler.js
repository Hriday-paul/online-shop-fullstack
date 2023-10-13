const productModel = require("../model/productModel");
const demoModel = require("../model/demoModel");
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const getData = async (req, res) => {
    try {
        const data = await productModel.find({}).select("-image").limit(5).sort({ createdAt: -1 });
        res.send({
            status: true,
            message : "All product get successfully",
            data
        })
    }
    catch (err) {
        res.send({
            status: false,
            message : "Get product Something wents wrong",
            error: err
        })
    }
}

const postData = async (req, res) => {
    try {
        const file = req.files.imageFile;
        const newProduct = await productModel({
            id: uuidv4(),
            product_name: req.body.productName,
            product_model: req.body.productModel,
            brand: req.body.brand,
            stock: req.body.stock,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.categoryName,
            createdAt: Date.now(), 
        })
        if (file) {
            newProduct.image.data = file.data;
            newProduct.image.contentType = file.mimetype;
        }
        await newProduct.save();
        await res.json({
            status: true,
            message: "Added new product successfully",
            data: newProduct
        })
    }
    catch (err) {
        res.send({
            status: false,
            message : "Added new product something wents wrong",
            error: err
        })
    }

}

const demoControler = async (req, res) => {
    const name = req.body.name;
    const file = req.files.photo;

    await res.send(
        {
            status: true,
            message: "demotest success",
            data: {
                name: name,
                file
            }
        }
    )
    console.log(file)
}


const getPhoto = async (req, res) => {
    try {
        const product = await productModel.findOne({ id: req.params.id }).select("image");
        if (product && product.image && product.image.data) {
            res.set("Content-Type", product.image.contentType);
            return res.send(product.image.data);
        } else {
            return res.status(404).send("Image not found");
        }
    } catch (err) {
        res.send({
            status: false,
            message : "Get photo an error",
            error: err
        })
    }
};



module.exports = {
    getData,
    postData,
    demoControler,
    getPhoto
}