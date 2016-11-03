
express = require('express')
app = express()


app.get('/',function(request,response){
    response.send("hello Express")
})

app.listen(8000,function () {
    console.log(String(app.get));
})
