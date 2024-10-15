import express from 'express';
import { allProductos, productoPorNombre, productosPorTipo } from '../controllers/productos/read.js';

const router = express.Router();

router.get('/all', allProductos);
router.get('/nombre/:nombre', productoPorNombre);
router.get('/tipo/:tipo', productosPorTipo);

export default router;