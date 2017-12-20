let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/knwd_mailer.db');
const nodemailer = require('nodemailer');
const fs = require('fs');
class sendMail {
    sendMail(configuration, pathToFile) {
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: configuration.host,
                port: configuration.port,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass // generated ethereal password
                }
            });
            let from = [];
            let to = [];
            let subject = [];
            let text = [];
            let html = [];
            fs.readFile(pathToFile, 'UTF-8', function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    data = data.split(/[\n,;]/);
                    from.push(data[0]);
                    to.push(data[1]);
                    subject.push(data[2]);
                    text.push(data[3]);
                    html.push(data[4]);

                    //INSERT data to database
                    var id = Math.floor((Math.random() * 100000) + 1); //random id for email

                    var img = '<img src="http://mail.pietruszka.usermd.net/api/check/' + id + '">';

                    // db.run("INSERT INTO mailList (mailFrom, mailTo, subject, tekst, html, id_mailTo) VALUES ('" + from[0] + "', '" + to[0] + "', '" + subject[0] + "', '" + text[0] + "', '" + html[0] + "', '" + id + "')", function(err) {
                    //     if (err) {
                    //         console.log(err);
                    //     } else {
                    //         console.log("Inserted sucessfully");
                    //     }
                    // });

                    // setup email data with unicode symbols

                    let mailOptions = {
                        from: from[0], // sender address
                        to: to[0], // list of receivers
                        subject: subject[0], // Subject line
                        text: text[0], // plain text body
                        html: html[0] + img, // html body

                    };
                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                }
            });
        });

    }

}
module.exports = sendMail;