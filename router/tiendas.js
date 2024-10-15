import express from 'express';
import { allTiendas, tiendaPorDireccion, tiendaPorNombre } from '../controllers/tiendas/read.js';

const router = express.Router();

router.get('/all', allTiendas);
router.get('/direccion/:direccion', tiendaPorDireccion);
router.get('/nombre/:nombre', tiendaPorNombre);

export default router;
