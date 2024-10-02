const {Router}=require("express")
const { registerController, loginController, displayRegister, displayLogin } = require("../controller/userController")

const router=Router()


router.route("/register").post(registerController).get(displayRegister)
router.route("/login").post(loginController).get(displayLogin)

module.exports=router