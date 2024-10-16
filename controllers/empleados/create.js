import Empleado from "../../models/Empleado.js";

let createEmpleado = async (req, res) => {
    try {
        let empleado = req.body;
        let newempleado = await Empleado.create(empleado);
        return res.status(200).json({
            response: newempleado
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let createEmpleados = async (req, res) => {
    try {
        let empleados = req.body;
        let newempleados = await Empleado.insertMany(empleados);
        return res.status(200).json({
            response: newempleados
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};


export { createEmpleado, createEmpleados };