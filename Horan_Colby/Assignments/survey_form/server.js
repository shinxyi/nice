var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./static")))

app.set ('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index')
})
app.post('/newuser', function(req, res){
	console.log(req.body)
	var users = req.body
	res.render('result', {result: users})
})

app.listen(5000, function(){
	console.log('This is the machine, melting your brain on port 5000')
})