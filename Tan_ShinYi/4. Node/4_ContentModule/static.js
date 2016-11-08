'use strict'

var fs = require('fs');
var url = require('url');

module.exports = function(request, response){
    var image = false;
    var encode = 'utf8';

    var file = request.url.split("/");
    file = file[file.length-1];
    console.log(file);

    var fileType = file.split(".");
    fileType = fileType[1];
    console.log(fileType);

    if (fileType == 'png' || fileType == 'jpg' || fileType == 'jpeg' || fileType == 'gif' ){
      image = true;
      encode = null;
    }

    fs.readFile('static/'+ fileType + '/' + file , encode , function (errors, contents){

      try {
        if(image){
          response.writeHead(200, {'Content-type': 'image/' + fileType});
        } else if(fileType=="js"){
          response.writeHead(200, {'Content-type': 'text/javascript'});
        } else {
          response.writeHead(200, {'Content-type': 'text/' + fileType});
        }

        response.write(contents);
        response.end();
      } catch (e) {
        response.writeHead(404);
        response.end('File not found!');
      }

    });

  }
