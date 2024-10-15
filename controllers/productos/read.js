import Producto from "../../models/Producto.js";

// Ver todos los productos
let allProductos = async (req, res) => {
    try {
        const all = await Producto.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

// Ver un producto por su nombre
let productoPorNombre = async (req, res) => {
    try {
        let nombre = req.params.nombre;
        let producto = await Producto.findOne({ nombre: nombre });
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res.status(200).json({ response: producto });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

// Ver productos según su tipo
let productosPorTipo = async (req, res) => {
    try {
        let tipo = req.params.tipo;
        let productos = await Producto.find({ tipo: tipo });
        return res.status(200).json({ response: productos });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export { allProductos, productoPorNombre, productosPorTipo };
