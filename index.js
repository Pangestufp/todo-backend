const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())


app.use(express.json())

let todos = []

app.get("/todos", (req, res)=>{
    return res.status(200).json({
        data: todos,
        message: "success"
    })
})

app.get("/todos/:id", (req, res) => {
  const id = req.params.id

  const todo = todos.find((t) => t.id == id)

  if (!todo) {
    return res.status(404).json({
      message: "Data Not Found",
    })
  }

  return res.status(200).json({
    data: todo,
    message: "success",
  })
})

app.post("/todos", (req, res)=>{
    const {id, title, description, status, created_date} = req.body

    if (id == "" || title == "" || description == "" || status == "" || created_date == ""){
        return res.status(400).json({
            message: "Bad request"
        })
    }

    newtodo = {id:id, title:title, description:description, status:status, created_date:created_date}

    todos.push(newtodo)

    return res.status(201).json({
        data: todos,
        message :"Success create User"
    })

})

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;

  const { title, description, status } = req.body;

  let index = todos.findIndex((t) => t.id == id);

  if (index < 0) {
    return res.status(404).json({
      message: "Data Not Found",
    });
  }

  todos[index] = {
    ...todos[index],
    title: title ?? todos[index].title,
    description: description ?? todos[index].description,
    status: status ?? todos[index].status,
  };

  return res.status(200).json({
    data: todos[index],
    message: "Success update todo",
  });
});

app.delete("/todos/:id",(req, res)=>{
    const id = req.params.id
    let index  = -1;

    for (let i = 0; i<todos.length; i++){
        if (todos[i].id==id){
            index = i
            break;
        }
    }

    if (index < 0 ){
        return res.status(404).json({
            message: "Data Not Found"
        })
    }


    todos.splice(index, 1);

    return res.status(200).json({
        message: "Success",
        data : todos
    })
})

app.listen(3000,()=>{
    console.log("run")
})