const configuration = require('./configuration.js');
const displayMails = require('./displayMails.js');
const mailingList = require('./mailingList.js');
const openedMails = require('./openedMails.js');
const SendMail = require('./SendMail.js');
const args = process.argv;

class App {
    constructor() {
        this.conf = new configuration();
        this.dspMails = new displayMails();
        this.mailingLst = new mailingList();
        this.opnMails = new openedMails();
        this.sndMail = new SendMail();
    }

}
let app = new App();

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
        case '--addMailingList':
            app.mailingLst.addMailList(args[i + 1], args[i + 2]);
        case '--deleteConfiguration':
            app.conf.deleteMethod(args[i + 1]);
            break;
        case '--addConfiguration':
            app.conf.addMethod(args[i + 1]);
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
            let configuration = null;
            let mailList = null;
            app.conf.selectMethod('testowa7').then(row => {
                configuration = row[0];
            }).then(app.mailingLst.displayMailList('testowa4').then(row => {
                mailList = row[0];
                console.log(configuration);
                let path = 'D:/Documents/Desktop/test3.txt'
                app.sndMail.sendMail(configuration, path);
            }));
        default:
            break;
    }
}