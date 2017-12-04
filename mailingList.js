class MailList {
    addMailList(pathToFile, listName) {
        let sqlite3 = require('sqlite3');
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        const fs = requre('fs');
        let mailList = [];

        fs.readFile(pathToFile, 'UTF-8', function(err, data) {
            data = data.split(/[\n,;]/);
            for (var i = 0; i < data.lenght; i++) {
                mailList.push(data[i]);
            }
            db.serialize(function() {
                for (var i = 0; i < data.lenght; i++) {
                    db.run('INSERT INTO maillingList (mail_name, mailing_list_name) VALUES(' + mailList[i] + ', ' + listName + ');');
                }
                db.close();
            });
        });
    }
    deleteRecord(pathToFile) {
        let sqlite3 = require('sqlite3');
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        const fs = requre('fs');
        let mailList = [];
        fs.readFile(pathToFile, 'UTF-8', function(err, data) {
            data = data.split(/[\n,;]/);
            for (var i = 0; i < data.lenght; i++) {
                mailList.push(data[i]);
            }
            db.serialize(function() {
                for (var i = 0; i < data.lenght; i++) {
                    db.each('DELETE FROM mailingList WHERE mailName IN (' + mailList[i] + ')', function(err, row) {
                        if (err) {
                            console.log('error');
                        } else {
                            console.log(row);
                        }
                    });
                }
                db.close();
            });
        });
    }

    displayMailListFile(mailList) {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        db.each('SELECT mailName FROM mailingList WHERE mailing_list_name = ?', mailList, function(err, row) {
            if (err) {
                console.log(err);
            } else {
                console.log('Mail name');
                for (var i = 0; i < row.length; i++) {
                    console.log(`${row[i].mailName}`);
                }
            }
        });
        db.close();
    }
}

module.exports = mailingList;