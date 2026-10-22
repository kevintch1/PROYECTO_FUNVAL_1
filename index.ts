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
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];

            if (tarea !== undefined) {
                const estado = tarea.completed ? "completed" : "pending";

                console.log("[" + tarea.id + "] " + tarea.title + " - " + estado);
            }
        }
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


let opcion: string = "";

while (opcion !== "4") {
    console.log("\n=====MENU DE TAREAS=====");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Ultima Tarea");
    console.log("3. Listas De Tareas");
    console.log("4. salir");
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
        case "4":
            console.log("Saliendo del programa... bye bye");
            break;

        default:
            console.log("Opcion no valida. Intente nuevamente.")
    }
};





// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();