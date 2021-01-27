import validator from './validator.js';
//import maskifi from './validator.js'; 
 
const validar= document.getElementById("validar");
validar.addEventListener("click",()=>{
    let tarjeta = document.getElementById("tarjeta").value;
    let validador = validator.isValid(tarjeta);
    let stringOculto = validator.maskify(tarjeta);  
     

    if (validador == true ){
    
        alert("Tu tarjeta " +stringOculto+ " es válida");
    } else {
        alert("Tu tarjeta  " +stringOculto+ " es inválida");
    }
    }); 

//Validar datos 
//getelementbyid para los datos
//interacciones al botón 
//elementos
//selectores
//tratamiento de strings 