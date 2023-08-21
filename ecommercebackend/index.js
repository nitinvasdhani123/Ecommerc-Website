const express = require('express');
const server = express();
var cors = require('cors')
const PORT = 8080
const userrouter = require('./routes/route')


// middleware to connect react port 3000 with backend port 8080 : it act like barrier because security of each port don't allow both without this middleware
server.use(cors());

// bodyparser : it take data from body
server.use(express.json())

// middleware to connect with users routes
server.use('/',userrouter.userrouter)


const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://nitinkumarvasdhani786:NSy8WlFrCSK4LUcz@cluster0.aca0zj3.mongodb.net/');
  console.log('database connected');
}

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})