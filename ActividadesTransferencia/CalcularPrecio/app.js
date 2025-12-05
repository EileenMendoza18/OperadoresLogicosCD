// 2. Calcular precio de entradas al cine
// Un cine aplica las siguientes reglas:
// • Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
// • Si tiene entre 12 y 18 años, el valor es 8000.
// • Si es mayor de 18, el valor es 10000.
// • Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
// al valor de la entrada.

// Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if-
// else if-else o switch? ¿Por qué?

// Se importa 'prompt-sync' para leer los datos del cliente
import datos from 'prompt-sync';
// Se crea la instancia de prompt
const prompt= datos();

// Se solicita la edad del cliente y se convierte a número entero
let edad = parseInt(prompt('Ingrese la edad del cliente: '));
// Se pregunta si es estudiante (respuesta esperada: "si" o "no")
let estudiante = prompt('¿La persona es un estudiante? (si/no): ')

// Se determina el precio según la edad y si es estudiante
if (edad <12 ) {
    // Subcondición: verificar si es estudiante
    if (estudiante=="si") {
        console.log('El valor de la entrada es de $4.000 con el descuento(20%)');
    }else{
        console.log('El valor de la entrada es de $5.000 sin el descuento');
    }
}else if (edad>=12 && edad<=18) {
    if (estudiante=="si") {
        console.log('El valor de la entrada es de $6.400 con el descuento(20%)');
    }else{
        console.log('El valor de la entrada es de $8.000 sin el descuento');
    }
}else if(edad>18 && edad<100){
    if (estudiante=="si") {
        console.log('El valor de la entrada es de $8.000 con el descuento(20%)');
    }else{
        console.log('El valor de la entrada es de $10.000 sin el descuento');
    }
}else{
    console.log('La edad debe ser un numero mayor a 0 y menor que 100');
}