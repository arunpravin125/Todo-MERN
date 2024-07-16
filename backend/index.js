const express = require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const app=express()

app.use(cors())//cors policy
app.use(express.json())//

// var store=["apple","orange"]

mongoose.connect("mongodb+srv://arunpravin125:okmijnuhb@cluster0.vbaicva.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Data base success connected !")).catch(()=>console.log("Failed to  connect"))

const fruitlist = mongoose.model("fruit",{name:String},"fruit")

app.get("/fruit",function(req,res){
    fruitlist.find().then(function(retData){
        console.log(retData)
        res.send(retData)
    }).catch(()=>console.log("failed"))
    // res.send(store)
})

app.post("/addfruit",function(req,res)
{
    var newfruit=req.body.newfruit
// store.push(newfruit)
 var newFruit = new fruitlist(
    {
        name:newfruit

    }
 )
newFruit.save().then(function(fruitdata){
    console.log("Saved successfull")
    
})
})

app.listen(6001,function(){
    console.log("server running")
})