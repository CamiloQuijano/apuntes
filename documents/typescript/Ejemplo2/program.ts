// MODULOS
module tienda {
	export class ropa{
		constructor(public title:sting){
			alert(title);
		}
	}	
	
	export class informatica{
		constructor(public title:sting){
			alert('informatica: '+title);
		}
	}
}

// Ejemplo módulos
import informaticaDec = tienda.informatica;
let cargar _informatica = new informaticaDec('Tienda XXX');

// decorador 
function arranque(lanzar: string){
	return function(target: Function){
		target.prototype.lanzamiento = function(): void{
			console.log(lanzar);
		}
	}
}

// Clase padre | Decorador
@arranque('Lanzamiento de curso XXX')
class programa {
	public nombre:string;
	public version:number;
	
	getNombre(){
		return this.nombre;
	}
	
	setNombre(nombre:string){
		this.nombre = nombre
	}	
	
	getVersion(){
		return this.version;
	}
	
	setVersion(version:number){
		this.version = version
	}
}

// Clase HIJA
class editorVideo extends programa {
	public timeline:number;
	setTimeline(timeline:number){
		this.timeline = timeline;
	}
	
	getTimeline(){
		return this.timeline;
	}
	
	getAllData():string {
		// Función padre | Función hija 
		return this.getNombre() + ' - ' + this.getTimeline();
	}
}

var editor = new editorVideo();
editor.setNombre('Camtasia studio');
editor.setVersion(8);
editor.setTimeline(2);
console.log(editor);
console.log(editor.getAllData());

// funciones flecha
setInterval(function(){ console.log('hola'); }, 1000); 
setInterval((param1, param2) => { console.log('hola')}, 1000); 

// for
var frutas = ['a', 'b', 'c'];
var recorrer = frutas.map(function(fruta) { 
	console.log(fruta);
}); 
var recorrer = frutas.map((fruta) => { 
	console.log(fruta);
}); 

// Ejemplo decorador
var programaTS = new programa();
programaTS.lanzamiento();