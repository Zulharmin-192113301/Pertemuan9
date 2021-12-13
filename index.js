var http = require ('http');
var express = require ('express');
var app = express()
var bodyParser = require ('body-parser')
var mysql = require ('mysql')

app.use(bodyParser.urlencoded({extende:false}));
app.use(bodyParser.json());

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
})

app.post('/siswa', (req,res) => {
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var query = "INSERT INTO Siswa (firstname,lastname,email) VALUES ('" + firstname + "','" + lastname + "','" + email + "')"
    

    conn.query(query, (err,result) =>{
        if (err)
        res.json (err)
        else
        res.json(result)
    })

})

http.createServer(app)
.listen(8000, () =>{
    console.log('server berjalan di port 8000')
});