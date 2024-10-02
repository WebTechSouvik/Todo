const { addTodoToDatabase, getAllTodoFromDatabase, addTodoToCompleted, deleteTodoFromdatabase } = require("../services/todo")

const displayForm=async(req,res)=>{
    const userId=req.session.userId
    const allTodo=await getAllTodoFromDatabase(userId)
    res.render("home",{
        allTodo,
        userName:req.session.name
    })
}


const addTodo=async(req, res)=>{
    const userId=req.session.userId
    const todo=await addTodoToDatabase(req.body,userId)
    
   return res.redirect("/todo")

}


const markAsDone=async(req,res)=>{
    const id=req.params.id

    await addTodoToCompleted(id,req.body.is_done||null)


    return res.redirect("/todo")

}

const deleteTodo=async(req,res)=>{
    const id=req.params.id
    await deleteTodoFromdatabase(id)
    return res.redirect("/todo")
}
module.exports={
    displayForm,
    addTodo,
    markAsDone,
    deleteTodo


}