const {Todo}=require("../models")

const addTodoToDatabase=async(todoinfo,userId)=>{
const todo=await Todo.create({name:todoinfo.name,user_id:userId})

return todo;

}

const getAllTodoFromDatabase=async(userId)=>{
    return await Todo.findAll({where:{
      user_id:userId
    }})
}

const addTodoToCompleted=async(id,is_done)=>{
    if(is_done){
       await Todo.update(
    { is_done: 1 },
    {
      where: {
        id
      },
    },
  );
    }
    else{
        await Todo.update(
            { is_done: 0 },
            {
              where: {
                id
              },
            },
          );

    }

}

const deleteTodoFromdatabase=async(id)=>{
    // Delete everyone named "Jane"
await Todo.destroy({
    where: {
      id
    },
  });
}

module.exports={
    addTodoToDatabase,
    getAllTodoFromDatabase,
    addTodoToCompleted,
    deleteTodoFromdatabase
}