import express from "express"
import food from "./food.mjs"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())


function authentication(req,res,next) {
    const providedKey = req.headers['x-api-key']
    
    if (!providedKey || providedKey !== process.env.API_KEY) {
        return res.status(401).json({error: 'Unauthorized access'})
    }
    
    next()
}

app.use(authentication)

app.get("/", (req, res)=>{
    res.send(food)
})

app.get("/favorites", (req,res)=>{
    const favorites = food.filter(item=> item.favorite === true)
    res.send(favorites)
})

app.get("/:name", (req, res)=>{
    const name = req.params.name
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
