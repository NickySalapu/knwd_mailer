class displayMails {

<<<<<<< Updated upstream
    displayOneMail(mailFrom2, mailTo, subject) {
=======
    displayOneMail(mailFrom, mailTo, subject) {
      const sqlite3 = require('sqlite3').verbose();
      let db = new sqlite3.Database('../db/knwd_mailer.db');
>>>>>>> Stashed changes

      let sql = `SELECT mailFrom, mailTo, subject FROM mailList WHERE mailFrom = ? AND mailTo = ? AND subject = ?`;

        db.each(sql, [mailFrom, mailTo, subject], (err, row) => {

          if (err) {
            throw err;
          }
          console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject}`);

      });

      db.close();

    }

<<<<<<< Updated upstream
}
=======
    displayMailsFromFile(mailToList) {

        var fs = require('fs');
        //var mailToList = fs.readFileSync(mailToListSplit, 'UTF-8');
        fs.readFile(`./${mailToList}`, function(text){
        var mailToListSplit = text.split("\n")
        });

        let sql2 = `SELECT mailFrom, mailTo, subject, data FROM mailList WHERE mailTo = ?`;

        //Czy foreach zadziala na pliku? Bo chyba tylko na array
        mailToListSplit.foreach(function(index){

            db.each(sql2, [index], (err, row) => {

              if (err) {
                throw err;
              }
              console.log(`${row.mailFrom} - ${row.mailTo} : ${row.subject} - ${row.data}`);
          });
    });

        db.close();

    }
}

module.exports = displayMails;
>>>>>>> Stashed changes
