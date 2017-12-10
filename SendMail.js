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
            let id = Math.floor((Math.random() * 100000) + 1); //random id for email
            // setup email data with unicode symbols
            let mailOptions = {
                from: configuration.mailFrom, // sender address
                to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>', // html body
                img: '<img src="http://mail.pietruszka.usermd.net/api/check/' + id + '">'
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