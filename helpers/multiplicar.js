import fs from 'fs';
import colors from "colors";


const crearArchivo = async ( base = 5, list = false, nHasta = 10) => {

    try {

     
    
        let salida, consola = '';
    
        for(let i = 1; i <= nHasta; i++) {
            salida += `${ base } X ${i } = ${ base * i }\n`;
            consola += `${ base } ${'X'.yellow} ${i } ${'='.yellow} ${ base * i }\n`;
        }
        
        if( list ) {
            console.log('========================'.green);
            console.log(`     Tabla del `.green, colors.blue(base));
            console.log('========================'.green);
            console.log(consola);
        }
    
        fs.writeFileSync( `./salida/tabla-${ base}.txt`, salida );
    
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
    

}


export default crearArchivo