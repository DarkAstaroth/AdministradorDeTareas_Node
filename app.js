require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasBD = leerDB();

    if (tareasBD) {
        // cargar tareas
        tareas.cargarTareasFromArray(tareasBD);
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendentesCompletadas();
                break;
            case '4':
                tareas.listarPendentesCompletadas(false);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');

}

main();