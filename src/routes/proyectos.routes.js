import { Router } from 'express';
import {selectProyectos, selectProyecto, createProyecto, updateProyecto, deletProyecto} from '../controllers/proyectos.controllers.js'


const router = Router();


router.get('/proyectos',selectProyectos);
router.get('/proyectos/:id',selectProyecto);
router.post('/proyectos',createProyecto);
router.put('/proyectos',updateProyecto);
router.delete('/proyectos',deletProyecto);



export default router;