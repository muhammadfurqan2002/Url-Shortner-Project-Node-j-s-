const mongoose=require("mongoose");



const UrlSchema=new mongoose.Schema({
        shortId:{
            type:String,
            require:true,
            unique:true
        },
        redirectURL:{
            type:String,
            require:true
        },
        visitHistory:{
            type:[{timeStamp:{type:Number}}]
        },
},{timestamps:true});

const urlModel=mongoose.model("URL",UrlSchema);



module.exports={
        urlModel,
}




