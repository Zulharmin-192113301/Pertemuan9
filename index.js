var mysql = require ('mysql')

var conn = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_9_zul'
})

conn.connect((err) =>{
    if (err)
    console.log('Masalah di MySQL' + err);
    else
    console.log('Terhubung ke Database');

    conn.query('CREATE TABLE Siswa (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_time TIMESTAMP)', (err, result) => {
        if (err)
        console.error('Gagal membuat tabel' + err)
        else
        console.log('Berhasil membuat tabel')
    })

})