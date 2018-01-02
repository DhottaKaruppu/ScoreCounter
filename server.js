var express = require('express')
, app = express()
var path = require('path')
  //, logger = require('morgan')
  
  //, template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

//app.use(logger('dev'))

var htmlPath = path.join(__dirname,'newTemp')

app.use(express.static(htmlPath))

app.get('/', function (req, res, next) {
  try {
    //var html = template({ title: 'Home' })
	console.log(__dirname);
    res.send(htmlPath)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})