class displayMails {

    displayOneMail(mailFrom, mailTo, subject) {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        let sql = `SELECT mailFrom, mailTo, subject FROM mailList WHERE mailFrom = ? AND mailTo = ? AND subject = ?`;
        db.each(sql, [mailFrom, mailTo, subject], (err, row) => {
            if (err) {
                throw err;
            }
            // console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);
        });
        db.close();
    }
    displayMailsFromFile(pathToFile) {
        var fs = require('fs');
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');
        var mailFrom = [];
        let mailTo = [];
        let subject = [];
        fs.readFile(pathToFile, 'UTF-8', function(err, data) {
            data = data.split(/[\n,;]/);
            for (var i = 0; i < data.length - 2; i = i + 3) {
                mailFrom.push(data[i]);
                mailTo.push(data[i + 1]);
                subject.push(data[i + 2]);
            }
            db.each('SELECT mailFrom, mailTo, subject, tekst, html FROM mailList WHERE mailFrom IN (' + mailFrom + ') AND mailTo IN (' + mailTo + ') AND subject IN (' + subject + ')', function(err, row) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Mail from || Mail to || Subject');
                    console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);
                }
            });
            db.close();
        });

        //var mailToList = fs.readFileSync(mailToListSplit, 'UTF-8');
        // fs.readFile(`./${mailToList}`, function(text) {
        //     var mailToListSplit = text.split("\n")
        //     console.log(mailToListSplit);
        // });

        //   console.log(mailFrom);
        // let sql = `SELECT mailFrom, mailTo, subject, data FROM mailList WHERE mailTo IN ? AND mailFrom IN ? AND subject IN ?`;

        // db.each(sql, mailFrom, mailTo, subject, (err, row) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject} - ${row.data}`);
        //     }
        // })

        //Czy foreach zadziala na pliku? Bo chyba tylko na array
        // mailToListSplit.foreach(function(index) {

        //     db.each(sql2, [index], (err, row) => {

        //         if (err) {
        //             throw err;
        //         }
        //         console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject} - ${row.data}`);
        //     });
        // });

        // db.close();

    }

    selectall() {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');

        let sql = `SELECT * FROM mailList`;

        db.each(sql, (err, row) => {

            if (err) {
                throw err;
            }
            // console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);
            // console.log(row);

        });

        db.close();

    }

}

let letsSeeMails = new displayMails();

letsSeeMails.selectall();



module.exports = displayMails;