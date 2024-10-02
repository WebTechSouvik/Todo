const auth=(req,res,next)=>{

    const userId=req.session.userId
    if(!userId){
        res.redirect("/user/login")
    }
    else{
        next()
    }

}

module.exports=auth