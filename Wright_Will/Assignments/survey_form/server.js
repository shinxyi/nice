
express = require('express')
path = require('path')
bodyParser = require('body-parser')

app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/',function (request,response) {
    response.render('index')
})
app.post('/result',function (request,response) {
    delete request.body.submit
    response.render('result',{info:request.body})
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
