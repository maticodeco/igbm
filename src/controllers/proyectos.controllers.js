import { pool } from '../db.js';


export const selectProyectos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM proyectos')
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: 'Aglo fue mal'
        })
    }

};

export const selectProyecto = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM proyectos WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: 'proyecto no encontrado' })
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: 'Aglo fue mal'
        })
    }

};



export const createProyecto = (req, res) => res.send('creando proyectos');



export const updateProyecto = (req, res) => res.send('actualizando proyectos');


export const deletProyecto = (req, res) => res.send('borrando proyectos');