const users = require("../models/userSchema")
const moment = require("moment")

exports.userpost = async(req,res)=>{
    const file = req.file.filename;
    const {fname,lname,email,mobile,gender,location,status}=req.body
    if(!fname || !lname || !email || !mobile || !gender || !location || !status || !file){
        res.status(401).json("All inputs are required")
    }
    try {
       const peruser = await users.findOne({email:email})
       if(peruser){
        res.status(401).json("Usre already exists")
       }
       else{
        const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
        const userData = new users({
            fname,lname,email,mobile,gender,location,status,profile:file,datecreated
        })
        await userData.save()
        res.status(200).json(userData)
        console.log(userData)
       }
    } catch (error) {
        console.log(error)
    }
}