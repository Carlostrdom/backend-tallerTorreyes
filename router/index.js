import { Router } from "express";
import employeesrouter from "./employees.js";
import storesrouter from "./stores.js";
import productsrouter from "./products.js";

const router = Router();
router.use("/employees", employeesrouter);
router.use("/stores", storesrouter);
router.use("/products", productsrouter);
export default router;