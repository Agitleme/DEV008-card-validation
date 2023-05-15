import validator from './validator.js';
function validate() {

  // aqui puse las demás alertas 

  const inputnombre = document.getElementById("idnombre"); // Aqui estoy piendo que me traiga toda la caja con todo 
  const nombre1 = inputnombre.value; //Aqui estoy piendo que solo me de los datos de la caja no toda la caja 
  if (nombre1 === "") { // lanzar alerta de que no se ingreso ningun dato
    alert("Completar Nombre") // mensaje que se emite por lo anterior 
    return;
  }
  const inputfecha = document.getElementById("idfecha"); // Aqui estoy piendo que me traiga toda la caja con todo 
  const fecha1 = inputfecha.value; //Aqui estoy piendo que solo me de los numero de la caja no toda la caja 
  if (fecha1 === "") { // lanzar alerta de que no se ingreso ningun numero 
    alert("Completar Fecha") // mensaje que se emite por lo anterior 
    return;
  }

  const inputcvv = document.getElementById("idcvv"); // Aqui estoy piendo que me traiga toda la caja con todo 
  const cvv1 = inputcvv.value; //Aqui estoy piendo que solo me de los numero de la caja no toda la caja 
  if (cvv1 === "") { // lanzar alerta de que no se ingreso ningun numero 
    alert("Completar CVV") // mensaje que se emite por lo anterior 
    return;
  }
  // tarjeta validación 
  
  const inputcardnum = document.getElementById("creditCardNumber"); // Aqui estoy piendo que me traiga toda la caja con todo 
  const numtarjeta = inputcardnum.value; //Aqui estoy piendo que solo me de los numero de la caja no toda la caja 
  const masked = validator.maskify(numtarjeta) // esta variante es para poder aplicar el maskify como masked
  
  if (numtarjeta.length <= 0) { // lanzar alerta de que no se ingreso ningun numero 
    alert("Completar número de tarjeta") // mensaje que se emite por lo anterior 
    return;
  }
  const resultado = validator.isValid(numtarjeta); //esto llama a la funcion que esta en el valideitor 
  if (resultado) {
    console.log("Tarjeta Valida" + masked);// esto hace que el maskyfi que ya cree se aplique sobre los numeros en la alerta 
    alert("Tarjeta Valida" + masked);// esto hace que el maskyfi que ya cree se aplique sobre los numeros en la alerta 
    inputcardnum.value = masked // esto hace que el maskyfi que ya cree se aplique sobre los numeros despues de validar 
  } else {
    console.log("Tarjeta es inexistente" + masked); // esto hace que el maskyfi que ya cree se aplique sobre los numeros en la alerta 
    alert("Tarjeta es inexistente" + masked); // esto hace que el maskyfi que ya cree se aplique sobre los numeros en la alerta 
    inputcardnum.value = masked // esto hace que el maskyfi que ya cree se aplique sobre los numeros despues de validar 
  }
}
document.getElementById("botondedonar").addEventListener("click", validate); // segundo paso despues de la primer función


console.log(validator);