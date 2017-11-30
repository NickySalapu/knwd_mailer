class displayMails {

    displayOneMail(mailFrom, mailTo, subject) {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');


        let sql = `SELECT mailFrom, mailTo, subject FROM mailList WHERE mailFrom = ? AND mailTo = ? AND subject = ?`;

        db.each(sql, [mailFrom, mailTo, subject], (err, row) => {

            if (err) {
                throw err;
            }
            console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);

        });

        db.close();

    }

    displayMailsFromFile(mailToList) {

        var fs = require('fs');
        //var mailToList = fs.readFileSync(mailToListSplit, 'UTF-8');
        fs.readFile(`./${mailToList}`, function(text) {
            var mailToListSplit = text.split("\n")
        });

        let sql2 = `SELECT mailFrom, mailTo, subject, data FROM mailList WHERE mailTo = ?`;

        //Czy foreach zadziala na pliku? Bo chyba tylko na array
        mailToListSplit.foreach(function(index) {

            db.each(sql2, [index], (err, row) => {

                if (err) {
                    throw err;
                }
                console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject} - ${row.data}`);
            });
        });

        db.close();

    }

    selectall() {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('./db/knwd_mailer.db');

        let sql = `SELECT * FROM mailList`;

        db.each(sql, (err, row) => {

            if (err) {
                throw err;
            }
            console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);
            console.log(row);

        });

        db.close();

    }

}

let letsSeeMails = new displayMails();

letsSeeMails.selectall();



module.exports = displayMails;