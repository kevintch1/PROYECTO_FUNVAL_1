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


let tareas: string[] = [];


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
            tareas.push(titulo);
            console.log("Tarea Añadida: " + titulo);
            break;
        }
        case "2": {
            const elimanada = tareas.pop();

            if (elimanada !== undefined) {
                console.log("Tarea Eliminada: " + elimanada);
            } else {
                console.log("No hay tareas para eliminar.");
            }
            break;
        }
        case "3": {
            console.log("======TUS TAREAS======");

            if (tareas.length === 0) {
                console.log("No hay tareas registradas.");
            } else {
                for (let i = 0; i < tareas.length; i++) {
                    console.log((i + 1) + ". " + tareas[i]);
                }
            }
            break;
        }
        case "4":
            console.log("Saliendo del programa... bye bye");
            break;

        default:
            console.log("Opcion no valida. Intente nuevamente.")
    }
}



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();