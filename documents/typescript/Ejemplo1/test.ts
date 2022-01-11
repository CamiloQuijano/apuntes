function holamundo(namef){
	return "Hola mundo!! Soy "+namef;
}

var nameUser = "Camilo Quijano";
var response = holamundo(nameUser);
var testHM = <HTMLElement>document.getElementById('container');
testHM.innerHTML = response;


// Variables y tipos
var nombre:String = "Camilo Quijano";
var edad:number = 55;
var programador:boolean = true;
var array: Array<string> = ['PHP', 'CSS'];
var whatever:any = 'Cualquier tipo';

testHM.innerHTML = nombre +" - "+ edad;

// Ejemplo var|LEF
// Declaración variable lef para uso exclusivo dentro del if
var a = 1;
var b = 2;
if(a === 1) {
	let a = 3; // a NIVEL de bloque (NO ACTUALIZA LA DE ARRIBA)
	var b = 4; 
	console.log('EN IF', a+' - '+ b);
}
console.log('FUERA IF', a+' - '+ b);

// Funciones y tipado
// Se pueden definir tipo a los parametros de ingreso, como tipo de variable de salida
function devuelveNumero(num:number){
	return num; 
}
function devuelveString(num:number):string{
	return 'Devuelvenum: '+num; 
}
function devuelveString2(texto:string):number{
	if(texto === 'hola') {
		return 1;
	} else {
		return 2; 
	}
}
console.log(devuelveNumero(35));
console.log(devuelveString(35));
console.log(devuelveString2('hola'));
console.log(devuelveString2('hola2'));

