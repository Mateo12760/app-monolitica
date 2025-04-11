const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Lista en memoria para almacenar productos
let productos = [];

// Ruta para listar productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Ruta para agregar productos
app.post('/productos', (req, res) => {
  const producto = req.body;
  if (producto.nombre && producto.precio) {
    productos.push(producto);
    res.status(201).json({ mensaje: 'Producto agregado correctamente', producto });
  } else {
    res.status(400).json({ error: 'Datos inválidos. Se requiere nombre y precio.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`App monolítica escuchando en http://localhost:${port}`);
});

/*
¿Por qué esta implementación es monolítica?
→ Toda la lógica (rutas, datos y servidor) está en un solo archivo sin separación de capas.

Desventajas:
→ Difícil de escalar.
→ Complicado de mantener si crece.
→ Poco reutilizable.
*/
