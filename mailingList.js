class MailList {



    addMailList(mail_name, mailing_list_name) {

            let db = require('sqllite3');
            let db2 = new Database(. / db / knwd_mailer.db)

            knwd_mailer.db.run("Intert INTO mailingList (mail_name,mailing_list_name) VALUES('szczepi@szczepi.pl', 'test1'", function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log('A row has been inserted.')
            });
            db.close();


            deleteRecord() {
                let delete = "DELETE FROM mail_name, mailing_list_name WHERE mail_name = 'szczepi@szczepi.pl', mailing_list_name = 'test1'",
                    function(err) {
                        if (err) {
                            return console.log(err.message);
                        }
                        console.log("Number of records deleted: " + result.affectedRows);
                    });
            db.close();

            displayMailList(mail_name, mailing_list_name) {
                    let db = require('sqllite3');
                    let db2 = new Database(. / db / knwd_mailer.db)
                    let parse = require('csv-parse');

                    let csvData = [];
                    sqllite3.createReadStream(knwd_mailer)
                        .pipe(prase({ declimiter: ',' }))
                        .on('data', function(csvrow) {
                                console.log(csvrow);
                            }
                        })
                // ?????????????????????????????

            let chceck;
            knwd_mailer.db.serialize(function() {

                    knwd_mailer.db.each("SELECT mail_name AS mail FROM mailingList WHERE mailList = ?", mail_name, function(err, row) {
                        console.log(row.mail + ": " + row.mailing_list_name);
                    ));
                    displayMailList() {

                        displayMailList(nameMail, nameList)
                    }); db.close();
            }

            displayMailList() {

            }