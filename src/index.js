const express = require('express');
const usersRoutes = require('./routes/users');
const mysql = require('mysql2')
const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);

const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_mysql_ekky',
});

app.use(express.json()); // ini dibuat untuk middleware agar dapat menerima hit json ke rest api kita

app.use("/users", usersRoutes);

app.use('/', (req, res) => {
    dbpool.execute('SELECT * FROM users', (err, rows) =>{
        if(err){
            res.json({
                message: 'connection failed'
            })
        }


        res.json({
            message: 'connection success',
            data: rows,
        })
    })
});

app.listen(4000, () => {
    console.log('connected')
});



// ini adalah pakem utama dari express js
// app.method(path, handler);
//  pertma kita inisiasi dahulu app. lalu method nya yang ingin kita gunakan lalu buka kurung () dan dalam kurung tersebut dapat kita isikan dengan path yang kita inisiasikan dan handler nya

// app.use("/", (req, res, next) => {
//     res.send('Testing');
// });

// app.get("/", (req, res) => {
//     res.json({
//         nama: "Ekky",
//         email: "ekky@osys.com",
//         gender: "Male"
//     });
// });

// app.post("/", (req, res) => {
//     res.send('Hello post method');
// });