let express = require("express")
let app = express()
app.get('/', function (request. response){
    response.send]('hola terricola')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})