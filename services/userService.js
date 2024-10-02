const {User}=require("../models")


const createUser=async(userInfo)=>{

    const user=await User.create(userInfo)

    return user

}
const findByEmail=async(email)=>{
    const user=await User.findOne({where:{
        email
    }})
    return user
}

const checkPassword=async(user,password)=>{
    return user.password==password
}
module.exports={
    createUser,
    findByEmail,
    checkPassword
}