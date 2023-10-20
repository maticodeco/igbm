import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import rolesRoutes from './routes/roles.routes.js';
import proyectosRoutes from './routes/proyectos.routes.js';
import actividadesRoutes from './routes/actividades.routes.js';



const app = express();


app.use('/api', actividadesRoutes);
app.use('/api', proyectosRoutes);
app.use('/api', rolesRoutes);
app.use('/api', usuariosRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})


export default app;