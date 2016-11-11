import mongoose from 'mongoose';


module.exports = () => {
  const schema = new mongoose.Schema({

    id: {
      type: String,
      trim: true,
      required: true,
    },
    nome: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    telefone: [],
    data_criacao: {
      type: Date,
      default: Date.now,
    },
    data_atualizacao: {
      type: Date,
      default: Date.now,
    },
    token: {
      type: String,
    },

  });

  return mongoose.model('user', schema);
};

