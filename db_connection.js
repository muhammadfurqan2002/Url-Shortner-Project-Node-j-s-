const mongoose=require('mongoose');


async function db_Connection(url){
    return mongoose.connect(url);
}




module.exports={
    db_Connection,
}