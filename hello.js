/**
 * Created by xjy on 8/5/16.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);