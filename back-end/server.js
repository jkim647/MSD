const express = require("express")
const mongoose = require("mongoose")


console.log("working")
const app = express()
app.use(express.json())

const db = "mongodb://localhost:27017/myfullstackapp"

 mongoose.connect(db, {useNewUrlParser:true})
   .then(console.log("Connected to MongoDB"))
   .catch(err => console.log(err))

 const todoSchema = new mongoose.Schema({
   title: String,
   complete: {
     type: Boolean,
     default: false
   } })

 const Todo= mongoose.model('todo', todoSchema)

  app.get("/todos", (req,res) => {
    Todo.find().then(todo=> res.json(todo))
  })

  app.post("/todos", (req,res) =>{
    const newTodo = new Todo({
      title:req.body.title
    })
    newTodo.save().then(todo => todo.json(res))
  })



const PORT = 3000

app.listen(PORT, ()=>{
    console.log("server is running at port 5000")
}); 