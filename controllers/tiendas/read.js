import Tienda from "../../models/Tienda.js";

// Ver todas las tiendas
let allTiendas = async (req, res) => {
    try {
        const all = await Tienda.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

// Ver una tienda según su dirección
let tiendaPorDireccion = async (req, res) => {
    try {
        let direccion = req.params.direccion;
        let tienda = await Tienda.findOne({ direccion: direccion });
        if (!tienda) {
            return res.status(404).json({ message: "Tienda no encontrada" });
        }
        return res.status(200).json({ response: tienda });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

// Ver una tienda según su nombre
let tiendaPorNombre = async (req, res) => {
    try {
        let nombre = req.params.nombre;
        let tienda = await Tienda.findOne({ nombre: nombre });
        if (!tienda) {
            return res.status(404).json({ message: "Tienda no encontrada" });
        }
        return res.status(200).json({ response: tienda });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export { allTiendas, tiendaPorDireccion, tiendaPorNombre };
