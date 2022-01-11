var car = (function () {
    // Definici�n de modelo desde el contructor
    function car(model) {
        if (model === void 0) { model = null; }
        this.velocity = 0;
        this.color = 'GRAY';
        this.model = (model === null) ? 'CHEVROLET CORSA' : model;
    }
    car.prototype.getModel = function () {
        return this.model;
    };
    car.prototype.setModel = function (model) {
        this.model = model;
    };
    car.prototype.getColor = function () {
        return this.color;
    };
    car.prototype.setColor = function (color) {
        this.color = color;
    };
    car.prototype.getVelocity = function () {
        return this.velocity;
    };
    car.prototype.acelerar = function () {
        this.velocity++;
    };
    car.prototype.frenar = function () {
        this.velocity--;
    };
    return car;
}());
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
console.log('El color del carro 1 es : ' + car1.getColor() + ' - velocidad: ' + car1.getVelocity() + ' - modelo: ' + car1.getModel());
console.log('El color del carro 2 es : ' + car2.getColor() + ' - velocidad: ' + car2.getVelocity() + ' - modelo: ' + car2.getModel());
;
console.log('El color del carro 3 es : ' + car3.getColor() + ' - velocidad: ' + car3.getVelocity() + ' - modelo: ' + car3.getModel());
;
