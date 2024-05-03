import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs( hideBin( process.argv ))
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Número final de la tabla'
                })
                .check( (argv, options ) => {
                    if( isNaN(argv.b)) {
                        throw 'La base debe ser un número'
                    }
                    return true
                })
                .argv

export default argv