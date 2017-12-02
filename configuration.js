class Configuration {
    selectMethod(configurationName) {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        db.serialize(function() {
            db.each("SELECT host, port, secure, user, password, configurationName FROM configuration WHERE = ?", configurationName, function(err, row) {
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

        sql2.readFile('db', 'utf8');

        db.serialize(function() {
            db.each("INSERT INTO configuration (host, port, secure, user, password) VALUES ('KNWD', xxx, true, account, password)", function(err, row) {
                if (err) {
                    console.log("error");
                } else {
                    console.log(row);
                }
            });
            db.close();
        });

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
                })
            });
            db.close();
        }
    }