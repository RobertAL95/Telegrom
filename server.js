const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://chat_platzi:Ylhn5XDfesN9tgOu@cluster0.jhbxebe.mongodb.net/?retryWrites=true&w=majority')

app.use(cors());

app.use(bodyParser.json());
socket.connect(server);
app.use(express.static('public'));

router(app);

server.listen(3000, ()=> {
    console.log('la aplicacion esta escuchando en localhost:3000')
});
