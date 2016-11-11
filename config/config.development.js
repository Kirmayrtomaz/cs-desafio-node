export default {

  server: {
    port: 3000,
    host: 'localhost',
  },
  bodyParser: {
    extend: true,
  },
  mongodb: {
    uri: 'mongodb://localhost:27017/user'
  },
  consign: {
    verbose: false,
  },

};
