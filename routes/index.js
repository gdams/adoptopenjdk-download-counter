var express = require('express');
var router = express.Router();
const {
  Client
} = require('pg')
const client = new Client({
  user: 'readonly',
  host: '37.153.110.144',
  database: 'downloadStats',
  password: process.env.PSQL_PASSWORD,
  port: 5432,
})

client.connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  fetchStats()
  async function fetchStats() {
    let queryString = "SELECT * FROM downloads";
    client.query(queryString, (err, res2) => {
        if (err) {
          console.error(err)
        } else {
          console.log(res2.rows)
          res.render('index', {
            data: res2.rows
          });
        }
      });
    }
});

module.exports = router;
