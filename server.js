var express = require('express');
var app = express();
const path = require('path');
var moment = require('moment');

var port = process.env.PORT || 8080; 

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/:query',function(req,res){
    var date;
    if(/^\d{8,}$/.test(req.params.query)) {
        date = moment(req.params.datestring, "X");
    }
    else {
        date = moment(req.params.query, "MMMM D, YYYY");
    }
    
    if(date.isValid()) {
        res.json({
            unix: date.format("X"),
            natural: date.format("MMMM D, YYYY")
        });
    }
    else {
        res.json({
        unix: null,
        natural: null
    });
  }
})

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});