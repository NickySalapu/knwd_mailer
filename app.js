const configuration = require('./configuration.js');
let conf = new configuration();
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/knwd_mailer.db');
//conf.addMethod('D:/Documents/Desktop/test2.txt');
let confi2 = null;
// conf.selectMethod('testowa5').then(row => {
//     confi2 = row;
//     console.log(confi2[0].host);
// });

const displayMail = require('./displayMails.js');
let dspMail = new displayMail();
let allMails = null;
//db.run("INSERT INTO mailList (mailFrom, mailTo, subject, tekst, html) VALUES('kacper@gmail.com', 'gawlowski@gmail.com', 'Test', 'Treść maila', 'Brak');");
// dspMail.displayMailsFromFile('D:/Documents/Desktop/test.txt').then(row => {
//     allMails = row;
//     console.log(allMails);
// });

const mailingList = require('./mailingList.js');
let mailingLst = new mailingList();
let allMailings = null;
mailingLst.displayMailListFile('D:/Documents/Desktop/test5.txt').then(row => {
    allMailings = row;
    console.log(allMailings);
});
const args = process.argv;