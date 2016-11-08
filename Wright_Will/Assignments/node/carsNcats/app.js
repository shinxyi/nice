
var fs = require('fs')
var http = require ('http')

server = http.createServer(function(request,response){
    console.log('client request URL:', request.url);
    var fn = {
        img: function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end()
        },
        html: function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end()
        },
        css: function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        }
    }
    switch (request.url) {
        case '/cars':
            console.log(typeof fn.html)
             fs.readFile('./views/cars.html', 'utf8',fn.html)
            break;
        case '/cats':
             fs.readFile('./views/cats.html', 'utf8',fn.html)
            break;
        case '/cars/new':
             fs.readFile('./views/cars_new.html', 'utf8',fn.html)
            break;
        case '/stylesheets/style.css':
             fs.readFile('./stylesheets/style.css', 'utf8',fn.css)
            break;
        case '/images/car1.jpg':
            console.log("#######################");
             fs.readFile('./images/car1.jpg',fn.img)
            break;
        case '/images/car2.jpg':
        console.log(typeof fn.img);
             fs.readFile('./images/car2.jpg',fn.img)
            break;
        case '/images/cat1.jpg':
        console.log(typeof fn.img);
             fs.readFile('./images/cat1.jpg',fn.img)
            break;
        case '/images/cat2.jpg':
        console.log(typeof fn.img);
             fs.readFile('./images/cat2.jpg',fn.img)
            break;
        default:
            response.writeHead(404);
            response.end('File not found!!!');
    }
})



server.listen(7077)
console.log("server listning on 7077");
