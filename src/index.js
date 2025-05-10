const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Welcome to Amibo API');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
