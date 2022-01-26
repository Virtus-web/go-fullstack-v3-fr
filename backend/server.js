//Ici quand on créé deux dossiers dans un repo git, il faut laisser l'initialisation git à la racine du repo pour que les changements des deux dossiers soient pris en compte

//Création server --version 1
// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Hello my World !')
// })

// server.listen(process.env.PORT || 3000)


//Création server --version 2 || liaison avec express
// const http = require('http');
// const app = require('./app');

// app.set('port', process.env.PORT || 3000);
// const server = http.createServer(app);

// server.listen(process.env.PORT || 3000);


//Création server --version 3 || Amélioration de la stabilité pour le déploiement
const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);


