let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/knwd_mailer.db');

class sendMail {
    sendMail(configuration) {
        const nodemailer = require('nodemailer');
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

            //INSERT data to database
            var id = Math.floor((Math.random() * 100000) + 1); //random id for email
            //var from = configuration.mailFrom;
            var from = 'fred@foo.com';
            var to = 'bar@lurdybloop.com';
            var subject = 'Hello';
            var text = 'Hello World';
            var html = 'Hello world?';
            var img = '<img src="http://mail.pietruszka.usermd.net/api/check/' + id + '">';

            db.run("INSERT INTO mailList (mailFrom, mailTo, subject, tekst, html, id_mailTo) VALUES ('"+from+"', '"+to+"', '"+subject+"', '"+text+"', '"+html+"', '"+id+"')");

            // setup email data with unicode symbols
            let mailOptions = {
                from: from, // sender address
                to: to, // list of receivers
                subject: subject, // Subject line
                text: text, // plain text body
                html: html+img, // html body

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
        });

    }

}
module.exports = sendMail;
