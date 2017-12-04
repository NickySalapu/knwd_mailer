class Configuration{



  selectMethod(configurationName){
    let sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./db/knwd_mailer.db');


    db.serialize(function(){
      db.each("SELECT host, port, secure, user, password, configurationName FROM configuration WHERE configurationName = ?", configurationName, function(err, row) {
        if (err) {
          console.log("error");
        }else{
          console.log(row);
        }

    });
    db.close();
  });
}

  addMethod(pathToFile){
    let sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./db/knwd_mailer.db');

    const fs = require('fs');
    let configurationName = [];
    let host = [];
    let port - [];
    let secure = [];
    let user = [];
    let password = [];
    let mailFrom = [];
    fs.readFile(pathToFile, 'UTF-8', function(err,data){
       data = data.split(/[\n,;]/);
       for (var i=0; i < data.length - 6; i = i + 7){
         configurationName.push(data[i]);
         host.push(data[i+1]);
         port.push(data[i+2]);
         secure.push(data[i+3]);
         user.push(data[i+4]);
         password.push(data[i+5]);
         mailFrom.push(data[i+6]);
       }

    db.serialize(function() {
        for (var i = 0; i < configurationName.length; i++) {
            db.run('INSERT INTO configuration (configurationName, host, port, secure, user, password, mailFrom) VALUES(' + configurationName[i] + ', ' + host[i] + ', ' + port[i] + ', ' + secure[i] + ', ' + user[i] + ', ' + password[i] + ', ' + mailFrom[i] + ');');
        }
    });
});
}
deleteMethod(pathToFile){
  let sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('./db/knwd_mailer.db');
  const fs = require('fs');
  let configurationName = [];
  let host = [];
  let port = [];
  let secure = [];
  let user = [];
  let password = [];
  let mailFrom = [];
  fs.readFile(pathToFile, 'UTF-8', function(err, data) {
    data = data.split(/[\n,;]/);
    for (var i=0; i < data.length - 6; i = i + 7){
      configurationName.push(data[i]);
      host.push(data[i+1]);
      port.push(data[i+2]);
      secure.push(data[i+3]);
      user.push(data[i+4]);
      password.push(data[i+5]);
      mailFrom.push(data[i+6]);
    }

    db.serialize(function() {
    for (var i = 0; i < configurationName.length; i++)
    db.each('DELETE configurationName, host, port, secure, user, password, mailFrom FROM configuration WHERE configurationName IN ('+ configurationName[i] +') AND host IN ('+ host[i] +') AND port IN ('+ port[i] +') AND secure IN ('+ secure[i] +') AND user IN (' + user[i] +') AND password IN ('+ password[i] +') AND mailFrom IN ('+ mailFrom[i] +')',function(err, row){
      if(err){
        console.log('error');
      }else{
        console.log(row);

  });
});
}}
}
