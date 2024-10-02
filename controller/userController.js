const { createUser, checkPassword, findByEmail } = require("../services/userService")


const registerController=async(req,res)=>{
    console.log(req.body)
    const user=await createUser(req.body)

    res.redirect("/user/login")

}

const loginController=async(req,res)=>{
    const{email, password}=req.body

    const user=await findByEmail(email)

    const isValid=user.checkPassword(password)

    if(isValid){
        req.session.userId=user.id
        req.session.name=user.firstName+" "+user.lastName

        res.redirect('/todo')

    }
    else{
        res.redirect("/user/login")
    }

}

const displayRegister=(req,res)=>{

    res.render("register")
}

const displayLogin=(req,res)=>{

    res.render("login")
}


module.exports={
    registerController,
    loginController,
    displayRegister,
    displayLogin
}