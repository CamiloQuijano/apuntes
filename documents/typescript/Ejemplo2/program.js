var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MODULOS
var tienda;
(function (tienda) {
    var ropa = (function () {
        function ropa(title) {
            this.title = title;
            alert(title);
        }
        return ropa;
    }());
    tienda.ropa = ropa;
    var informatica = (function () {
        function informatica(title) {
            this.title = title;
            alert('informatica: ' + title);
        }
        return informatica;
    }());
    tienda.informatica = informatica;
})(tienda || (tienda = {}));
// Ejemplo m�dulos
var informaticaDec = tienda.informatica;
var cargar = _informatica = new informaticaDec('Tienda XXX');
// decorador 
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
// Clase padre | Decorador
var programa = (function () {
    function programa() {
    }
    programa.prototype.getNombre = function () {
        return this.nombre;
    };
    programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    programa.prototype.getVersion = function () {
        return this.version;
    };
    programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    programa = __decorate([
        arranque('Lanzamiento de curso XXX')
    ], programa);
    return programa;
}());
// Clase HIJA
var editorVideo = (function (_super) {
    __extends(editorVideo, _super);
    function editorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    editorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    editorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    editorVideo.prototype.getAllData = function () {
        // Funci�n padre | Funci�n hija 
        return this.getNombre() + ' - ' + this.getTimeline();
    };
    return editorVideo;
}(programa));
var editor = new editorVideo();
editor.setNombre('Camtasia studio');
editor.setVersion(8);
editor.setTimeline(2);
console.log(editor);
console.log(editor.getAllData());
// funciones flecha
setInterval(function () { console.log('hola'); }, 1000);
setInterval(function (param1, param2) { console.log('hola'); }, 1000);
// for
var frutas = ['a', 'b', 'c'];
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
});
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
});
// Ejemplo decorador
var programaTS = new programa();
programaTS.lanzamiento();
