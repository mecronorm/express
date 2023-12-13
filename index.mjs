import express from "express"
import food from "./food.mjs"

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{
    res.send(food)
})

app.get("/:name", (req, res)=>{
    const { name } = req.params
    console.log(name);
    const foodItem = food.find(item => item.name.toLowerCase() === name.toLowerCase())
    if (!foodItem) {
        return res.status(404).json({ message: 'Food item not found' });
      }
    res.send(foodItem)
})

app.listen(PORT, ()=> {
    console.log("server is running on http://localhost:3000");
})
