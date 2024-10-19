const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5174', // Origen permitido (puedes cambiar este valor según tu configuración)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  }));
  

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restaurante_italiano',
});

DB.connect((err) =>{
    if (err){
        throw err;
    }
    console.log('conexion exitosa!!')
});

//DECLARAMOS RUTA PARA OBTENER LOS PRODUCTOS DE LA BD
//Y DEVOLVERLOS AL FRONTED EN FORAMTO JSON
app.get('/api/productos', (req, res) => {
    const SQL_QUERY = `
    SELECT p.nombre AS nombre, 
           p.descripcion, 
           pr.precio, 
           pr.fecha_inicio
    FROM productos p
    JOIN precios pr 
      ON p.id_producto = pr.id_producto
    WHERE pr.fecha_inicio = (SELECT MAX(fecha_inicio) 
                             FROM precios 
                             WHERE id_producto = p.id_producto);
    `;

    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            console.error('Error ejecutando la consulta: ', err);
            return res.status(500).send('Error en el servidor');
        }

        if (result.length > 0) {
            res.json(result); // Enviar la respuesta JSON
        } else {
            res.status(404).json({ mensaje: 'No se encontraron productos' });
        }
    });
});

//ECHAMOS 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});