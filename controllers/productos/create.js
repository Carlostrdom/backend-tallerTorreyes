import Producto from "../../models/Producto.js";
let createProduct = async (req, res) => {
    try {
        let product = req.body;
        let newProduct = await Producto.create(product);
        return res.status(200).json({
            response: newProduct
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let createProducts = async (req, res) => {
    try {
        let products = req.body;
        let newProducts = await Producto.insertMany(products);
        return res.status(200).json({
            response: newProducts
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};



export { createProduct, createProducts }