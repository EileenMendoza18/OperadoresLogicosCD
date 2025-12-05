// 4. Menú de opciones
// Un cajero automático presenta el siguiente menú:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Crea un programa con switch que muestre la acción correspondiente según el número
// ingresado.
// Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1
// y 4?

// Se importa 'prompt-sync' para leer la opción seleccionada por el usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt
const prompt= datos();
// Se muestra en consola el menú con las 4 opciones disponibles
console.log(`Menu:
    1. Consultar saldo
    2. Retirar dinero
    3. Depositar dinero
    4. Salir`
);
// Se solicita que el usuario ingrese un número del 1 al 4
let opcion=parseInt(prompt('Ingrese la opcion que desea del menu: '))
// Se evalúa la opción ingresada y se ejecuta la acción correspondiente
switch (opcion) {
    case 1:
        console.log('Consultara el saldo');
        break;

    case 2: 
        console.log('Retirara dinero');
        break; 

    case 3: 
        console.log('Depositara dinero');
        break; 

    case 4: 
        console.log('Saldra del cajero');
        break; 
    // Caso por defecto: Opción inválida (fuera del rango 1-4)
    default:
        console.log('El numero de la opcion debe estar entre 1 y 4, intentelo de nuevo');
        break;
}