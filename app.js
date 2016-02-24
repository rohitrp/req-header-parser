var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000

app.use('/', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html')
})

app.get('/whoami', function(req, res) {
  var result = {
    ip : req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language : req.acceptsLanguages()[0],
    software : /\((.*?)\)/g.exec(req.headers['user-agent'])[1]
  }
  
  res.json(result)
})

app.listen(port, function() {
  console.log("Listening at " + port + "...")
})