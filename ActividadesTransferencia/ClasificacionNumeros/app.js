// 3. Clasificación de números
// Crea un programa que pida un número entero y muestre:
// • "Número positivo" si el número es mayor que 0.
// • "Número negativo" si es menor que 0.
// • "Cero" si es igual a 0.
// Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
// número es par o impar?

// Se importa 'prompt-sync' para leer la entrada del usuario
import datos from 'prompt-sync';
// Se crea la instancia de prompt
const prompt= datos();
// Se solicita un número y se convierte a decimal con parseFloat()
let numero = parseFloat(prompt('Ingrese un numero: '))
// Primera evaluación: determinar si el número es par o impar
if (numero %2==0) {
    // Subcondición anidada: clasificar por signo
    console.log('Numero par');
    if (numero>0) {
        console.log('Numero positivo');
    }else if (numero<0) {
        console.log('Numero negativo');
    }else{
        console.log('Cero');
    }
}else {
    console.log('Numero impar'); 
    if (numero>0) {
        console.log('Numero positivo');
    }else if (numero<0) {
        console.log('Numero negativo');
    }else{
        console.log('Cero');
    }
}
