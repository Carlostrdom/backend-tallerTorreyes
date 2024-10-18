import Employee from "../../models/Employee.js";

let createEmployee = async (req, res, next) => {
    try {
        let employee = req.body;
        let newemployee = await Employee.create(employee);
        return res.status(201).json({
            response: newemployee
        });
    } catch (error) {
        next(error);
    }
};

let createEmployees = async (req, res, next) => {
    try {
        let employees = req.body;
        let newemployees = await Employee.insertMany(employees);
        return res.status(201).json({
            response: newemployees
        });
    } catch (error) {
        next(error);
    }
};


export { createEmployee, createEmployees };