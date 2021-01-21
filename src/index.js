import validator from './validator.js';
 
const validar= document.getElementById("validar");
validar.addEventListener("click",()=>{
    const tarjeta= document.getElementById("tarjeta").value;
    let validador = validator.isValid(tarjeta);

    if (validador == true ){
        alert("Tu tarjeta es válida");
    } else {
        alert("Tu tarjeta es inválida");
    }
    console.log(validator.isValid(tarjeta));}); 

//Validar datos 
//getelementbyid para los datos
//interacciones al botón 
//elementos
//selectores
//tratamiento de strings 