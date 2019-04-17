
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const server=app.listen(80,'207.154.192.163');
const logger = require('winston');
console.log("port 80 207.154.192.163 dinleniyor");
const logger = require('winston');


const nsp=io.of('/classes');

const room=["sinif1","sinif2","sinif3"];
const chatRoom=["oda1","oda2","oda3"];
app.use(express.static(__dirname + '/public'));
nsp.on('connection',function (socket) {
    socket.on('joinRoom',(room) => {

            socket.join(room);
            console.log(room +" e girildi");

    });
    socket.on('drawing', function(data){
        socket.broadcast.emit('drawing', data);

    });

    socket.on('rectangle', function(data){
        socket.broadcast.emit('rectangle', data);

    });

    socket.on('linedraw', function(data){
        socket.broadcast.emit('linedraw', data);

    });

    socket.on('circledraw', function(data){
        socket.broadcast.emit('circledraw', data);

    });

    socket.on('ellipsedraw', function(data){
        socket.broadcast.emit('ellipsedraw', data);

    });

    socket.on('textdraw', function(data){
        socket.broadcast.emit('textdraw', data);

    });

    socket.on('copyCanvas', function(data){
        socket.broadcast.emit('copyCanvas', data);

    });

    socket.on('Clearboard', function(data){
        socket.broadcast.emit('Clearboard', data);


        });


    });

    io.on('connection', (socket) => {

        console.log('made socket connection', socket.id);

        // Handle chat event
        socket.on('chat', function(data){
            // console.log(data);
            io.sockets.emit('chat', data);
        });

        // Handle typing event
        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data);
        });

    });

io.of("/voice").on("connection", (socket) => {
    socket.on('radio',function(blob){
        socket.broadcast.emit('voice',blob);
    });

    });






http.listen(port, () => console.log('Dinlenen port: ' + port));

//second port
