var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3002;
app.get('/',function (req,res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/get',function (req,res) {
    console.log(req.query);
    io.emit('chat message',req.query.info);
    res.end();
});
io.on('connection',function (socket) {
    console.log("\n有人连接\n");
    socket.on('chat message',function (msg) {
        io.emit('chat message',msg);
    });
});
http.listen(port,function () {
    console.log("\n重启socket长连接3002\n");
});