/*var Casillas = new Object();
    Casillas.caracter = String="";
    Casillas.i= Number=0;
    Casillas.y= Number=0;
    Casillas.anterior = new Casillas;
    Casillas.checado= Boolean=0;
*/
class Casilla {
    constructor(caracter, i, y) {
        this.caracter = caracter;
        this.i = i;
        this.y = y;
        this.checado = false;
    }
    setVisitado(nuevo) {
        this.visitado = nuevo;
    }
}
var tablero = [];

function inicio() {
    var contador=0;
    n = document.getElementById("nStrings").value;
    console.log(n);
    for (let index = 0; index < n; index++) {
        for (let indey = 0; indey < n; indey++) {
            this.tablero[contador] = new Casilla;
            this.tablero[contador].i = index;
            this.tablero[contador].y = indey;
            console.log("x: "+tablero[contador].i + "  y: " + tablero[contador].y+ "  Contador "+ (contador+1) );
            contador++;
        }
    }
}
function imprimir(){
    this.tablero[5].caracter = "#";
    console.log(this.tablero[5].caracter);
}