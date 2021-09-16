const jwt = require("jsonwebtoken");

const fetchuser = (req,res,next)=>{
//get the user from the JWT TOKEn and add ID to object 
const token =req.header('auth-token' );
const JWT_SECRET = "ItsKunalPiplani$1234";

if(!token){

    res.status(401).send({error:"access denied,please Create User and Then try again  "});
}
try {
    const data =jwt.verify(token ,JWT_SECRET);
    req.user=data.user;
        next();  
} catch (error) {
    res.send(401);
}

}

module.exports=fetchuser;
