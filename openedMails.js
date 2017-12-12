var request = require('request');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/knwd_mailer.db');

class openedMails {

  function ifOpened() {

    //let id = db.run("SELECT id_mailTo FROM mailList");
    let clicked = '';

////////////////////////////////////////////////////
    db.all("SELECT id_mailTo FROM mailList", function(err, rows) {
        rows.forEach(function (row) {
          request({
            method: 'POST',
            url: 'http://mail.pietruszka.usermd.net/api/check',
            headers: {
              'Content-Type': 'application/json'
            },
            body: "{  \"id\": \"" + id + "\"}"
          }, function(error, response, body) {
            // console.log('Status:', response.statusCode);
            // console.log('Headers:', JSON.stringify(response.headers));

            var parsed = JSON.parse(body);
            var body_arr = [];

            for (var x in parsed) {
              body_arr.push(parsed[x]);
            }

            console.log('Opened (true/false):', row.body_arr[0]);
          });
        })
    })
////////////////////////////////////////////////////
    // request({
    //   method: 'POST',
    //   url: 'http://mail.pietruszka.usermd.net/api/check',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: "{  \"id\": \"" + id + "\"}"
    // }, function(error, response, body) {
    //   // console.log('Status:', response.statusCode);
    //   // console.log('Headers:', JSON.stringify(response.headers));
    //
    //   var parsed = JSON.parse(body);
    //   var body_arr = [];
    //
    //   for (var x in parsed) {
    //     body_arr.push(parsed[x]);
    //   }
    //
    //   console.log('Opened (true/false):', body_arr[0]);
    // });
  }

}

module.exports = openedMails;
