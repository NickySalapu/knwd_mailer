const configuration = require('./configuration.js');
const displayMails = require('./displayMails.js');
const mailingList = require('./mailingList.js');
//const openedMails = require('./openedMails.js');
const SendMail = require('./SendMail.js');
const args = process.argv;

class App {
    constructor() {
        this.conf = new configuration();
        this.dspMails = new displayMails();
        this.mailingLst = new mailingList();
        //     this.opnMails = new openedMails();
        this.sndMail = new SendMail();
    }

}
let app = new App();

console.log(args);
for (let i = 0; i < args.length; i++) {

    switch (args[i]) {
        case '--displayMailingList':
            app.mailingLst.displayMailListFile(args[i + 1]).then(row => {
                let allMailings = [];
                allMailings = row;
                console.log(allMailings);
            });
            break;
        case '--dltFromMaillingList':
            app.mailingLst.deleteRecord(args[i + 1]);
        case '--deleteConfiguration':
            app.conf.deleteMethod(args[i + 1]);
            break;
        case '--displayMail':
            app.dspMails.displayOneMail(args[i + 1], args[i + 2], args[i + 3]).then(row => {
                let dspOneMail = [];
                dspOneMail = row;
                console.log(dspOneMail);
            });
        case '--displayMailFromFile':
            app.dspMails.displayMailsFromFile(args[i + 1]).then(row => {
                let dspMailFile = [];
                dspMailFile = row;
                console.log(dspMailFile);
            });
        case '--snd':
            let confi = [];
            let mailList = [];
            if (args[i + 3].indexOf(".txt") >= 0 || args[i + 2].indexOf('.csv') >= 0) {
                app.conf.addMethod(args[i + 2]).then(
                    app.conf.selectMethod(args[i + 1]).then(row => {
                        confi = row[0];
                        //        console.log(confi);
                    }).then(app.mailingLst.addMailList(args[i + 4])
                        .then(app.mailingLst.displayMailList(args[i + 3]).then(row => {
                            mailList = row[0];
                            console.log(mailList);
                        }).then(app.sndMail.sendMail(confi))))
                );
                console.log(confi);
            }
        default:
            break;
    }


}


// let confi = null;

// app.conf.selectMethod('testowa6').then(row => {
//     confi = row[0];
//     app.sndMail.sendMail(confi);
// });

//conf.addMethod('D:/Documents/Desktop/test2.txt');
// var confi2 = null;
// conf.selectMethod('testowa5').then(row => {
//     confi2 = row[0];
//     sndMail.sendMail(confi2);
// });
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