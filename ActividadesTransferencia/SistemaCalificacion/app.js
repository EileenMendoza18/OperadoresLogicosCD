// 5. Sistema de calificaciones con condiciones lógicas
// Un estudiante aprueba una materia si:
// • Su nota final es mayor o igual a 60 y
// • Su asistencia es mayor o igual al 80%.
// Si no cumple ambas condiciones, debe mostrar "Reprobado".
// Pregunta de análisis: ¿Qué operador lógico garantiza que ambas condiciones se
// evalúen al mismo tiempo?

// Se importa 'prompt-sync' para leer los datos del estudiante
import datos from 'prompt-sync';
// Se crea la instancia de prompt
const prompt= datos();
// Se solicita la nota final del estudiante y se convierte a decimal
let nota_final = parseFloat(prompt('Ingrese la nota final del estudiante: '))
// Se solicita el porcentaje de asistencia y se convierte a decimal
let asistencia =parseFloat(prompt('Ingrese el porcentaje de asistencia del estudiante: '))
// Se verifica que AMBAS condiciones se cumplan simultáneamente para aprobar
if (nota_final>=60 && asistencia>=80) {
    // Aprobado: cumple con AMBOS requisitos
    console.log('Aprobado');
}else{
    // Reprobado: no cumple con AL MENOS UNO de los requisitos
    console.log('Reprobado');
    
}