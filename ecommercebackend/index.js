const express = require('express');
const server = express();
const PORT = 8080;





const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('');
  console.log('database connected');
}







server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})