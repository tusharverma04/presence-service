const mongoose = require("mongoose") ;

MONGOURI="mongodb+srv://aditi:aditi123@cluster0-sacre.mongodb.net/test?retryWrites=true&w=majority"

const IntiateMongoServer = async () => {
    try{
        await mongoose.connect(MONGOURI, {
           useNewUrlParser: true 
        });
        console.log("Connected to DB !!") ;
    }catch(e){
        console.log("Not Connected to Database ERROR! ", e);
        throw e ;
    }
};

module.exports = IntiateMongoServer ;