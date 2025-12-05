// 3. Condicional simple
// Crea un programa que pregunte la temperatura de una ciudad y muestre:
// • “Hace calor” si la temperatura es mayor o igual a 30.
// • “Clima agradable” en caso contrario.

// Se importa 'prompt-sync' para leer la entrada del usuario
import clima from 'prompt-sync';
// Se crea la instancia de prompt
const prompt = clima();
// Se solicita la temperatura y se convierte a número con parseFloat()
const temperatura = parseFloat(prompt('Ingrese la temperatura de la ciudad: '))
// Si temperatura >= 30°C
if (temperatura>=30) {
    console.log('Hace calor');
}else {
    // Si temperatura < 30°C
    console.log('Clima agradable');
}