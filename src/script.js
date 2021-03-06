/*var Casillas = new Object();
    Casillas.caracter = String="";
    Casillas.i= Number=0;
    Casillas.y= Number=0;
    Casillas.anterior = new Casillas;
    Casillas.checado= Boolean=0;
*/
class Casilla {
    constructor(caracter, x, y) {
        this.caracter = caracter;
        this.renglon = x;
        this.columna = y;
        this.visitado = false;
        this.anterior = 0;

        this.arriba = true;
        this.abajo = true;
        this.derecha = true;
        this.izquierda = true;
    }
}
var tablero = [];
var nStrings = Number = 0;
var maxMov = 0;

function inicio() {
    var contador = 0;
    n = document.getElementById("nStrings").value;
    this.nStrings = n;
    //meter un Disabled aqui
    console.log(n);
    for (let index = 0; index < n; index++) {
        for (let indey = 0; indey < n; indey++) {
            this.tablero[contador] = new Casilla;
            this.tablero[contador].renglon = index;
            this.tablero[contador].columna = indey;
            console.log("Renglon: " + tablero[contador].renglon + "  Columna: " + tablero[contador].columna + "  Id " + contador);
            contador++;
        }
    }
    //desabilitar tambien el boton para que no cree mas tablas y cambiar imprimir por un reiniciar
    document.getElementById('ingresarTam').disabled=true;
    document.getElementById('ingresarTam').className="disabled";
    document.getElementById('comprobar').disabled=false;
    document.getElementById('comprobar').className="enabled";
    crearDin(n);
    return false;

}
function cargarString() {
    var aux = 0;
    let camino = new String;
    for (let index = 0; index < this.nStrings; index++) {
        camino = document.getElementById("string-" + index).value;
        console.log(camino);
        for (let indey = 0; indey < this.nStrings; indey++) {
            if (aux==0) {
                this.tablero[aux].caracter = ".";//Cambia el primer caracter por . en caso de que sea #
                camino[indey]=".";
            } else {
                this.tablero[aux].caracter = camino[indey]; 
            }
            
            //En el caso de volver a ejecutarse se reinician las variables
            this.tablero[aux].visitado = false;
            this.tablero[aux].arriba = true;
            this.tablero[aux].abajo = true;
            this.tablero[aux].derecha = true;
            this.tablero[aux].izquierda = true;
            this.tablero[aux].anterior = 0;

            if (camino[indey] == "#") {
                this.tablero[aux].visitado = true;
                //console.log(this.tablero[aux].visitado);
            }
            console.log("-- " + this.tablero[aux].caracter + " ")
            aux++;
        }
    }
    //hacer verificaciones, meterlos en el for aprobechando la subida de caracteres.
    //hacer disabled y enviar alerta
    this.maxMov = document.getElementById("maximoDeMovimientos").value;
    ejecutar();
    return false;
}
function Limpiar() {

    var resultadoPadre= document.getElementById("resultadoPadre");
    var padre = document.getElementById("padre");

    if(padre.children.length>2){
        var aux= padre.children.length
        for (let index = 0; index < aux; index++) {
            var hijo= padre.children[0];
            padre.removeChild(hijo);
            console.log(padre.children.length+"---contenido eliminado---");
        }
    }
    try {
        if (resultadoPadre.children.length>0) {
            var resultadoPadre= document.getElementById("resultadoPadre");
            var resultadohijo=resultadoPadre.children[0];
            resultadoPadre.removeChild(resultadohijo);
        }   
    } catch (error) {
        console.log(error);
    }
    document.getElementById('ingresarTam').disabled=false;
    document.getElementById('ingresarTam').className="enabled";
    document.getElementById('comprobar').disabled=true;
    document.getElementById('comprobar').className="disabled";
}
function crearDin(number) {

    var padre = document.getElementById("padre");
    //console.log(padre.children.length+"-------------");
    var resultadoPadre= document.getElementById("resultadoPadre");
    if(padre.children.length>2){
        var aux= padre.children.length
        for (let index = 0; index < aux; index++) {
            var hijo= padre.children[0];
            padre.removeChild(hijo);
            //console.log(padre.children.length+"---contenido eliminado---");
        }
    }
    try {
        if (resultadoPadre.children.length>0) {
            var resultadoPadre= document.getElementById("resultadoPadre");
            var resultadohijo=resultadoPadre.children[0];
            resultadoPadre.removeChild(resultadohijo);
        }   
    } catch (error) {
        console.log(error);
    }
    
    for (let index = 0; index < number; index++) {
        //console.log("comence a crear");
        var input = document.createElement("INPUT");
        input.type = 'text';
        input.id = "string-" + index;
        input.setAttribute("maxLength", number);
        input.setAttribute("minlength", number);
        input.setAttribute("onkeyPress","return check(event)");
        input.setAttribute("placeholder", (index+1)+" ,Ingresa tu String '.', '#'");
        input.setAttribute("required","");
        padre.appendChild(input);
        padre.appendChild(document.createElement("br"))

    }
    var maxMov = document.createElement("INPUT");
    maxMov.type = 'number';
    maxMov.id = "maximoDeMovimientos";
    maxMov.setAttribute("step","1");
    maxMov.setAttribute("required","");
    maxMov.setAttribute("placeholder", "Ingresa el Maximo de Movimientos");
    padre.appendChild(maxMov);


}

function ejecutar() {
    var movimientos = 0;
    var meta = false;
    var indentificador = Number = 0;
    var aux;
    var nStrings = parseInt(this.nStrings);

    do {
        if (this.tablero[indentificador].renglon == 0) {
            this.tablero[indentificador].arriba = false;
        } 
         if (this.tablero[indentificador].renglon == nStrings - 1) {
            this.tablero[indentificador].abajo = false;
        }
        if (this.tablero[indentificador].columna == 0) {
            this.tablero[indentificador].izquierda = false;
        } 
         if (this.tablero[indentificador].columna == nStrings - 1) {
            this.tablero[indentificador].derecha = false;
        }
       
        if (this.tablero[indentificador].derecha == true &&
            this.tablero[indentificador + 1].visitado == false &&
            this.tablero[indentificador + 1].caracter == ".") {
            indentificador++;
            this.tablero[indentificador].anterior = indentificador - 1;
            this.tablero[indentificador].visitado = true;
            movimientos++;

        } else if (this.tablero[indentificador].abajo == true &&
            this.tablero[indentificador + nStrings].visitado == false &&
            this.tablero[indentificador + nStrings].caracter == ".") {
            indentificador = indentificador + nStrings;
            this.tablero[indentificador].anterior = indentificador - nStrings;
            this.tablero[indentificador].visitado = true;
            movimientos++;

        } else if (this.tablero[indentificador].izquierda == true &&
            this.tablero[indentificador - 1].visitado == false &&
            this.tablero[indentificador - 1].caracter == ".") {
            indentificador--;
            this.tablero[indentificador].anterior = indentificador + 1;
            this.tablero[indentificador].visitado = true;
            movimientos++;

        } else if (this.tablero[indentificador].arriba == true &&
            this.tablero[indentificador - nStrings].visitado == false &&
            this.tablero[indentificador - nStrings].caracter == ".") {
            indentificador = indentificador - nStrings;
            this.tablero[indentificador].anterior = indentificador + nStrings;
            this.tablero[indentificador].visitado = true;
            movimientos++;

        } else {
            if(indentificador == 0){
                indentificador = nStrings * nStrings + 5;
                meta=false;
                console.log("No hay camino");
            } else if (indentificador ==  ((nStrings * nStrings) - 1)){
                meta=true;
            } else {
                aux=this.tablero[indentificador].anterior;
                indentificador=aux;
                movimientos--;
                console.log("se Regresa");
            }
        }
        if (indentificador == ((nStrings * nStrings) - 1)){
            meta=true;
        } 
        

        console.log(indentificador);
    } while (indentificador < ((nStrings * nStrings) - 1));

    var resultadoPadre= document.getElementById("resultadoPadre");
    var resultado = document.createElement("H1")

    try {   //Limpiar el resultado de pantalla
        if (resultadoPadre.children.length>0) {
            var resultadoPadre= document.getElementById("resultadoPadre");
            var resultadohijo=resultadoPadre.children[0];
            resultadoPadre.removeChild(resultadohijo);
        }   
    } catch (error) {
        console.log(error);
    }

    if (meta && movimientos <= maxMov) {
        console.log("movimientos " +movimientos+" MaxMov "+maxMov);
        console.log("YES");
        //resultadoPadre.appendChild(document.createElement("h1").value="YES");
        resultado.innerHTML="YES";
        try {
            resultadoPadre.appendChild(resultado);
        } catch (error) {
            console.log(error);
        }
    } else{
        console.log("movimientos " +movimientos+" MaxMov "+maxMov);
        resultado.innerHTML="NO";
        try {
            resultadoPadre.appendChild(resultado);
        } catch (error) {
            console.log(error);
        }
        console.log("NO");
        //resultadoPadre.appendChild(document.createElement("h1").value="NO");
    }

}
function check(e){
   tecla= (document.all) ? e.keyCode: e.which;
   if (tecla== 8){
       return true;
   }
   //Patron de entrada
   patron= /[.#]/;
   tecla_final= String.fromCharCode(tecla);
   return patron.test(tecla_final); 
}