 let sqlite3 = require('sqlite3').verbose();
 let db = new sqlite3.Database('./db/knwd_mailer.db');

 class Configuration {
     selectMethod(configurationName) {
         return new Promise((res, rej) => {
             db.all("SELECT host, port, secure, user, password, configurationName, mailFrom FROM configuration WHERE configurationName = ?", configurationName, function(err, row) {
                 if (err) {
                     console.log(err);
                 } else {
                     res(row);
                 }
             });
         });
     }

     addMethod(pathToFile) {
         const fs = require('fs');
         let configurationName = [];
         let host = [];
         let port = [];
         let secure = [];
         let user = [];
         let password = [];
         let mailFrom = [];
         return new Promise((res, rej) => {
             fs.readFile(pathToFile, 'UTF-8', function(err, data) {
                 data = data.split(/[\n,;]/);
                 for (var i = 0; i < data.length - 6; i = i + 7) {
                     configurationName.push(data[i]);
                     host.push(data[i + 1]);
                     port.push(data[i + 2]);
                     secure.push(data[i + 3]);
                     user.push(data[i + 4]);
                     password.push(data[i + 5]);
                     mailFrom.push(data[i + 6]);
                 }
                 db.serialize(function() {
                     for (var i = 0; i < configurationName.length; i++) {
                         db.run('INSERT INTO configuration (configurationName, host, port, secure, user, password, mailFrom) VALUES(' + configurationName[i] + ', ' + host[i] + ', ' + port[i] + ', ' + secure[i] + ', ' + user[i] + ', ' + password[i] + ', ' + mailFrom[i] + ');', function(err) {
                             if (err) {
                                 console.log(err);
                             } else {
                                 console.log("Configuration inserted sucessfully");
                                 res();
                             }

                         });
                     }
                 });
             });
         });
     }
     deleteMethod(pathToFile) {
         const fs = require('fs');
         let configurationName = [];
         fs.readFile(pathToFile, 'UTF-8', function(err, data) {
             data = data.split(/[\n,;]/);
             for (var i = 0; i < data.length - 6; i = i + 7) {
                 configurationName.push(data[i]);
             }
             db.serialize(function() {
                 for (var i = 0; i < configurationName.length; i++)
                     db.each('DELETE FROM configuration WHERE configurationName IN (' + configurationName[i] + ')', function(err, row) {
                         if (err) {
                             console.log(err);
                         } else {
                             console.log("Configuration sucessfully deleted");
                         }
                     });
             });
         });
     }
 }

 module.exports = Configuration;