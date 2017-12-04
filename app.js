// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./db/knwd_mailer.db');
// db.close();
// const User = require('./displayMails.js');
// let user = new User();

const configuration = require('./configuration.js');
let conf = new configuration();
// const SendMail = require('./SendMail.js');
// let send = new SendMail();
// var check;
// db.serialize(function() {

//     db.run("CREATE TABLE mailingList (mail_name text NOT NULL, mailing_list_name text NOT NULL);");
//     db.run("CREATE TABLE configuration (configurationName text NOT NULL, host text NOT NULL, port INTEGER NOT NULL, secure INTEGER NOT NULL, user text NOT NULL, password text NOT NULL, mailFrom text NOT NULL);");
//     db.run("CREATE TABLE mailList (mailFrom text NOT NULL, mailTo text NOT NULL, subject text NOT NULL, tekst text NOT NULL, html text NOT NULL);");

//     db.run("INSERT INTO mailingList (mail_name,mailing_list_name) VALUES('kacper@gmail.com', 'testowa');");
//     db.run("INSERT INTO configuration (configurationName, host, port, secure, user, password, mailFrom) VALUES('testowa', 'smtp.ethereal.email', 587, 0, 'kacper', 'pass', 'kacper@gmail.com');");
//     db.run("INSERT INTO mailList (mailFrom, mailTo, subject, tekst, html) VALUES('kacper@gmail.com', 'gawlowski@gmail.com', 'Test', 'Treść maila', 'Brak');");

//     db.each("SELECT mail_name AS mail, mailing_list_name FROM mailingList", function(err, row) {
//         console.log(row.mail + ": " + row.mailing_list_name);
//     });

// db.each("SELECT configurationName, host, port, secure, user, password, mailFrom FROM configuration", function(err, row) {
//     console.log(row.configurationName + ": " + row.host + ": " + row.port + ": " + row.secure);
// });
//     db.each("SELECT mailFrom, mailTo, subject, tekst, html FROM mailList", function(err, row) {
//         console.log(row.mailFrom + ": " + row.mailTo);
//     });
// });


var check;

// user.displayOneMail('kacper@gmail.com', 'gawlowski@gmail.com', 'Test');
// user.displayMailsFromFile('D:/Documents/Desktop/test.csv');

// conf.addMethod('D:/Documents/Desktop/test2.txt')
let konfiguracja = [];
console.log(conf.selectMethod('testowa3'));
// console.log(konfiguracja);
// send.sendMail(konfiguracja);
const args = process.argv;
// console.log(args);

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'wp.pl',
//     auth: {
//         user: '',
//         pass: ''
//     }
// });

// var mailOptions = {
//     from: '',
//     to: '',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

// db.close();