let sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./db/knwd_mailer.db');
const fs = require('fs');
class mailingList {
    addMailList(pathToFile, listName) {
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
                            console.log(err);
                        } else {
                            console.log("Data sucessfully deleted");
                        }
                    });
                }
                db.close();
            });
        });
    }

    displayMailList(mailing_list_name) {
        let mailingListName = [];
        return new Promise((res, rej) => {
            db.all('SELECT mail_name FROM mailingList WHERE mailing_list_name = ?', mailing_list_name, function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    res(row);
                    db.close();
                }
            });
        })
    }

    displayMailListFile(pathToFile) {
        let mailingListName = [];
        return new Promise((res, rej) => {
            fs.readFile(pathToFile, 'UTF-8', function(err, data) {
                data = data.split(/[\n,;]/);
                for (var i = 0; i < data.length; i++) {
                    mailingListName.push(data[i]);
                }
                db.all('SELECT mail_name FROM mailingList WHERE mailing_list_name IN (' + mailingListName + ')', function(err, row) {
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
}

module.exports = mailingList;