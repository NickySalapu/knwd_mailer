const configuration = require('./configuration.js');
let conf = new configuration();
let sendMail = require('./SendMail.js');
let sndMail = new sendMail();
//conf.addMethod('D:/Documents/Desktop/test2.txt');
var confi2 = null;
conf.selectMethod('testowa5').then(row => {
    confi2 = row[0];
    sndMail.sendMail(confi2);
});
// .then(sndMail.sendMail(confi2));




// const displayMail = require('./displayMails.js');
// let dspMail = new displayMail();
// let allMails = null;
//db.run("INSERT INTO mailList (mailFrom, mailTo, subject, tekst, html) VALUES('kacper@gmail.com', 'gawlowski@gmail.com', 'Test', 'Treść maila', 'Brak');");
// dspMail.displayMailsFromFile('D:/Documents/Desktop/test.txt').then(row => {
//     allMails = row;
//     console.log(allMails);
// });

// const mailingList = require('./mailingList.js');
// let mailingLst = new mailingList();
// let allMailings = null;
// mailingLst.displayMailListFile('D:/Documents/Desktop/test5.txt').then(row => {
//     allMailings = row;
//     console.log(allMailings);
// });
const args = process.argv;