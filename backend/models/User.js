const mongoose = require('mongoose');


const UserSchema = new Schema({
 name:{
type:String,
required:true


 },
 email:{
    type:String,
    required:true,
    unique:true
    
     },
     pasword:{
        type:String,
        required:true
        
        
         },


         date:{
            type:Date,
            default:Date.now
            
            
             }
});