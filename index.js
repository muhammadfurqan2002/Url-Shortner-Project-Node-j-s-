const express=require('express');
const {db_Connection}=require('./db_connection');
const {urlRoute}=require('./routes/url_route');
const {urlModel}=require('./models/url_model')
const app=express();



db_Connection("mongodb://127.0.0.1:27017/UrlGen").then(()=>{
        console.log("db-connected");
});


app.use(express.json());

app.use("/url",urlRoute);

app.get('/:shortId', async (req, res) => {
    
        const shortId = req.params.shortId;
        const entry = await urlModel.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timeStamp: Date.now() } } },
        );
        
        if (entry) {
            console.log('Entry:', entry); 
            res.redirect(entry.redirectURL);
          } else {
            console.log("Error Found!")
            return res.json({error:"Not Found"});
          }
        
});



app.listen(8000,()=>{
        console.log("Server Started");
});

