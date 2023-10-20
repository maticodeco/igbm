import { Router } from 'express';
import { selectUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, selectUsuario} from '../controllers/usuarios.controllers.js';





const router = Router();



router.get('/usuarios',selectUsuarios);
router.get('/usuarios/:id',selectUsuario);
router.post('/usuarios',createUsuarios);
router.put('/usuarios',updateUsuarios);
router.delete('/usuarios', deleteUsuarios);


export default router;
