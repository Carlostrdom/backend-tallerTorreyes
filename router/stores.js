import express from 'express';
import { allStores, storeByAddress, storeByName } from '../controllers/stores/read.js';
import { createStore, createStores } from '../controllers/stores/create.js';
const router = express.Router();

router.get('/all', allStores);
router.get('/address/:address', storeByAddress);
router.get('/name/:name', storeByName);
router.post('/create', createStore);
router.post('/createstores', createStores);

export default router;