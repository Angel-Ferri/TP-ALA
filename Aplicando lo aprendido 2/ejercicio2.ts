import * as readlineSync from 'readline-sync';

// Abstracción: Definición del tipo de dato estructurado para una Tarea
type Tarea = {
    id: number;
    descripcion: string;
    completada: boolean;
};

// Módulo: Mostrar el menú principal
function mostrarMenu(): void {
    console.log("\n==============================");
    console.log("   GESTIÓN DE TAREAS (TS)     ");
    console.log("==============================");
    console.log("1. Ver tareas");
    console.log("2. Agregar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Eliminar tarea");
    console.log("5. Salir");
}

// Módulo: Listar todas las tareas almacenadas
function listarTareas(tareas: Tarea[]): void {
    if (tareas.length === 0) {
        console.log("\nNo hay tareas registradas en la lista.");
        return;
    }
    console.log("\n--- LISTA DE TAREAS ---");
    for (let i = 0; i < tareas.length; i++) {
        let estado = tareas[i].completada ? "[X]" : "[ ]";
        console.log(`${tareas[i].id}. ${estado} ${tareas[i].descripcion}`);
    }
}

// Módulo: Agregar una nueva tarea
function agregarTarea(tareas: Tarea[]): void {
    let descripcion = readlineSync.question("Ingrese la descripcion de la nueva tarea: ");
    let nuevoId = tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1;
    
    let nuevaTarea: Tarea = {
        id: nuevoId,
        descripcion: descripcion,
        completada: false
    };

    tareas.push(nuevaTarea);
    console.log("¡Tarea agregada exitosamente!");
}

// Módulo: Marcar una tarea como completada
function completarTarea(tareas: Tarea[]): void {
    listarTareas(tareas);
    if (tareas.length === 0) return;

    let idInput = parseInt(readlineSync.question("Ingrese el ID de la tarea que desea completar: "));
    let encontrada = false;

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === idInput) {
            tareas[i].completada = true;
            encontrada = true;
            console.log("¡La tarea ha sido marcada como completada!");
            break;
        }
    }

    if (!encontrada) {
        console.log("No se encontró ninguna tarea con el ID ingresado.");
    }
}

// Módulo: Eliminar una tarea de la lista
function eliminarTarea(tareas: Tarea[]): void {
    listarTareas(tareas);
    if (tareas.length === 0) return;

    let idInput = parseInt(readlineSync.question("Ingrese el ID de la tarea que desea eliminar: "));
    let indiceEliminar = -1;

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === idInput) {
            indiceEliminar = i;
            break;
        }
    }

    if (indiceEliminar !== -1) {
        tareas.splice(indiceEliminar, 1);
        console.log("¡Tarea eliminada exitosamente!");
    } else {
        console.log("No se encontró ninguna tarea con el ID ingresado.");
    }
}

// Función principal que controla el flujo estructurado del programa
function iniciarAplicacion(): void {
    let tareas: Tarea[] = [];
    let opcion: number = 0;

    do {
        mostrarMenu();
        opcion = parseInt(readlineSync.question("Seleccione una opcion (1-5): "));

        if (opcion === 1) {
            listarTareas(tareas);
        } else if (opcion === 2) {
            agregarTarea(tareas);
        } else if (opcion === 3) {
            completarTarea(tareas);
        } else if (opcion === 4) {
            eliminarTarea(tareas);
        } else if (opcion === 5) {
            console.log("Saliendo de la aplicacion. ¡Hasta luego!");
        } else {
            console.log("Opción inválida. Por favor, ingrese un número del 1 al 5.");
        }
    } while (opcion !== 5);
}

// Ejecución del programa
iniciarAplicacion();