import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Windows xrp150";
let version: number = 14.6;
let userName: string = "Kevincho";
console.log("===========================");
console.log(systemName + " " + "v" + version);
console.log("Bienvenido, " + userName);
console.log("===========================");

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tareas: Task[] = [];
let siguienteId: number = 1;

//-funciones aplicadas
const addTask = (title: string) => {
    const nuevaTarea: Task = {
        id: siguienteId,
        title: title,
        completed: false
    };
    tareas.push(nuevaTarea);
    siguienteId++;

    console.log("Tarea añadida: " + title);
};
const listTask = () => {

    console.log("========TUS TAREAS=======")
    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
    } else {
        const tareasFormateadas = tareas.map((task) => {
            const { id, title, completed } = task;
            const estado = completed ? "Completado" : "Pending ";
            return "[" + id + "] " + title + " - " + estado;
        });
        tareasFormateadas.forEach((texto) => {
            console.log(texto);
        });
    }
};
const removeTask = () => {
    const eliminada = tareas.pop();
    if (eliminada !== undefined) {
        console.log("Tarea eliminada: " + eliminada.title);
    } else {
        console.log("No hay tareas para eliminar.");
    }
};
// debo de crear 3 funcione 
/* markCompleted
su objetivo es buscar una tarea por su numero y marcarla como completada*/
const markCompleted = (id: number) => {
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
        tarea.completed = true;
        console.log("Tarea completada: " + tarea.title);
    } else {
        console.log("Tarea no encontrada");
    }
};

/*filterPendig*/
const filterPendig = () => {
    return tareas.filter((t) => t.completed === false);
};

/*y filterCompleted*/
const filterCompleted = () => {
    return tareas.filter((t) => t.completed === true);
};


let opcion: string = "";

while (opcion !== "7") {
    console.log("\n=====MENU DE TAREAS=====");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Ultima Tarea");
    console.log("3. Listas De Tareas");
    console.log("4. Marcar Tarea Completada");
    console.log("5. Ver Tareas Pendiente");
    console.log("6. Ver Tareas Completadas");
    console.log("7. salir");
    opcion = await rl.question("Elige una opcion: ");

    switch (opcion) {
        case "1": {
            const titulo = await rl.question("Escribre el titulo de la tarea: ");
            addTask(titulo);
            break;
        }
        case "2": {
            removeTask();
            break;
        }
        case "3": {
            listTask();
            break;
        }
        case "4": {
            const respuesta = await rl.question(
                "Ingrese el ID de la tarea que completes: "
            );
            const id = Number(respuesta);
            markCompleted(id);
            break;
        }
        case "5": {
            console.log("\n====== TAREAS PENDIENTES ======");
            const pendientes = filterPendig();
            if (pendientes.length === 0) {
                console.log("No hay Tareas Pendientes");
            } else {
                pendientes.forEach((tarea) => {
                    console.log("[" + tarea.id + "] " + tarea.title + "- pending");
                });
            }
            break;
        }
        case "6": {
            console.log("\n======== TAREAS COMPLETAS ========");
            const completadas = filterCompleted();
            if (completadas.length === 0) {
                console.log("No Hay Tareas Completadas");
            } else {
                completadas.forEach((tarea) => {
                    console.log("[" + tarea.id + "] " + tarea.title + "- completed");
                });
            }
            break;
        }

        case "7":
            console.log("Saliendo del programa... bye bye");
            break;


        default:
            console.log("Opcion no valida. Intente nuevamente.")
    }
};





// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();