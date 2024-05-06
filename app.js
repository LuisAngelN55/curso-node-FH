import 'colors'
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';



const main = async() => {

    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
        
    }



    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea( desc )
            break;
        
            case '2':
                tareas.listadoCompleto()
            break;
                    
            case '3':
                tareas.listarPendientesCompletadas(true)
            break;
                    
            case '4': // Listar pendientes |
                tareas.listarPendientesCompletadas(false)
            break;

            case '5': // Completado | Pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr )
                tareas.toggleCompletadas(ids)
            break;

            case '6': // Borrar
                const id =  await listadoTareasBorrar( tareas.listadoArr )
                if ( id !== '0') {
                    const ok = await confirmar('¿Está seguro?')
                    if (ok) {
                        tareas.borrarTarea( id )
                        console.log('Tarea borrada'.yellow)
                    }
                }
            break;
        }



        guardarDB( tareas.listadoArr );

        await pausa();


    } while (opt !== '0');

}


main();