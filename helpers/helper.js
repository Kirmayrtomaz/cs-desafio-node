import expressJoi from 'express-joi';


const Joi = expressJoi.Joi;

module.exports = (app) => {
  const UserValidate = {

    nome: Joi.types.string().min(2).max(200).required(),
    email: Joi.types.string().email().required(),
    senha: Joi.Types.string().required(),
    telefone: Joi.types.array(),
  };


  return {

    UserValidate,

  };
};
