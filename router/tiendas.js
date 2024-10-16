import express from 'express';
import { allTiendas, tiendaPorDireccion, tiendaPorNombre } from '../controllers/tiendas/read.js';
import { createTienda, createTiendas } from '../controllers/tiendas/create.js';
const router = express.Router();

router.get('/all', allTiendas);
router.get('/direccion/:direccion', tiendaPorDireccion);
router.get('/nombre/:nombre', tiendaPorNombre);
router.post('/create', createTienda);
router.post('/createtiendas', createTiendas);

export default router;
