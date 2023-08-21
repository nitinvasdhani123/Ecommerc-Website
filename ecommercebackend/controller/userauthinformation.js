const model = require('../model/userauthinformation');
const userdata = model.userdatas;
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.createuser = async(req,res)=>{
    try {
        const userData = new userdata(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);
        userData.password = hash;
        var token = jwt.sign({ email: req.body.email }, 'shhhhh');
        userData.token = token;
        const savedData = await userData.save();
        res.status(201).json(savedData);
      } catch (error) {
        res.status(500).json({ message: 'An error is occurred in creating user successfully in the database' });
      }
}

exports.verifyuser = async(req,res)=>{
    try {
      const userinfo = await userdata.findOne({email:req.body.email})
      const ispassword = bcrypt.compareSync(req.body.password, userinfo.password);
      if (ispassword){
        res.status(200).json(userinfo);
      }
      }
      catch (error) {
        console.log(error)
        res.status(401).json({ message: "Your account is not created yet, create your account first" });
      }
}
