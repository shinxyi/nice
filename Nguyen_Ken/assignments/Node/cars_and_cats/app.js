var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response){
  console.log(request.url)

  if (request.url === '/'){
    fs.readFile('./views/index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/cars'){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/cats'){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/cars/new'){
    fs.readFile('./views/new.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/css'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/cool_cat.jpg'){
    fs.readFile('./images/cool_cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/ferrari.jpg'){
    fs.readFile('./images/ferrari.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/grumpy_hipster.jpg'){
    fs.readFile('./images/grumpy_hipster.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/grumpy_programmer.jpg'){
    fs.readFile('./images/grumpy_programmer.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/hipster_cat.jpg'){
    fs.readFile('./images/hipster_cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/lambo.jpg'){
    fs.readFile('./images/lambo.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/pinto.jpg'){
    fs.readFile('./images/pinto.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/images/skyline.jpg'){
    fs.readFile('./images/skyline.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'})
      response.write(contents)
      response.end()
    })
  }
  else {
    response.writeHead(404)
    response.end('URL request not found')
  }
})

server.listen(7077)
console.log('Running on localhost port 7077')
