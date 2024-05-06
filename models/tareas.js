
/**
 *  _listado:
 *      { 'uuid-123421-4134234-2: { id:12, desc: asd, completadoEN:92231 } },
 */

import { Tarea } from "./tarea.js";

class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea )
        })

        return listado
    }

    constructor () {
        this._listado = {};
    }


    borrarTarea( id = '') {
        if (this._listado[id] ) {
            delete this._listado[id]
        }
    }


    cargarTareasFromArray( tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        });
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log()
        this.listadoArr.forEach( (tarea, index)  => {
            const estado = ( tarea.completadoEn ) ? "Completada".green : 'Pendiente'.red 
            let tareaText = `${ ((index+1).toString()+'.').blue } ${tarea.desc} :: ${estado}`
            console.log(tareaText)
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        console.log()
        this.listadoArr.forEach( (tarea, index)  => {
            
            const estado = ( tarea.completadoEn ) ? tarea.completadoEn.green : 'Pendiente'.red 
            let tareaText = `${ ((index+1).toString()+'.').blue } ${tarea.desc} :: ${estado}`

            if (completadas && estado) {
                console.log(tareaText)
            }
            if (!completadas && estado.includes("Pendiente")) {
                console.log(tareaText)
            }
        });
    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null
            }
        })
    }
}




export {
    Tareas
}