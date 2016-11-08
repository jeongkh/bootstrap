var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs'); //File load
var mysql = require('mysql');
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views'); //html 파일들을 저장하기 위해 경로 추가
app.set('view engine', 'ejs'); //html로 파일 실행

app.use(express.static('public'));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

app.get('/', function(req, res) {
    res.render('index'); // index.ejs로 써도 되고 index만 써도 파일 실행을 해줍니다.
});

var connection = mysql.createConnection({
  connectionLimit: 3,
    host    :'localhost', //db ip address
    port : 3306, //db port number
    user : 'root', //db id
    password : 'Hwan1124', //db password
    database:'yfg' //db schema name
});
router.get('/', function (req, res, next) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query('SELECT * FROM sublist', function (err, rows) {
            if (err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));

            res.render('index', {company: 'yfg', rows: rows});
            connection.release();

            // Don't use the connection here, it has been returned to the pool.
        });
    });
});

module.exports = router;
