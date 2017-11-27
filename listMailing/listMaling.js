class MailList{



addMailList(mail_name, mailing_list_name) {

    let db = require('sqlite3');
    let db2 = new Database (./db/knwd_mailer.db)

    knwd_mailer.db.run("Intert INTO mailingList (mail_name,mailing_list_name) VALUES(mail_name, mailing_list_name", function(err){
        if(err) {
          return console.log(err.message);
        }
        console.log('A row has been inserted.')
    });
    db.close();


  deleteRecord() {
    let delete = "DELETE FROM mail_name, mailing_list_name WHERE mail_name = mail_name, mailing_list_name = mailing_list_name", function(err){
      if (err){
        return console.log(err.message);
      }
      console.log("Number of records deleted: " + result.affectedRows);
    });
    db.close();

    displayMailListFile(mailList) {
      let fs = require ('fs');
      const sqlite3 = require('sqlite3').verbose();
      let db = new sqlite3.Database('./db/knwd_mailer.db');
      let mail_name = []
      let mailing_list_name = []
      fs.readFile('Database.path_idk', 'UTF-8' function(err){
        return console.log(err.message)
      })
      data = data.split(/[\n,;]/);
      for (let i=; i < data.lenght - 2; i = i + 3){
        mail_name.push(data[i]);
        mailTo.push(data[i + 1]);
        subject.push(data[i + 2]);
      }
      let test = ("SELECT mail_name, mailing_list_name FROM mailingList IN (' + mail_name +') AND mailing_list_name IN (' + mailing_list_name +')';
      console.log(test);
          db.each("SELECT mail_name, mailing_list_name FROM mailingList IN (' + mail_name +') AND mailing_list_name IN (' + mailing_list_name +'), function(err, row){
            if (err){
              console.log(err);
            } else {
                console.log('mail_name || mailing_list_name');
            }
          });
        db.close();
      });
    
