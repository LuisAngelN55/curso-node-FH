import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js"
import 'colors'
import Busquedas from "./models/busquedas.js";
import 'dotenv/config'



const main = async() => {

    const busquedas = new Busquedas();
    let opt;


    do {
        
        opt = await inquirerMenu();
        
        
        switch ( opt ) {
            case 1:
                //mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                // buscar los lugares
                const lugares = await busquedas.ciudad( termino );
                
                // seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;

                const lugarSel = lugares.find( l => l.id === id );

                // Guardar en DB
                busquedas.agregarHistorial( lugarSel.nombre )
                

                // Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng )

                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre );
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng );
                console.log('Temperatura:', clima.temp );
                console.log('Mímina:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Descripción del clima:', clima.desc);
            break;
        
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, index) => {
                    const idx = `${ index + 1 }.`.green;
                    console.log( `${ idx } ${ lugar }`);
                })
            break;
        }


        if (opt !== 0 ) await pausa();

    } while (opt !== 0);

}

main();

