import validator from './validator.js';
//import maskifi from './validator.js'; 
 
const validar= document.getElementById("validar");
validar.addEventListener("click",()=>{
    let tarjeta = document.getElementById("tarjeta").value;
    let validador = validator.isValid(tarjeta);
    let stringOculto = validator.maskify(tarjeta);  
     
console.log(validar)
    if (validador == true ){
    
        alert("Tu tarjeta " +stringOculto+ " es válida");
    } else {
        alert("Tu tarjeta  " +stringOculto+ " es inválida");
    }
    console.log(validator.isValid(tarjeta));}); 

//Validar datos 
//getelementbyid para los datos
//interacciones al botón 
//elementos
//selectores
//tratamiento de strings 