// 4. Condicional múltiple
// Un programa debe clasificar la velocidad de un vehículo:
// • Si la velocidad es menor a 30 → “Muy lento”
// • Entre 30 y 60 → “Velocidad moderada”
// • Entre 61 y 100 → “Rápido”
// • Mayor a 100 → “Muy rápido”

// Se importa el módulo 'prompt-sync' que permite leer entradas del usuario
import velocidad from 'prompt-sync';
// Se crea la instancia de prompt para solicitar datos
const prompt = velocidad();
// Se solicita la velocidad y se convierte a número decimal con parseFloat()
const velVehiculo= parseFloat(prompt('Ingrese la velocidad del vehículo (km/h): '));
// Velocidad < 30 km/h
if (velVehiculo<30) {
    console.log('Muy lento');
}else if (velVehiculo>=30 && velVehiculo<=60) {
    // Velocidad entre 30 y 60 km/h
    console.log('Velocidad moderada');
}else if (velVehiculo>=61 && velVehiculo<=100) {
    // Velocidad entre 61 y 100 km/h
    console.log('Rápido');
}else {
    // Velocidad > 100 km/h
    console.log('Muy rápido');
}