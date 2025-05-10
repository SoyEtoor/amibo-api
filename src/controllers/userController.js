const pool = require('../db');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  res.send('Usuario registrado');
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password]
      );
      if (result.rows.length > 0) {
        res.status(200).json({ message: 'Login exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
