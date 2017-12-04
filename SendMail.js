class sendMail {
    sendMail(configuration) {
        console.log(configuration);
        const nodemailer = require('nodemailer');
        let transporter = nodemailer.createTransport({
            host: configuration.host,
            port: configuration.port,
            secure: false,
            auth: {
                user: 'ethereal.user@ethereal.email',
                pass: 'verysecret'
            }
        });
        let mailOptions = {
            from: configuration.mailFrom,
            to: 'bar@blurdybloop.com, baz@blurdybloop.com',
            subject: "Hello",
            text: 'Hello world?',
            html: '<b>Hello world?</b>'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    }

}
module.exports = sendMail;