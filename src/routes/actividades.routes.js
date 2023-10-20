import { Router } from 'express';
import {selectActividades, selectActividad, createActividad, updateActividad, deletActividad} from '../controllers/actividades.controllers.js';


const router = Router();


router.get('/actividades',selectActividades);
router.get('/actividades/:id',selectActividad);
router.post('/actividades',createActividad);
router.put('/actividades',updateActividad);
router.delete('/actividades',deletActividad);


export default router;