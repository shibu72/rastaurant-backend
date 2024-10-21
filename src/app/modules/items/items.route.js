import express from "express";
import itemsController from './items.controller.js'

const router = express.Router();

router.post('/items', itemsController.postItem);
router.get('/items/:id', itemsController.getItem);
router.get('/items', itemsController.getAllItems);
router.patch('/items/:id', itemsController.updateItem);
router.delete('item/:id',itemsController.deleteItem);

const itemRoutes = router;

export default itemRoutes;