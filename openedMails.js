var request = require('request');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/knwd_mailer.db');

class openedMails {

    ifOpened() {

        // let id = db.run("SELECT id_mailTo FROM mailList");
        let clicked = '';

        ////////////////////////////////////////////////////
        var id_arr = [];
        var j = 0;
        db.all("SELECT id_mailTo FROM mailList", function(err, rows) {
            rows.forEach(function(row) {
                id_arr[j] = row.id_mailTo;
                i++
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
                // console.log('Status:', response.statusCode);
                // console.log('Headers:', JSON.stringify(response.headers));

                var parsed = JSON.parse(body);
                var body_arr = [];

                for (var x in parsed) {
                    body_arr.push(parsed[x]);
                }

                console.log('Opened (true/false):', body_arr[0]);
            });
        }

        //////////////////////////////////////////////////////////////
    }

}

module.exports = openedMails;