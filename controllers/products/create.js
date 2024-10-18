import Product from "../../models/Product.js";
let createProduct = async (req, res) => {
    try {
        let product = req.body;
        let newProduct = await Product.create(product);
        return res.status(201).json({
            response: newProduct
        });
    } catch (error) {
        next(error);
    }
};

let createProducts = async (req, res, next) => {
    try {
        let products = req.body;
        let newProducts = await Product.insertMany(products);
        return res.status(201).json({
            response: newProducts
        });
    } catch (error) {
        next(error);
    }
};



export { createProduct, createProducts }