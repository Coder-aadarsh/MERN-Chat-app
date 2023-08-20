const express = require('express');
const app = express(); // instantiating express

const rooms = ['general', 'tech-room', 'memes', 'usefull-stuff'];
const cors = require('cors');

app.use(express.urlencoded({extended:true})); // to allow data to be recieved from frontend
app.use(express.json());
app.use(cors());  // to setup communication between front and back

//now setting server requestes
const server = require('http').createServer(app);
const PORT = 5001;
// now setting socket.io
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, ()=>{
    console.log('Server is working at port', PORT)
})