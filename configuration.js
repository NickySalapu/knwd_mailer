// var fs = require('fs');
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./db/knwd_mailer.db');
// var mailFrom = [];
// let mailTo = [];
// let subject = [];
// fs.readFile(pathToFile, 'UTF-8', function(err, data) {
//     data = data.split(/[\n,;]/);
//     for (var i = 0; i < data.length - 2; i = i + 3) {
//         mailFrom.push(data[i]);
//         mailTo.push(data[i + 1]);
//         subject.push(data[i + 2]);
//     }
//     let test = 'SELECT mailFrom, mailTo, subject, tekst, html FROM mailList  IN (' + mailFrom + ') AND mailTo IN (' + mailTo + ')';
//     console.log(test);
//     db.each('SELECT mailFrom, mailTo, subject, tekst, html FROM mailList WHERE mailFrom IN (' + mailFrom + ') AND mailTo IN (' + mailTo + ') AND subject IN (' + subject + ')', function(err, row) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Mail from || Mail to || Subject');
//             console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);
//         }
//     });
//     db.close();
// });
class Configuration {
    selectMethod(configurationName) {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        db.serialize(function() {
            db.each("SELECT host, port, secure, user, password, configurationName FROM configuration WHERE configurationName = ?", configurationName, function(err, row) {
                if (err) {
                    console.log("error");
                } else {
                    console.log(row);
                }
            });
            db.close();
        });
    }
    addMethod(pathToFile) {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        const fs = require('fs');
        let configurationName = [];
        let host = [];
        let port = [];
        let secure = [];
        let user = [];
        let password = [];
        let mailFrom = [];
        fs.readFile(pathToFile, 'UTF-8', function(err, data) {
            data = data.split(/[\n,;]/);
            for (var i = 0; i < data.length - 6; i = i + 7) {
                configurationName.push(data[i]);
                host.push(data[i + 1]);
                port.push(data[i + 2]);
                secure.push(data[i + 3]);
                user.push(data[i + 4]);
                password.push(data[i + 5]);
                mailFrom.push(data[i + 6]);
            }
            db.serialize(function() {
                for (var i = 0; i < configurationName.length; i++) {
                    db.run('INSERT INTO configuration (configurationName, host, port, secure, user, password, mailFrom) VALUES(' + configurationName[i] + ', ' + host[i] + ', ' + port[i] + ', ' + secure[i] + ', ' + user[i] + ', ' + password[i] + ', ' + mailFrom[i] + ');');
                }
            });
        });
    }

    deleteMethod() {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');

        sql3.readFile('db', 'utf8');
        db.serialize(function() {
            db.each("DELETE host, port, secure, user, password FROM configuration WHERE = ?", function(err, row) {
                if (err) {
                    console.log('error');
                } else {
                    console.log(row);
                }
            });
            db.close();
        });
    }
}

module.exports = Configuration;