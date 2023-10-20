import { pool } from '../db.js';

export const selectRoles = async (req, res) => {

   try {
      const [rows] = await pool.query('SELECT * FROM roles')
      res.json(rows)
   } catch (error) {
      res.status(500).json({
         message: 'Aglo fue mal'
      })
   }

};

export const selectRol = async (req, res) => {

   try {
      const [rows] = await pool.query('SELECT * FROM roles WHERE id = ?', [req.params.id])
      if (rows.length <= 0) return res.status(404).json({ message: 'usuario no encontrado' })
      res.json(rows[0])
   } catch (error) {
      res.status(500).json({
         message: 'Aglo fue mal'
      })
   }

};



export const createRol = (req, res) => res.send('creando usuarios');



export const updateRol = (req, res) => res.send('actualizando usuarios');


export const deleteRol = (req, res) => res.send('borrando usuarios');