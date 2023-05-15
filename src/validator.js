const validator = {

  isValid: function (numtarjeta) {  //objeto que contiene funciones, esta const la declare en el index
    numtarjeta = numtarjeta.split("");  //decirle al programa que esos 16 digitos los pueda identificar por separado, uno por uno, aca solo se maneja como elementos cada contenido y despues lo convertiremos a numeros 
    for (let a = 0; a < numtarjeta.length / 2; a++) {// aqui estamos diciendo que a empieza a contar desde 0 y que para el algoritmo de Luhm se detenga a la mitad, a++ quiere decir que se va a iterar es decir que tiene que hacer el mismo procedimiento varias veces
      const ultimoLugar = numtarjeta.length - 1; //esto es por que html cuenta del 0 al 15, y js del 1 al 16
      const z = ultimoLugar - a; // le estamos pidiendo que "z" avance igual "a"solo que de atras hacia delante y parando a la mitad

      const pastillero = numtarjeta[z]; //para guardar el elemento para el que no tiene mano "ejemplo del pastillero" 
      numtarjeta[z] = numtarjeta[a]
      numtarjeta[a] = pastillero;// mientras el sistema mueva a "a" de lugar le estamos pidendo que guarde a "z" para que no se pierda en el abismo 
    }
    for (let impares = 1; impares < numtarjeta.length; impares = impares + 2) {//empieza en uno y se detiene dependiendo de los numero de tarjeta, no le decimos que se quede al 16 por que la cantidad length puede varirar
      numtarjeta[impares] = Number(numtarjeta[impares]) * 2; // Te piede que los impares se convertan en numeros para poder multiplicarlos 
      if (numtarjeta[impares] > 9) {  // si las posiciones impares son mayores a 9 entonces ...
        numtarjeta[impares] = numtarjeta[impares] - 9;// si las posiciones impares son mayores a nueve le vas a restar 9
      }
    }

    let total = 0 // por que vamos a empezar desde la posocion 0 
    for (let a = 0; a < numtarjeta.length; a++) {
      numtarjeta[a] = Number(numtarjeta[a]); // aqui le estamos diciendo que ahora si todos los elementos los convierta en numeros 
      total = total + numtarjeta[a]; // aqui le estamos diciendo que como total inicia en 0 que total va a ir cambiando 
    }

    return total % 10 === 0; // "%" se llama residuo, es el residuo de una divicion "===" es una comparacion extricta   cuando son == es una comparacion amplia 
    // el total lo vas a dividir entre 10 y te debe quedar 0 
  },

  maskify: function (numtarjeta) {
    const visibles = 4
    const digitos = numtarjeta.slice(0, -visibles).replace(/./g, "#"); // selecciona una porcion de los numeros de la tarjeta y los remplaza por #
    const ultimos = numtarjeta.slice(-visibles);// slice selecciona esto se utiliza para obtener los ultimos digitos de la tarjeta y que no se tapen
    return digitos + ultimos;// devuelve los tapados mas los números.
  },
}


export default validator;
