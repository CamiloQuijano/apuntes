// estructura de métodos obligatorios 
// Contrato de metodos o propietarios obligatorios
interface cocheBase {
	getModel():string;
	getVelocity():number;
}

class car implements cocheBase {

	// public|private|protected 
	public color:string;
	public model:string;
	public velocity:number;
	
	// Definición de modelo desde el contructor
	constructor(model:any = null){
		this.velocity = 0;
		this.color = 'GRAY';
		this.model = (model === null) ? 'CHEVROLET CORSA' : model;
	}
	
	public getModel():string{
		return this.model;
	}
	
	public setModel(model:string){
		this.model = model;
	}
	
	public getColor(){
		return this.color;
	}
	
	public setColor(color:string){
		this.color = color; 
	}
	
	public getVelocity():number{
		return this.velocity; 
	}
	public acelerar(){
		this.velocity++;
	}
	
	public frenar(){
		this.velocity--;
	}
}

var car1 = new car('CHEVROLET CRUZE');
var car2 = new car();
var car3 = new car();

car1.setColor('red');
car2.setColor('blue');
car3.setColor('yellow');

// 3 de velocidad - 1 de freno  = total 2
car1.acelerar();
car1.acelerar();
car1.acelerar();
car1.frenar();

console.log('El color del carro 1 es : ' + car1.getColor() + ' - velocidad: ' + car1.getVelocity() + ' - modelo: ' + car1.getModel() );
console.log('El color del carro 2 es : ' + car2.getColor() + ' - velocidad: ' + car2.getVelocity() + ' - modelo: ' + car2.getModel() ));
console.log('El color del carro 3 es : ' + car3.getColor() + ' - velocidad: ' + car3.getVelocity() + ' - modelo: ' + car3.getModel() ));