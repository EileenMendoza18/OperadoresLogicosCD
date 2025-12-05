// 5. Switch
// Un programa debe mostrar el mes del año según el número ingresado (1 al 12).
// Ejemplo: 1 → Enero, 2 → Febrero, ..., 12 → Diciembre.

// Se importa 'prompt-sync' para leer la entrada del usuario
import mes from 'prompt-sync';
// Se crea la instancia de prompt
const prompt = mes();
// Se solicita un número del 1 al 12 y se convierte a entero con parseInt()
const numeroMes = parseInt(prompt('Ingrese un número del 1 al 12 para conocer el mes correspondiente: '));
// Se evalúa el número ingresado y se muestra el mes correspondiente
switch (numeroMes){
    case 1: {
        console.log('Enero');
        // Detiene la ejecución del switch
        break;
    }
    case 2: {
        console.log('Febrero');
        break;
    }
    case 3: {
        console.log('Marzo');
        break;
    }   
    case 4: {
        console.log('Abril');
        break;
    }
    case 5: {
        console.log('Mayo');
        break;
    }
    case 6: {
        console.log('Junio');
        break;
    }
    case 7: {
        console.log('Julio');
        break;
    }
    case 8: {
        console.log('Agosto');
        break;
    }
    case 9: {
        console.log('Septiembre');
        break;
    }
    case 10: {
        console.log('Octubre');
        break;
    }   
    case 11: {
        console.log('Noviembre');
        break;
    }
    case 12: { 
        console.log('Diciembre');
        break;
    }
    default: {
        console.log('Número inválido. Por favor, ingrese un número entre 1 y 12.');
    }
}