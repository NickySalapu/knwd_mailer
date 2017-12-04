class openedMails {

  function imgSrc() {
    var http = require("https");

    var options = {
      "method": "GET",
      "hostname": [
        "postman-echo", "com"
      ],
      "path": ["get"],
      "headers": {}
    };

    var req = http.request(options, function(res) {
      var chunks = [];

      res.on("data", function(chunk) {
        chunks.push(chunk);
      });

      res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
  }

  function ifMailOpened() {
    var http = require("https");

    var options = {
      "method": "POST",
      "hostname": [
        "postman-echo", "com"
      ],
      "path": ["post"],
      "headers": {}
    };

    var req = http.request(options, function(res) {
      var chunks = [];

      res.on("data", function(chunk) {
        chunks.push(chunk);
      });

      res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.write("This is expected to be sent back when email will be opened.");
    req.end();
  }

}

module.exports = openedMails;
