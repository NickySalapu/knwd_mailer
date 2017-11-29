const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {

            let transporter = nodemailer.createTransport({
                host: 'KNWD',
                port: xxx,
                secure: true,
                auth: {
                    user: account.user,
                    pass: account.user
                }
            });
            let mailOptions = {
                from: '" endriu96@gmail.com',
                to: ' endriu96@fleep.io   ',
                subject: 'Hello ✔',
                text: 'Hello world?',
                html: '<b>Hello world?</b>'
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            })
        };