var express = require('express');
var app = express();
const path = require('path');

var port = process.env.PORT || 8080; 

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/:query',function(req,res){
  res.send(req.params.query)
})

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});