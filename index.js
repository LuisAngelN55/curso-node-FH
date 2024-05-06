import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js"
import 'colors'
import Busquedas from "./models/busquedas.js";




const main = async() => {

    const busquedas = new Busquedas();
    let opt;


    do {
        
        opt = await inquirerMenu();
        
        
        switch ( opt ) {
            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad( lugar );

                // buscar los lugares

                // seleccionar el lugar

                // Clima

                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mímina:', );
                console.log('Máxima:', );
                break;
        
            default:
                break;
        }


        if (opt !== 0 ) await pausa();

    } while (opt !== 0);

}

main();