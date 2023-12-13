import express from "express"
import food from "./food.mjs"
import path from "path"

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{
    res.send(food)
})

food.forEach(foodItem =>{
    const foodname = foodItem.name.replaceAll(" ", "%20")
    console.log(foodname);
    app.get("/"+foodname, (req, res)=>{
        res.send(foodItem)
    })
})

// app.get("/Baked%20Potato%20Soup", (req, res)=> {
//     res.send(food[0])
// })

// app.get("/Homemade%20Beef%20Stew", (req, res)=>{
//     res.send(food[1])
// })

// app.get("/Panettone",(req, res) =>{
//     res.send(food[2])
// })

// app.get("/Soft%20Gingerbread%20Cookies", (req, res)=>{
//     res.send(food[3])
// })



app.listen(PORT, ()=> {
    console.log("server is running on http://localhost:3000");
})
