import { pool } from '../db.js';

export const selectUsuarios = async (req, res) => {
   try {
      const [rows] = await pool.query('SELECT * FROM usuarios')
      res.json(rows)
   } catch (error) {
      res.status(500).json({
         message: 'Aglo fue mal'
      })
   }


};

export const selectUsuario = async (req, res) => {

   try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id])
      if (rows.length <= 0) return res.status(404).json({ message: 'usuario no encontrado' })
      res.json(rows[0])
   } catch (error) {
      res.status(500).json({
         message: 'Aglo fue mal'
      })
   }

};



export const createUsuarios = (req, res) => res.send('creando usuarios');



export const updateUsuarios = (req, res) => res.send('actualizando usuarios');


export const deleteUsuarios = (req, res) => res.send('borrando usuarios');