var request = require('request');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/knwd_mailer.db');

class openedMails {


  ifOpened() {

    ////////////////////////////////////////////////////
    var id_arr = [];
    var j = 0;
    db.all("SELECT id_mailTo FROM mailList", function(err, rows) {
      rows.forEach(function(row) {
        id_arr[j] = row.id_mailTo;
        j++
      })
    });
    //////////////////////////////////////////////////

    for (var i = 0; i < id_arr.length; i++) {
      request({
        method: 'POST',
        url: 'http://mail.pietruszka.usermd.net/api/check',
        headers: {
          'Content-Type': 'application/json'
        },
        body: "{  \"id\": \"" + id_arr[i] + "\"}"
      }, function(error, response, body) {

        JSON.parse(body, (key, value) => {
          if (key == "clicked") {
            console.log('Opened (true/false):', value)
          }
        });
      });
    }

    //////////////////////////////////////////////////////////////
  }


}

module.exports = openedMails;