const mongoose =  require('mongoose');
const mongoURI ="mongodb://localhost:27017/cloudnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


const connectToMongo =async()=>{

mongoose.connect(mongoURI,()=>{


    console.log("connected to mongoose")
})


}

module.exports =connectToMongo;