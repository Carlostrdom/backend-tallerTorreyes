import Empleado from "../../models/Empleado.js";
let allEmpleados = async (req, res) => {
    try {
        const all = await Empleado.find();
        return res.status(200).json({
            response: all
        });

    } catch (error) {

        return res.status(500).json({
            error: error
        })

    }

}


let empleadoporcargo = async (req, res) => {
    try {
        let cargo = req.params.cargo
        let all = await Empleado.find({ cargo: cargo })
        return res.status(200).json({
            response: all
        });

    } catch (error) {

        return res.status(500).json({
            error: error
        })

    }

}



// Ver un empleado por su nombre
let empleadoPorNombre = async (req, res) => {
    try {
        let nombre = req.params.nombre;
        let empleado = await Empleado.findOne({ nombre: nombre });
        if (!empleado) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        return res.status(200).json({ response: empleado });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
export { empleadoporcargo, allEmpleados, empleadoPorNombre };
