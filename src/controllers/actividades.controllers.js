import { pool } from '../db.js';


export const selectActividades = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Actividades')
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: 'Aglo fue mal'
        })
    }

};

export const selectActividad = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Actividades WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: 'Actividad no encontrada' })
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: 'Aglo fue mal'
        })
    }


};



export const createActividad = (req, res) => res.send('creando Actividades');



export const updateActividad = (req, res) => res.send('actualizando Actividades');


export const deletActividad = (req, res) => res.send('borrando Actividades');