const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());



var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'medwing',
  multipleStatements: true,
  insecureAuth: true
});

mysqlConnection.connect((err)=> {
  if(!err)
  console.log('Connection Established Successfully');
  else
  console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
  });

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get('/markers' , (req, res) => {
  mysqlConnection.query('SELECT * FROM markers', (err, rows, fields) => {
  if (!err)
  res.send(rows);
  else
  console.log(err);
  })
});

//Router to INSERT/POST a learner's detail
app.post('/markers', (req, res) => {
  let marker = req.body;
  mysqlConnection.query("INSERT INTO markers(description, place_id, lat, lng) VALUES ?", [[[marker.description, marker.place_id, marker.lat, marker.lng]]], (err, rows, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(marker);
  });
});

//Router to INSERT/POST a learner's detail
app.put('/markers/:id', (req, res) => {
  let marker = req.body;
  mysqlConnection.query("UPDATE markers SET description=?, place_id=?,lat=?,lng=? where id = ?", [marker.description, marker.place_id, marker.lat, marker.lng, req.params.id], (err, rows, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(marker);
  });
});

//Router to DELETE a learner's detail
app.delete('/markers/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM markers WHERE id = ?', [req.params.id], (err, rows, fields) => {
  if (!err)
  res.send('Marker deleted successfully.');
  else
  console.log(err);
  })
});