const {Router}=require("express")
const { displayForm, addTodo, markAsDone, deleteTodo } = require("../controller/todoController")
const auth = require("../middleware/auth")
const router=Router()

router.use(auth)
router.route("/").get(displayForm).post(addTodo)

router.route("/compeleted/:id").post(markAsDone)
router.route("/delete/:id").get(deleteTodo)

module.exports=router