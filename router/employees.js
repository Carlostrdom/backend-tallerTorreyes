import { Router, response } from "express";
import { employeeByJob, allEmployees, employeeByName } from "../controllers/employees/read.js";
import { createEmployee, createEmployees } from "../controllers/employees/create.js";

const router = Router();
router.get("/all", allEmployees);
router.get("/charge/:charge", employeeByJob);
router.get('/name/:name', employeeByName);
router.post('/create', createEmployee);
router.post('/createEmployees', createEmployees);
export default router