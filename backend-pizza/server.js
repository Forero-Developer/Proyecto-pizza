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

app.use(express.json())

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

app.post('/api/productos', (req, res) => {
    const { nombre, descripcion, precio } = req.body;

    // Validación de datos
    if (!nombre || !descripcion || !precio) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }

    // Insertar el nuevo producto en la tabla productos
    const SQL_QUERY_PRODUCTO = 'INSERT INTO productos (nombre, descripcion) VALUES (?, ?)';
    
    DB.query(SQL_QUERY_PRODUCTO, [nombre, descripcion], (err, result) => {
        if (err) {
            console.error('Error insertando el producto: ', err);
            return res.status(500).json({ error: 'Error al insertar el producto' });
        }

        // Obtener el id del producto recién insertado
        const idProducto = result.insertId;

        // Insertar el precio para el nuevo producto en la tabla precios
        const SQL_QUERY_PRECIO = 'INSERT INTO precios (id_producto, precio, fecha_inicio) VALUES (?, ?, NOW())';
        
        DB.query(SQL_QUERY_PRECIO, [idProducto, precio], (err) => {
            if (err) {
                console.error('Error insertando el precio: ', err);
                return res.status(500).json({ error: 'Error al insertar el precio' });
            }

            res.status(201).json({
                mensaje: 'Producto agregado exitosamente',
                producto: { id_producto: idProducto, nombre, descripcion, precio }
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});