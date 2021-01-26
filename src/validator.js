const validator = {
 isValid: function(tarjeta) {
  
    let tarjetaArray = tarjeta.split("");
  //Ya se capturó el dato, intentar el array validar del logaritmo de Luhn 
    let reverseArray = tarjetaArray.reverse();
    let unionArray = reverseArray.join("");
 

    let sumaDeDigitos = 0; // 16
    console.log("unionArray " + unionArray);
    for (let i = 1; i < unionArray.length; i =i+2){  
      let numeroPar = parseInt(unionArray.charAt(i))* 2;
        // 8  // 9  // 6 // 2 // 3
       // 16 // 18 // 12  // 4 // 6
       console.log("Numero par multiplicado " + numeroPar);
       console.log("Numero par " + unionArray.charAt(i));
      if (numeroPar >= 10){
        let numeroString = numeroPar.toString();
        // 1 + 6 = 7
        // 1 + 8 = 9
        let sumaDigitosPar = parseInt(numeroString.charAt(0)) + parseInt(numeroString.charAt(1));
        /* sumaDeDigitos = 0 + 7;
        sumaDeDigitos = 7 + 9;
        sumaDeDigitos = 16 + 3; // 19 */ 
          sumaDeDigitos = sumaDeDigitos + sumaDigitosPar; 
      }
      else {
 

        sumaDeDigitos = sumaDeDigitos + numeroPar;   
        /* sumaDeDigitos = 19 + 4
        sumaDeDitgitos = 23 + 6
        sumaDeDigitos = 29 */
      }

    } 
      for ( let i = 0; i < unionArray.length; i +=2){
        let numerosImpares = parseInt(unionArray.charAt(i)); 
        sumaDeDigitos =  sumaDeDigitos + numerosImpares;
      }
      console.log(sumaDeDigitos);

      if (sumaDeDigitos % 10 === 0){
        return true;
      }
      else {
        return false;
      } 

      

  },
  //Logaritmo de Luhn y luego el maskifi 


  maskify: function (tarjeta) { 
    if (tarjeta.length < 4) {
      return tarjeta;
    }
    const ultimos4Caracteres = tarjeta.substr(-4); 
    const ocultarCaracteres = tarjeta.substr(0, tarjeta.length -4).replace(/\d/g, '#');

    console.log(`${ocultarCaracteres}${ultimos4Caracteres}`);
    return `${ocultarCaracteres}${ultimos4Caracteres}`;
    
    
  },
};

export default validator;
//export default maskifi; 
