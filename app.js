const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg.rainbow))
    .catch(err => console.log(err));