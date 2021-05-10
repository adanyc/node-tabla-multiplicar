const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// Sin Yargs (manual - no recomendado)
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo(base, listar, hasta)
  .then(archivo => console.log(archivo.rainbow, 'creado'))
  .catch(err => console.log(err));