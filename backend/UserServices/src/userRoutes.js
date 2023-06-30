import express from 'express'
import userController from './userController.js'
const router = express.Router();

// Define routes for user operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


 export default router
