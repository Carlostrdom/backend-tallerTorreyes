import { Router, response } from "express";
import { empleadoporcargo, allEmpleados, empleadoPorNombre } from "../controllers/empleados/read.js";

const router = Router();
router.get("/all", allEmpleados);
router.get("/cargo/:cargo", empleadoporcargo);
router.get('/nombre/:nombre', empleadoPorNombre);
export default router