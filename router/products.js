import express from 'express';
import { allProducts, productByName, productsByType } from '../controllers/products/read.js';
import { createProduct, createProducts } from '../controllers/products/create.js';

const router = express.Router();

router.get('/all', allProducts);
router.get('/name/:name', productByName);
router.get('/type/:type', productsByType);
router.post('/create', createProduct);
router.post('/createproducts', createProducts);


export default router;