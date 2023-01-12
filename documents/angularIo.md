[`Volver`](../index.html)

# Typescript

- Es un superconjunto de Javascript
- Añade tipado estátilo y objetos basados en clases
- Compila Javascript


# Angular IO

## Instalar Angular CLI - comandos

https://cli.angular.io/

CLI (Command Line Interface) Para crear el proyecto de angular, para posterior creación de packages (documentos), y despliegue de la app (deployment)

```bash
	npm install -g @angular/cli		// Instar globalmente (-g) angular cli
	npm install						// Instalar dependencias
	ng --version					// Versión Instalada
	ng -v							// Versión Instalada
	ng new my-dream-app				// Crear proyecto 
	cd my-dream-app					// Moverse al proyecto previamente creado
	ng serve						// Inicializar server (arranca x defecto en http://localhost:4200/)
	ng generate component xyz		// Crear componente
	ng g c cursoscli				// Crear componente (Abreviado)
	ng build --prod					// Construir para producción	
	
	ng add @angular/pwa				// Agregar estructura para convertirt la app en pwa
	npm install bootstrap			// Instalar boostrap
	npm install jquery 				// Instalar jquery
```

## ngStyle - ngFor
```html
	<li *ngFor='let person of persons' [ngStyle]="{ 'color': person.color}">
		{{ person.name}} - {{ person.age }}
	</li>
```

## ngIf - elseBlock - thenBlock
```html
	<!-- Forma simple con sintaxis taquigráfica: -->
	<div *ngIf="condition">Content to render when condition is true.</div>
	
	<!-- Forma simple con sintaxis expandida: -->
	<ng-template [ngIf]="condition">
		<div>Content to render when condition istrue.</div>
	</ng-template>
	
	<!-- Formulario con un bloque "else": -->
	<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
	<ng-template #elseBlock>Content to render when condition is false.</ng-template>
	
	<!-- Forma abreviada con bloques "entonces" y "más": -->
	<div *ngIf="condition; then thenBlock else elseBlock"></div>
	<ng-template #thenBlock>Content to render when condition is true.</ng-template>
	<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

-------------------------------------------------------

Curso:  
https://www.youtube.com/watch?v=7yGHRoLkI30&list=PLK7sa90aSLe7RW_7qotGlmBxMtm-jajCG&index=1&ab_channel=CodigoMentor

Repositorio:  
HTTP: https://github.com/CamiloQuijano/cursoAngularIO  
SSH:  git@github.com:CamiloQuijano/cursoAngularIO.git

- Framework creado por google
- Usa HTML, css/sass y typescript

## Apps Requeridas 

Instalar  
	- **nodeJS**: Para poder usar mpn  [`aqui`](node.md#instalar-nodejs)  
	- **Angular CLI** (Command Line Interface) [`aqui`](#instalar-angular-cli)  
	
Sugeridos  
	- **visualStudio**: [`aqui`](visualStudio.md#instalar-nodejs)  
		- Instalar extensión **angular language Service** y **TSLint**
		
		
## Estructura proyecto

- e2e: (EndToEnd) - Documento para pruebas, codigo de automatización
- node_modules: Librerías utilizadas en app
- src: (Sources)  
	- app: Ubicación de componentes (Código que vamos a escribir)  
		- .css: Hojas de estilos
		- .html: Estructura del componente  
		- .apec.ts: Testing  
		- .component.ts: Lógica que controla la app  
		- .module.ts: Importar librerias externas  
	- assets: Imágenes, documentos externos  
	- Enviroments: Configuraciones de app (Entornos de desarrollo)  
	- index.html  
	- main.ts: Inicializador de app  
	- polyfills: Importa scripts necesarios para uso de angular  
	- styles.css: Documento global de estilos  
	- test.ts: Configuración de testing  
- angular.cli.json: Configuración o paths de documentos externos  
- .editorconfig: Configuración del editorconfig
- .gitignore: Ignorar archivos/carpetasen repositorio
- karma.conf.js: Configuración testing
- package.json: Configuración de la app (Nombre/Dependencias)
- protactor.conf.js: testing
- tsconfig.json: Configuración para compilador de typescript
- tslint: Revisión de mantenibilidad

## Estructura componente:

**index.html**  
El selector **app-root** indicado en el componente

```html
	<body>
	  <app-root></app-root>
	</body>
```

**app.component.ts**
- import: Importar componente del core de angular
- export class: Clase disponible fuera del documento
- @Component:  
	- selector: Referencia al componente  
	- templateUrl: Referencia al documento html externo  
	- styleUrls: (Arreglo), referencia a estilos del componente.  

```php
	import { Component } from '@angular/core';

	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
	})
	export class AppComponent {
	  message = 'testing-angular-io';
	}
```
	
**app.component.html**  
Imprimir variable de componente

```html
	<H1>HOLA MUNDO</H1>
	<h2> {{ message }} </h2>
```

**app.module.ts**  
Aqui van a ir incluidos los distintos modulos
Se importa el Componente y se declara en NgModule

```php
	...
	import { AppComponent } from './app.component';

	@NgModule({
	  declarations: [
		AppComponent
	  ],
	  imports: [
		BrowserModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }
```

## Component 

Apuntando a archivo (templateUrl - styleUrls)
```php
	@Component({
		...
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.css']
	})
```

Contenido HTML-CSS (template - styles)
```php
	@Component({
		...
		template: '<H1> Hola mundo </H1>',
		styles: ['h3 { color: blue; }']
	})
```

Contenido HTML Multilinea con (`)
```php
	@Component({
		...
		template: `
		  <H3> Hola mundo </H3>
		  <ul>
			<li> Curso 1 </li>
			<li> Curso 2 </li>
		  </ul>`,
	})
```

## Imprimir variables - objetos

```html
	<H1>HOLA MUNDO</H1>
	<h2> {{ message }} </h2>
	
	// OBJECT - JSON
	{{ miFormulario.value | json }}
```


## Ejemplo nuevo Componente

Estructura archivo *cursos.component.ts*

```php
	import { Component } from '@angular/core';

	@Component({
	  selector: 'cursos-root',
	  template: './cursos.component.html',
	  styles: ['h3 { color: blue; }']
	})
	export class CursosComponent {
	}
```

Incluir en **app.module.ts**, el nuevo componente

```php
	import { AppComponent } from './app.component';
	import { CursosComponent } from './cursos.component';

	@NgModule({
	  declarations: [
		AppComponent,
		CursosComponent
	  ]
	  ...
```

Inclur el selector en **app.component.html**  
```html
	<cursos-root></cursos-root>
```


## Crear componente por CLI

Crear por consola estructura de un componente (.html, .css, .ts)

```bash
	ng generate component cursoscli		// Crear componente
	ng g c cursoscli					// Crear componente (Abreviado)
```


## String Interpolation - imprimir variable

component.ts
```php
	...
	export class AppComponent {
		
		// Variable
		message = 'testing-angular-io';
	  
		// Función 
		getMessage = () => {
			return this.message;
		}
	}
```

component.html: Llamado de variable | función | concatenación de texto
```html
	<!-- Salida tiene que ser 'testing-angular-io' -->
	<h2> {{ message }} </h2>
	<h2> {{ getMessage() }} </h2>
	<h2> {{ 'Mi nombre es ' + message }} </h2>
```


## Property Binding

El objetivo es poner entre [] el atributo, para que no haya necesitad de incluir la variable entre {{ x }}  

Example Property Binding

component.ts
```php
	export class AppComponent {
	  
	  urlImage = 'http://lorempixel.com/400/200/';
	}
```

component.html
```html
	<div> Property Binding </div>
	<img src="{{ urlImage }}">
	<img [src]="urlImage">
```


## Class Binding

Agregar una clase a un elemento dependiendo de una variable  

component.ts
```php
	export class AppComponent {
	  btnPrimary = true;
	}
```

component.html
```html
	<div> Class Binding </div>
	<button [class.btnPrimaryXXX]="btnPrimary"> Example button</button>
	<!-- Retorna: <button class="btnPrimaryXXX"> Example button</button> -->
	<!-- En el ejemplo: btnPrimaryXXX es la clase a poner si la variable btnPrimary es verdadero -->	
```


## Style Binding

Listado de estilos a aplicar  
https://www.w3schools.com/jsref/dom_obj_style.asp

component.ts
```php
	export class AppComponent {
	  isGreenColor = true;
	  isRedBorderColor = true;
	}
```

component.html
```html
	<div> Style Binding </div>
	<button 
		[style.borderColor]="isRedBorderColor? 'red' : 'blue'"
		[style.backgroundColor]="isGreenColor? 'green' : 'blue'"> 
		Example button
	</button>
	<!-- Retorna: <button style="border-color: red; background-color: green;"> Example button</button> -->
```

## Event Binding click mouseover

El evento tienen que ir entre ()  

component.ts
```php
	export class AppComponent {
	
		// Función evento CLICK
		eventClick(e) { 
			console.log('click', e); 
		}
		
		// Función evento MOUSEOVER
		mouseOverFunct(e) { 
			console.log('mouseover', e); 
		}
	}
```

component.html
```html
	<div> Events Binding </div>
	<button 
		(click)="eventClick($event)"
		(mouseover)="mouseOverFunct($event)" >
		Example button
	</button>
```


## Event Filtering

Por ejemplo se podria usar el event **keyup**, o especificar la tecla necesaria con el filtro **keyup.enter**  

component.ts
```php
	export class AppComponent {

		// Example Events Filtering: Función evento KEYUP con filtro enter
		keyUpEnter() { 
			console.log('keyUpEnter: Presionaron enter'); 	
		}
  
		// Example Events Filtering: Función evento KEYUP
		keyUp(e) { 
			console.log('keyUp:'+e.keyCode); 
			if(e.keyCode == 13) {
			  console.log('keyUp: Presionaron enter'); 
			  console.log('keyUp:'+e.target.value); 
			}
		}
	}
```

component.html
```html
	<div> Events Filtering </div>
	<div> Events Filtering </div>
	Evento keyup Enter <input type="text" (keyup.enter)="keyUpEnter()" />
	<br>
	Evento keyup <input type="text" (keyup)="keyUp($event)" />
	<br>
```


## Template Variable

Ejemplo input con #id (Imprime con enter)

component.ts
```php
	export class AppComponent {
	
		keyUpEnterTemplateVariable(user) { 
			console.log('template var', user); 
		}
	}
```

component.html
```html
	<div> Template Variable </div>
	<small>Enviar parametro de input a función con la #nameElement</small><br>
	<input type="text" (keyup.enter)="keyUpEnterTemplateVariable(nameEle.value)" #nameEle />
```


## Two way to binding ngModel

Actualizar variable en doble via, desde la vista html al modelo y viseversa 

app.module.ts
 - Inicialmente importar formsModule
 - Incluir en imports de @NgModule
 
```php
	
	import { FormsModule } from '@angular/forms';
	
	@NgModule({
	  ...
	  imports: [
		BrowserModule,
		FormsModule
	  ],
	  ...
	})
```

component.ts
```php
	//  Estructura de variable en doble vía
	person = {
		name: 'Camilo',
		age: 30
	}
```

component.html
```html
	<div> Two way to binding (ngMode) </div>
	<input type="text" [(ngModel)] = "person.name" />
	<input type="text" [(ngModel)] = "person.age" />
	<div> Name: {{ person.name }} <br> Age: {{ person.age }}</div>
```

## Servicios HTTP ngFor

**app/users.service.ts**
```js
	export class UsuariosService {
		getUsuarios() {
			return [
				{ name: 'Camilo', age: '31' },
				{ name: 'Leidy', age: '30' },
				{ name: 'Ian', age: '6' }
			]
		}

```

**app/app.components.ts**
```js
	import { UsuariosService } from './users.service';
	...
	export class AppComponent {
		
		persons : any = [];
		
		constructor() {
			let users = new UsuariosService();	// Instanciar Servicio de usuarios
			this.persons = users.getUsuarios();	// Asociar contenido de función
		}
	}
```

**app/app.components.html**
```html
	<div> Services HTTP </div>
	<li *ngFor='let person of persons'>
		{{ person.name}} - {{ person.age }}
	</li>
```


## Dependency Injection

Hacer uso de servicios a nivel de componente o a nivel general.

### Dependencia en componente - solo uso en modulo

**app/app.components.ts**
```js
	import { UsuariosService } from './users.service';
	
	@Component({
		...
		providers: [UsuariosService]
	})
	...
	export class AppComponent {
		persons : any = [];
		constructor(private userservice: UsuariosService) {
			this.persons = userservice.getUsuarios();	// Asociar contenido del servicio
		}
	}
```

### Dependencia en modulo - general 

**app/app.module.ts**
```js
	import { UsuariosService } from './users.service';
	...
	@NgModule({
		...
		providers: [
			UsuariosService
		],
	})
```


### Dependencia desde el servicio - general 

**app/users.services.ts**
```js
	import { Injectable } from '@angular/core';
	
	@Injectable({
		providedIn: 'root'
	})
	export class UsuariosService {
		getUsuarios() {
			...
		}
	}
```

## Implementar Boostrap 

Instalar las siguientes dependencias
```bash
	npm install bootstrap
```

Incluir hora de estilos en: **src/styles.css**
```css
	@import '~bootstrap/dist/css/bootstrap.min.css'
```

Agregar la hora de estilos en estructura de angular en: **angular.json** 
```json
	"test": {
	  "builder": "@angular-devkit/build-angular:karma",
	  "options": {
		...
		"styles": [
		  "node_modules/bootstrap/dist/css/bootstrap.min.css",
		  "src/styles.css"
		],
	  }
	}
	...
```


## Reactive Forms

Validaciones a formularios, para el ejemplo tiene que estar implementados boostrap

Importar estructura de formularios  
**app/app.modules.ts**
```ts
	import { FormsModule, ReactiveFormsModule } from '@angular/forms';

	@NgModule({
		...
		imports: [
			ReactiveFormsModule,
			FormsModule
		]
		...
	})
```

Estructura de formularios  
**app/app.components.html**
```html
	<div> Reactive Forms </div>
	<div class="container">
		<form [formGroup]="miFormulario">
			Usuario: 
			<!-- 
				miFormulario.get('username'): Accedemos al campo
				touched: Enfocado
				invalid: Es invalido
			-->
			<input type="text" class="form-control" 
				[class.is-invalid]="miFormulario.get('username').touched && miFormulario.get('username').invalid"
				formControlName="username"> <br>
			Password: 
			<input type="password" class="form-control" 
				[class.is-invalid]="miFormulario.get('userpassword').touched && miFormulario.get('userpassword').invalid"
				formControlName="userpassword"> <br>
			<button class="btn btn-primary" type="submit">Enviar</button> 
		</form>
		
        <!-- Estructura formulario-->
		{{ miFormulario.value | json }}
	</div>
```
  
Incluir estructura de validaciones de a los formularios  
**app/app.components.ts**
```ts
	import { FormControl, FormGroup, Validators } from '@angular/forms';

	export class AppComponent {
		// Example Reactive Forms
		miFormulario = new FormGroup({
			username: new FormControl('', Validators.required), 
			userpassword: new FormControl('', Validators.required)
		});
	}
```

## Content Projection ng-content and Slot Content Projection

Como enviar información de un componente padre a un componente hijo y viseversa

**app/app.components.html**
```html
	<div> Content Projection - ng-content  </div>
	<app-mensaje>
		<h6>Content Adicional H6</h6>
		<button class="btn btn-primary"> Click here</button>
		<div>Esto es un div</div>
		<p>Esto es un parrafo</p>
	</app-mensaje>
<hr>
```

La instruccuión ng-content en el componente hijo permitira que se imprima lo incluido en el selector del componente padre.  
**app/app-mensaje.components.html**
```html
	<p>app-mensaje works!</p>
	<ng-content></ng-content>
	
	Resultado:
	<!-- 
		<p>app-mensaje works!</p>
		<h6>Content Adicional H6</h6>
		<button class="btn btn-primary"> Click here</button>
		<div>Esto es un div</div>
		<p>Esto es un parrafo</p>
	-->
```

En el caso de querer filtrar los elementos nos referimos a Slot Content Projection, y es aplicar un filtro a los elementos
Para el ejemplo filtramos solo elemento H6, y solo tendrá en cuenta esta etiqueta
**app/app-mensaje.components.html**
```html
	<p>app-mensaje works!</p>
	<ng-content select="h6"></ng-content>
	<ng-content select="button"></ng-content>
	
	<!--
		Tambien funciona con #id o .class
		<ng-content select="#element></ng-content>
		<ng-content select=".classColor></ng-content>
	-->
	
	Resultado:
	<!-- 
		<p>app-mensaje works!</p>
		<h6>Content Adicional H6</h6>
		<button class="btn btn-primary"> Click here</button>
	-->
```


## Construir app para producción build - subir a firebase

```bash
	ng build --prod
	firebase deploy 		// Subir a firebase
```