import { Router, response } from "express";
import { empleadoporcargo, allEmpleados, empleadoPorNombre } from "../controllers/empleados/read.js";
import { createEmpleado, createEmpleados } from "../controllers/empleados/create.js";

const router = Router();
router.get("/all", allEmpleados);
router.get("/cargo/:cargo", empleadoporcargo);
router.get('/nombre/:nombre', empleadoPorNombre);
router.post('/create', createEmpleado);
router.post('/createEmpleados', createEmpleados);
export default router