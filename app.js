import argv from "./config/yargs.js";
import crearArchivo from "./helpers/multiplicar.js";
import "colors";

console.clear();


crearArchivo( argv.base , argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));

