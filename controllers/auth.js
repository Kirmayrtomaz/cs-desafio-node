import jwt  from 'jsonwebtoken';
import config from  '../config/config.development';
module.exports  =(app) =>{

  const createToken = (user_id) =>{
    let token = false;
    
    if( process.env.NODE_ENV ){
      
      config.jwt.config =  {
        expiresIn: 2  
     }

    
    }

    if(typeof user_id !== 'undefined' && typeof user_id === 'string' ){

      token = jwt.sign({
          data: user_id
      }, config.jwt.secret, config.jwt.config  );
    }
    
    return token;
  }
  
  const verifyToken = (token)=>{
  let result = '';  
  try{
   let verify =  jwt.verify(token, config.jwt.secret)
  result = verify.data; 
  }catch(error){
    
    result = (error.name !==  'JsonWebTokenError')? 'Sessão inválida' : 'Não Autorizado'; 


  }
    
   return result;    
    
    
  
  }

  return {
  
    createToken,
    verifyToken
  }
};
