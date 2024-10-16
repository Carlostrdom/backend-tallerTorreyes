import express from 'express';
import { allProductos, productoPorNombre, productosPorTipo } from '../controllers/productos/read.js';
import { createProduct, createProducts } from '../controllers/productos/create.js';

const router = express.Router();

router.get('/all', allProductos);
router.get('/nombre/:nombre', productoPorNombre);
router.get('/tipo/:tipo', productosPorTipo);
router.post('/create', createProduct);
router.post('/createproductos', createProducts);


export default router;