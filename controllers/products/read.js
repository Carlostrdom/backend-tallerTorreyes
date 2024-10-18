import Product from "../../models/Product.js";
// See all products
let allProducts = async (req, res) => {
    try {
        const all = await Product.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

// View a product by name
let productByName = async (req, res, next) => {
    try {
        let name = req.params.name;
        let product = await Product.findOne({ name: name });

        return res.status(200).json({ response: product });
    } catch (error) {
        next(error);
    }
};

// View products by type
let productsByType = async (req, res, next) => {
    try {
        let type = req.params.type;
        let products = await Product.find({ type: type });
        return res.status(200).json({ response: products });
    } catch (error) {
        next(error);
    }
};

export { allProducts, productByName, productsByType };