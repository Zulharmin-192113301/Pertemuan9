var mysql = require ('mysql')

var conn = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : ''
})

conn.connect((err) =>{
    if (err)
    console.log('Masalah di MySQL' + err);
    else
    console.log('Terhubung ke Database');

    conn.query('CREATE DATABASE db_9_zul', (err, result) => {
        if (err)
        console.error('Gagal membuat database' + err)
        else
        console.log('Berhasil membuat database')
    })

})