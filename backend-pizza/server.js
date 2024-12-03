const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Permite solicitudes desde el frontend (ajusta según tu configuración)
app.use(cors({
    origin: 'http://localhost:5173', // Aquí pon la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

// Configuración de conexión con la base de datos en Railway
const DB = mysql.createConnection({
    host: 'junction.proxy.rlwy.net',  // Cambia a este host proporcionado por Railway
    user: 'root',                     // Usuario proporcionado por Railway

    
    password: 'vevzGCjrRZoaVWFCcDxKQPIXJOClvWzl',  // Contraseña proporcionada por Railway
    database: 'pizzeria',              // Nombre de la base de datos en Railway
    port: 11087,                      // Puerto proporcionado por Railway
    connectTimeout: 10000             // Tiempo de espera mayor si es necesario
});


DB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa con la base de datos en la nube');
});

// Declaramos ruta para obtener los productos de la base de datos
app.get('/api/productos', (req, res) => {
    const SQL_QUERY = `
    SELECT p.id_producto,  
           p.nombre AS nombre, 
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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});