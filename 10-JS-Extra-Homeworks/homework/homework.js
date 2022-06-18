// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  /*var objetoArray = Object.keys(objetos);
  var matriz = [];
  for (let i = 0; i < objetoArray,length; i++){
    const claveValor = [objetoArray [i],objeto[objetoArray [i]]]
    matriz.push(claveValor);
  }
  return matriz;*/

  var objetoToArray = Object.entries(objeto); //el metodo .entries toma el par key:value y lo devuelve en un array.
  return objetoToArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var contieneChar = {};   //creao el objeto contenedor.
  for (let i = 0; i < string.length; i++){  //recorre el string 
    if (contieneChar.hasOwnProperty(string[i])){  // da condicion a cada caracter del string para que, si ya existe en nuestro objeto le sume 1.
      contieneChar[string[i]] += 1;
    }
    else contieneChar[string[i]] = 1;;  // de lo contrario agregra el caracter al objeto. 
  }
  return contieneChar;  // devuelve un objeto vacio mas del que deberia.
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var string = s.split(""); //convierto string en array
  var minuscula =[];
  var mayuscula = [];

  for (let i = 0; i<s.length; i++){ //recorro el string
    if (s[i] === s[i].toUpperCase()){ //asigno condicionde que si es MAYUSCULA lo pushee dentro de mayusculas 
    mayuscula.push(s[i]) //toUpperCase no olvidar ()
    }
    else minuscula.push(s[i]); 
  }
  return mayuscula.join("") + minuscula.join("");

 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    var array = str.split("");
    var arrayReverse = array.reverse();
    var arrayJoin = arrayReverse.join("");
    var strReverse = arrayJoin.split(" ");
    var finalReverse = strReverse.reverse();

    return finalReverse.join(" ");
    
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  
  var numInvertido = numero.toString().split("").reverse().join("");
  if (numero.toString() === numInvertido){
    return "Es capicua";
  }
  return "No es capicua";

  /*var numeroString = numero.toString();
  var numeroSplit = numeroString.split("");
  var numeroReverse = numeroSplit.reverse().join("");
  if (numeroString === numeroReverse){
    return "Es capicua";
  }
  return "No es capicua"*/

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var newArray = [];
  var cadenaSplit = cadena.split("");
  for (let i = 0; i < cadenaSplit.length; i++) {
    if (cadenaSplit[i] === "a" || cadenaSplit[i] === "b" || cadenaSplit[i] === "c"){
      conABC=cadena[i];
    }
    else{
      newArray.push(cadena[i]);
    }
  }
  
  return newArray.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var mayores = [];
  for(let p1=0; p1<arr.length-1; p1++) {
      for(let p2=0; p2<arr.length-1; p2++){
          if(arr[p2].length > arr[p2+1].length) {
              mayores = arr[p2]
             arr[p2] = arr[p2+1]
              arr[p2+1] = mayores
          }
      }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

