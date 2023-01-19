const users = require("../models/userSchema")
const moment = require("moment")

// register user post
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

// register user get
exports.userget = async(req,res)=>{
    const search = req.query.search || ""
    console.log(search)
    const query = {
        fname: {$regex:search, $options:"i"}
    }
    try {
        const usersdata = await users.find(query)
        console.log(usersdata,"qwertyu")
        res.status(200).json(usersdata)
    } catch (error) {
        res.status(401).json(error)
    }
}

// single user
exports.singleuser = async(req,res)=>{

    const {id}= req.params;
    try {
        const suser = await users.findOne({_id:id})
        res.status(200).json(suser)
    } catch (error) {
        
    }
}

// edit user
exports.useredit = async (req,res)=>{
    const {id} = req.params 
    const {fname,lname,email,mobile,gender,location,status,user_profile}=req.body
    const file = req.file ? req.file.filename: user_profile

    const dateupdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")

    try {
        const updateuser = await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,location,status,profile:file,dateupdated
        },{
            new:true
        }
        )
        await updateuser.save()
        res.status(200).json(updateuser)

    } catch (error) {
        res.status(401).json(server)
    }
}

// deleteuser 
exports.userdelete = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteuser = await users.findByIdAndDelete({_id:id})
        res.status(200).json(deleteuser)
    } catch (error) {
        res.status(401).json(error)
    }
}