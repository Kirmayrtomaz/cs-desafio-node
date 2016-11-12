import expressJoi from 'express-joi';


const Joi = expressJoi.Joi;

module.exports = (app) => {
  const UserValidate = {

    nome: Joi.types.string().min(2).max(200).required(),
    email: Joi.types.string().email().required(),
    senha: Joi.Types.string().required(),
    telefone: Joi.types.array(),
  };
  
  const guid = () => {
       s4 = ()=> {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
  }

  return {

    UserValidate,
    guid
  };
};
