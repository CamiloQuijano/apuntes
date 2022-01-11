function holamundo(namef) {
    return "Hola mundo!! Soy " + namef;
}
var nameUser = "Camilo Quijano";
var response = holamundo(nameUser);
var testHM = document.getElementById('container');
testHM.innerHTML = response;
// Variables y tipos
var nombre = "Camilo Quijano";
var edad = 55;
var programador = true;
var array = ['PHP', 'CSS'];
var whatever = 'Cualquier tipo';
testHM.innerHTML = nombre + " - " + edad;
// Ejemplo var|LEF
var a = 1;
var b = 2;
if (a === 1) {
    var a_1 = 3; // a NIVEL de bloque (NO ACTUALIZA LA DE ARRIBA)
    var b = 4;
    console.log('EN IF', a_1 + ' - ' + b);
}
console.log('FUERA IF', a + ' - ' + b);
// Funciones y tipado
// Se pueden definir tipo a los parametros de ingreso, como tipo de variable de salida
function devuelveNumero(num) {
    return num;
}
function devuelveString(num) {
    return 'Devuelvenum: ' + num;
}
function devuelveString2(texto) {
    if (texto === 'hola') {
        return 1;
    }
    else {
        return 2;
    }
}
console.log(devuelveNumero(35));
console.log(devuelveString(35));
console.log(devuelveString2('hola'));
console.log(devuelveString2('hola2'));
