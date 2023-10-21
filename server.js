// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

app.use(cors());


// Create a connection pool to your MySQL database
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Rushabh@2003',
    database: 'lawyer_finder', // Replace with your database name
});

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        /* const { name, objective, experience, education, specialty, contact, cv_path, image_path } = req.body;
        await connection.execute('INSERT INTO lawyer_info (name, objective, experience, education, specialty, contact, cv_path, image_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, objective, experience, education, specialty, contact, cv_path, image_path]); */
        const { name, objective, experience, education, specialty, contact} = req.body;
        await connection.execute('INSERT INTO lawyers (name, objective, experience, education, specialty, contact) VALUES (?, ?, ?, ?, ?, ?)', [name, objective, experience, education, specialty, contact]); 
        
        connection.release();
        res.status(200).json({ message: 'Data submitted successfully' });
    } catch (err) {
        console.error('Error inserting data into the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
