const mongoose=require("mongoose")
var mongoUrl="mongodb+srv://pranav:pranav003@cluster0.rudmo81.mongodb.net/Scanning"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Database Connected")

})

.catch(err =>
    {
        console.log(err)
    })

    module.exports=mongoose