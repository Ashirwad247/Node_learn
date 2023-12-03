const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres123',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

// Create the 'users' table
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`).catch(err => console.error('Error creating users table:', err));

// Import UserController or define it if not imported
const UserController = require('./controllers/UserController');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User registration route
// User registration route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, password];
      
      const result = await pool.query(query, values);
      const newUser = result.rows[0]; // Fetch the newly inserted user
      
      res.status(201).json(newUser); // Return the newly created use
      console.log('Data saved in the database')
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Registration form view
app.get('/register', (req, res) => {
  res.render('register');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
