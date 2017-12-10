var request = require('request');

class openedMails {

  function ifOpened() {
    let id = 'SELECT from db...'; //select one email id from db
    let clicked = '';

    request({
      method: 'POST',
      url: 'http://mail.pietruszka.usermd.net/api/check',
      headers: {
        'Content-Type': 'application/json'
      },
      body: "{  \"id\": \"" + id + "\"}"
    }, function(error, response, body) {
      // console.log('Status:', response.statusCode);
      // console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    });
  }

}

module.exports = openedMails;
