const {urlModel}=require('../models/url_model');
const shortid=require('shortid');



async function postUrlHandle(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});

    const urlId=shortid.generate();

    await urlModel.create({
            shortId:urlId,
            redirectURL:body.url,
            visitHistory:[]
    });

    return res.json({id:urlId});
}

// async function redirectUrl(req,res){
//     const id=req.params.shortId;
//     const entry=await urlModel.findOneAndUpdate(
//         {
//             id
//         },
//         {
//             $push:{
//                 visitHistory:{
//                  timeStamp:Date.now(), 
//                 },
//             }
//         }
        
//     );

//     return res.redirect(entry.redirectURL);

// }



module.exports={
    postUrlHandle,
    // redirectUrl,
}