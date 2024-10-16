import Tienda from "../../models/Tienda.js";

let createTienda = async (req, res) => {
    try {
        let Tienda = req.body;
        let newTienda = await Tienda.create(Tienda);
        return res.status(200).json({
            response: newTienda
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};


let createTiendas = async (req, res) => {
    try {
        let createTiendas = req.body;
        let newTiendas = await Tienda.insertMany(createTiendas);
        return res.status(200).json({
            response: newTiendas
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};



export { createTienda, createTiendas };