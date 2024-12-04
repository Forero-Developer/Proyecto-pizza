const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Permite solicitudes desde el frontend (ajusta según tu configuración)
app.use(cors({
    origin: 'http://localhost:5173', // URL del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

app.use(express.json()); // Para poder leer el cuerpo de las solicitudes como JSON

// Configuración de conexión con la base de datos en Railway
const DB = mysql.createConnection({
    host: 'junction.proxy.rlwy.net',  // Cambia a este host proporcionado por Railway
    user: 'root',                     // Usuario proporcionado por Railway
    password: 'vevzGCjrRZoaVWFCcDxKQPIXJOClvWzl',  // Contraseña proporcionada por Railway
    database: 'pizzeria',             // Nombre de la base de datos en Railway
    port: 11087,                      // Puerto proporcionado por Railway
    connectTimeout: 10000             // Tiempo de espera mayor si es necesario
});

// Conexión exitosa a la base de datos
DB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa con la base de datos en la nube');
});

// Ruta de inicio de sesión (Login)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
    }

    const SQL_QUERY = 'SELECT * FROM usuarios WHERE email = ?';

    DB.query(SQL_QUERY, [email], (err, result) => {
        if (err) {
            console.error('Error en la consulta: ', err);
            return res.status(500).send('Error en el servidor');
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuario = result[0];

        // Compara la contraseña ingresada con la almacenada
        bcrypt.compare(password, usuario.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparando contraseñas: ', err);
                return res.status(500).send('Error en el servidor');
            }

            if (!isMatch) {
                return res.status(400).json({ error: 'Contraseña incorrecta' });
            }

            res.json({ mensaje: 'Inicio de sesión exitoso' });
        });
    });
});

// Ruta de registro de usuario (con encriptación de contraseña)
app.post('/api/registro', (req, res) => {
    const { email, password, nombre, apellido, telefono, direccion, rol } = req.body;

    if (!email || !password || !nombre || !apellido || !telefono || !direccion || !rol) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Encriptar la contraseña
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error encriptando la contraseña: ', err);
            return res.status(500).json({ error: 'Error al encriptar la contraseña' });
        }

        const SQL_QUERY = 'INSERT INTO usuarios (email, password, nombre, apellido, telefono, direccion, rol) VALUES (?, ?, ?, ?, ?, ?, ?)';

        DB.query(SQL_QUERY, [email, hashedPassword, nombre, apellido, telefono, direccion, rol], (err) => {
            if (err) {
                console.error('Error registrando al usuario: ', err);
                return res.status(500).json({ error: 'Error al registrar al usuario' });
            }

            res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
        });
    });
});

// Ruta para obtener productos, accesible para todos
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

// Ruta para agregar un producto, ahora accesible para todos
app.post('/api/productos', (req, res) => {
    const { nombre, descripcion, precio } = req.body;

    if (!nombre || !descripcion || !precio) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const SQL_QUERY_PRODUCTO = 'INSERT INTO productos (nombre, descripcion) VALUES (?, ?)';
    
    DB.query(SQL_QUERY_PRODUCTO, [nombre, descripcion], (err, result) => {
        if (err) {
            console.error('Error insertando el producto: ', err);
            return res.status(500).json({ error: 'Error al insertar el producto' });
        }

        const idProducto = result.insertId;

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

// Ruta para eliminar un producto, accesible para todos
app.delete('/api/productos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Primero, eliminar el precio asociado en la tabla 'precios'
        const SQL_QUERY_PRECIO = 'DELETE FROM precios WHERE id_producto = ?';

        DB.query(SQL_QUERY_PRECIO, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el precio: ', err);
                return res.status(500).json({ error: 'Error al eliminar el precio' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Precio no encontrado para este producto' });
            }

            console.log(`Precio de producto con ID: ${id} eliminado`);

            // Ahora, eliminar el producto de la tabla 'productos'
            const SQL_QUERY_PRODUCTO = 'DELETE FROM productos WHERE id_producto = ?';

            DB.query(SQL_QUERY_PRODUCTO, [id], (err, result) => {
                if (err) {
                    console.error('Error al eliminar el producto: ', err);
                    return res.status(500).json({ error: 'Error al eliminar el producto' });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ error: 'Producto no encontrado' });
                }

                console.log(`Producto con ID: ${id} eliminado`);

                res.status(200).json({ mensaje: 'Producto y precio eliminados correctamente' });
            });
        });
    } catch (error) {
        console.log('Error al eliminar el producto y su precio: ', error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
