const app=require("./app")
const db = require("./models")
require("dotenv").config()



db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on ${process.env.PORT}`)
    })
}).catch(()=>{
    
})


