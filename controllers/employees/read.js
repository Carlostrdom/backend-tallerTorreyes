import Employee from "../../models/Employee.js";
let allEmployees = async (req, res, next) => {
    try {
        const all = await Employee.find();
        return res.status(200).json({
            response: all
        });

    } catch (error) {

        next(error);
    }

}


let employeeByJob = async (req, res, next) => {
    try {
        let charge = req.params.charge
        let all = await Employee.find({ charge: charge })
        return res.status(200).json({
            response: all
        });

    } catch (error) {
        next(error);
    }

}



// View an employee by name
let employeeByName = async (req, res, next) => {
    try {
        let name = req.params.name;
        let employee = await Employee.findOne({ name: name });

        return res.status(200).json({ response: employee });
    } catch (error) {
        next(error);
    };

}
export { employeeByJob, allEmployees, employeeByName };