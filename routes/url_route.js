const express=require('express');
const {postUrlHandle,redirectUrl}=require('../controllers/url_controllers');
const urlRoute=express.Router();


urlRoute.post('/',postUrlHandle);

// urlRoute.get('/:shortId',redirectUrl);
// 
module.exports={
    urlRoute,
}