const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
let db = new sqlite3.Database('./db/knwd_mailer.db');

class displayMails {
    displayOneMail(mailFrom, mailTo, subject) {
        return new Promise((res, rej) => {
            db.all(`SELECT mailFrom, mailTo, subject FROM mailList WHERE mailFrom = ? AND mailTo = ? AND subject = ?`, mailFrom, mailTo, subject, function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    res(row);
                    db.close();
                }
            });
        });
    }
    displayMailsFromFile(pathToFile) {
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        var mailFrom = [];
        let mailTo = [];
        let subject = [];
        return new Promise((res, rej) => {
            fs.readFile(pathToFile, 'UTF-8', function(err, data) {
                data = data.split(/[\n,;]/);
                for (var i = 0; i < data.length - 2; i = i + 3) {
                    mailFrom.push(data[i]);
                    mailTo.push(data[i + 1]);
                    subject.push(data[i + 2]);
                }
                db.all('SELECT mailFrom, mailTo, subject, tekst, html FROM mailList WHERE mailFrom IN (' + mailFrom + ') AND mailTo IN (' + mailTo + ') AND subject IN (' + subject + ')', function(err, row) {
                    if (err) {
                        console.log(err);
                    } else {
                        res(row);
                        db.close();
                    }
                });
            });
        });
    }
    selectall() {
        return new Promise((res, rej) => {
            db.all('SELECT * FROM mailList', function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    res(row);
                    db.close();
                }
            });
        });
    }
}
module.exports = displayMails;