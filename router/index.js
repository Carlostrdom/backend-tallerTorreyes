import { Router } from "express";
import empleadosrouter from "./empleados.js";
import tiendasrouter from "./tiendas.js";
import productosrouter from "./productos.js";

const router = Router();
router.use("/empleados", empleadosrouter);
router.use("/tiendas", tiendasrouter);
router.use("/productos", productosrouter);
export default router;