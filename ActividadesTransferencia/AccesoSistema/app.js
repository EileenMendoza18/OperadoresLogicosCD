// 1. Acceso a un sistema
// Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:
// • El nombre de usuario es "admin".
// • La contraseña es "1234".
// Si no cumple las dos condiciones, debe mostrar "Acceso denegado".
// Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan
// ambas condiciones?

// Se importa 'prompt-sync' para leer las credenciales del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt
const prompt= datos();

// Se solicita el nombre de usuario (tipo texto)
let name  = prompt('Ingrese el nombre del usuario: ');
// Se solicita la contraseña y se convierte a número entero con parseInt()
let contraseña = parseInt(prompt('Ingrese la contraseña del usuario: '));
// Se verifica que AMBAS condiciones se cumplan simultáneamente
if (name=="admin" && contraseña==1234) {
    // Acceso permitido: ambas credenciales son correctas
    console.log(`Acceso permitido al usuario ${name}` );   
}else {
    // Acceso denegado: al menos una credencial es incorrecta
    console.log(`Acceso denegado`);
}
