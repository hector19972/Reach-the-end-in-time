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

    crearDin(n);

}
function cargarString() {
    var aux = 0;
    let camino = new String;
    for (let index = 0; index < this.nStrings; index++) {
        camino = document.getElementById("string-" + index).value;
        console.log(camino);
        for (let indey = 0; indey < this.nStrings; indey++) {
            this.tablero[aux].caracter = camino[indey];

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
}
function imprimir() {
    this.tablero[5].caracter = "#";
    console.log(this.tablero[5].caracter);
}
function crearDin(number) {

    var padre = document.getElementById("padre");
    for (let index = 0; index < number; index++) {
        var input = document.createElement("INPUT");
        input.type = 'text';
        input.id = "string-" + index;
        input.setAttribute("maxLength", number);
        padre.appendChild(input);

    }
    var maxMov = document.createElement("INPUT");
    maxMov.type = 'number';
    maxMov.id = "maximoDeMovimientos";
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

    if (meta && movimientos <= maxMov) {
        console.log("movimientos " +movimientos+" MaxMov "+maxMov);
        console.log("YES");
    } else{
        console.log("movimientos " +movimientos+" MaxMov "+maxMov);
        console.log("NO");
    }

}