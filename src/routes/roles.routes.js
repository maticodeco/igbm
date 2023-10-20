import {Router} from 'express';
import {selectRoles, selectRol, createRol, updateRol, deleteRol} from '../controllers/roles.controllers.js'

const router = Router();




router.get('/roles',selectRoles);
router.get('/roles/:id',selectRol);
router.post('/roles',createRol);
router.put('/roles',updateRol);
router.delete('/roles',deleteRol);



export default router;