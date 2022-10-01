[`Volver`](../index.html)

# IONIC

Documentación versión 3
https://ionicframework.com/docs/v3/

## Comandos consola ionic

```bash
	npm install -g cordova ionic  			// Instalar Cordova
	cordova -v								// Versión de cordova
	ionic info								// Información de versiones
	ionic generate page youtube   			// Generar compotente x cli
	ionic serve   							// Iniciar server
	ionic serve --lab 						// Iniciar server (con funcionalidades adicionales)
	ionic run android --device				// Correr versión android
	ionic cordova run android --device		// Correr versión android (Dispositivo)
	ionic cordova build android   			// Generar APK
	
	ionic start --list 								// Listado de versiones para instalar del framework
	ionic start myApp tabs 							// Versión actualo
	ionic start myApp tabs --type=ionic1 	  		// Instalar versión 1
    ionic start myApp tabs --type=ionic-angular		// Instalar versión 2/3 (Angular)
```

## Crear Proyecto ionic

Crear app myApp: Nombre de aplicación | tabs: Plantilla

```bash
	ionic start myApp tabs 							// Versión actualo
	ionic start myApp tabs --type=ionic1 	  		// Instalar versión 1
    ionic start myApp tabs --type=ionic-angular		// Instalar versión 2/3 (Angular)
```

## Iniciar proyecto ionic
```bash
	ionic start myApp tabs			// myApp: Nombre de aplicación | tabs: Plantilla
	ionic serve
```

## Herramientas necesarias - sugeridas

1. Instalar **NODEJS** y **npm**  
https://nodejs.org/en/

2. Instalar **Cordova**
```bash
	npm install -g cordova ionic
```

3. Descargar e instalar **android Studio**
	- Ejecutar e ingresar a termindos y condiciones
	- You have not accepted the license agreements of the following SDK components: [Android SDK Platform 26].

4. Descargar jdk  
http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html


## Estructura proyecto ionic
- **src**: Ubicación código propio
	- **app**: Configuraciones generales
		- **pages**: Estructura del template
	- **src**: Recursos del sitio (imágenes, videos)
- **www**: Compilación final

## Cambiar estilos en generales

Cambiar en archivos sass ubicados en theme/variables.scss, por ejemplo:  

**theme/variables.scss**  
```css
	// Cambio todos los <strong>
	strong {
	  color: blue;
	}
```

## Generar APK

```bash
 ionic cordova build android
```

apk generado en:  
 projectIonic\platforms\android\app\build\outputs\apk\debug\app-debug.apk

### En caso de generar error de gradle: 

**ERROR**  
Could not find an installed version of Gradle either in Android Studio,
or on your system to install the gradle wrapper. Please include gradle
in your path, or install Android Studio

**Solución Gradle**  
1. descargar Gradle  https://gradle.org/releases
2. contenido descargado dejarlo en directorio: C:\Gradle, ejemplo C:\Gradle\gradle-6.7.1
3. Ingresar a variables de entorno -> path
4. Incluir a path C:\Gradle\gradle-6.7.1\bin
5. Validar que haya quedado trabajando correctamente con *gradle -v* en consola


## Componente 

Agregar elementos al componente  
https://ionicframework.com/docs/components

### Estructura de un componente: 
- **component.scss**: Estilos aplicados solo al componente
- **component.html**: Vista del componente
- **component.ts**: TypeScript - logíca del componente

### Crear componente consola
```bash 
	ionic generate page youtube
```

### Incluir nuevo componente a tabs

pages/tabs/tabs.html
```html
	<ion-tabs>
	  ...
	  <ion-tab [root]="tab4Root" tabTitle="Youtube" tabIcon="logo-youtube"></ion-tab>
	</ion-tabs>
```

pages/tabs/tabs.ts
```ts
	import { YoutubePage } from '../youtube/youtube';
	
	export class TabsPage {
		...
		tab4Root = YoutubePage;
	}
```

app/app.module.ts

```ts
	...
	import { YoutubePage } from '../pages/youtube/youtube'

	@NgModule({
	  declarations: [
		...
		YoutubePage
	  ],
	  entryComponents: [
		...
		YoutubePage
	  ],
	})
	export class AppModule {}
```


### Incluir botones

https://ionicframework.com/docs/v3/components/#buttons

```html
	<!-- Btn default -->
	<button ion-button>Button</button>

	<!-- Btn solo borde linea -->
	<button ion-button outline>Primary Outline</button>
	
	<!-- Btn sin borde -->
	<button ion-button clear>Primary Clear</button>
	
	<!-- Btn dedondeado -->
	<button ion-button round>Primary Round</button>
	
	<!-- Btn bloque -->
	<button ion-button block>Block Button</button>
	
	<!-- Btn full - sin padding -->
	<button ion-button full>Full Button</button>
	
	<!-- Btn distintos tamaños -->
	<button ion-button small>Small</button>
	<button ion-button>Default</button>
	<button ion-button large>Large</button>
	
	<!-- Btn con icono a la izquierda -->
	<button ion-button icon-start>
	  <ion-icon name="home"></ion-icon>
	  Left Icon
	</button>

	<!-- Btn con icono a la derecha -->
	<button ion-button icon-end>
	  Right Icon
	  <ion-icon name="home"></ion-icon>
	</button>

	<!-- btn solo icono -->
	<button ion-button icon-only>
	  <ion-icon name="home"></ion-icon>
	</button>
```

Resultado:  
![img2]


### Incluir iconos en header

- start: Lo incluye a la izquierda
- end: Lo incluye a la derecha

```html
	<ion-header>
	  <ion-navbar>
		<ion-title>Home</ion-title>

		<ion-buttons end>
		  <button ion-button icon-only>
			<ion-icon name="search"></ion-icon>
		  </button>
		</ion-buttons>
		
	  </ion-navbar>
	</ion-header>
```

Resultado:  
![img1]


## Estilos a partir de atributos propios de ionic

https://ionicframework.com/docs/v3/theming/css-utilities/

	text-left  		text-align: left
	text-center		text-align: center
	text-wrap  		white-space: normal
	text-nowrap		white-space: nowrap
	padding			padding: 16px
	padding-bottom 	padding-bottom: 16px
	no-padding 		padding: 0

## Cambiar color header - tabs

Incluir color en ion-navar con la variable del color de variables.scss  

variables.scss
```css
	$colors: (
	  primary:    #488aff,
	  secondary:  #32db64,
	  danger:     #f53d3d,
	  light:      #f4f4f4,
	  dark:       #222
	);
```

home.html
```html
<ion-header >
  <ion-navbar color="dark">
	....
  </ion-navbar>
</ion-header>
```

tabs.html
```html	
	<ion-tabs color="dark">
	  ...
	</ion-tabs>
```


## Ionic cards con imagen

```html
	<h2>Example cards</h2>
	  <ion-card>
		<ion-card-header>
		  Header
		</ion-card-header>
		<ion-card-content>
		  The British use the term "header", but the American term "head-shot" 
		  the English simply refuse to adopt.
		</ion-card-content>
	  </ion-card>

	  <ion-card>
		<img src="assets/imgs/cardExample.jpg"/>
		<ion-card-content>
		  <ion-card-title>
			Nine Inch Nails Live
			</ion-card-title>
		  <p>
			The most popular industrial group ever, and largely
			responsible for bringing the music to a mass audience.
		  </p>
		</ion-card-content>
	  </ion-card>
```

Resultado:  
![img3]
	
## Ionic card listas
```html
	<h1>Card List</h1>
	  <ion-card>
		<ion-card-header>
		  Explore Nearby
		</ion-card-header>
	  
		<ion-list>
		  <button ion-item>
			<ion-icon name="cart" item-start></ion-icon>
			Shopping
		  </button>
	  
		  <button ion-item>
			<ion-icon name="medical" item-start></ion-icon>
			Hospital
		  </button>  
		</ion-list>
	</ion-card>
```

## Ionic Lista dinámica ngFor ngStyle

En el .ts definimos la lista
```ts
	export class AboutPage {
	  list: Array<any> = [
		{ title: "Perro", color: "red", icon:"logo-android" },
		{ title: "Gato", color: "blue", icon:"logo-octocat" }
	  ];
	}
```
En el .html imprimos el listado con *ngFor
```html
	<ion-card>
		<ion-card-header>
		  Explore Nearby
		</ion-card-header>
	  
		<ion-list>
		  <button ion-item *ngFor="let item of list">
			<ion-icon name="{{ item.icon }}" item-start [ngStyle]="{color: item.color}"></ion-icon>
			{{ item.title }}
		  </button>  
		</ion-list>
	</ion-card>
```

Resultado:  
![img4]
	
	
---
## Ionic Navegacion redireccionar - cargar otra pagina click

Cargar en la vista principal otra página por medio de evento click  
Para el caso del ejemplo previamente tiene que estar generada la estructura de la página MasinfoPage

**home.html**
```html
	<h1> Ejemplo de ir a otra página </h1>
	<button ion-button color="dark" (click)="sendOtherPage()">Ir a otra página</button>
```

**home.ts**
```ts
	// Importar página de navegación (detalles)
	import { MasinfoPage } from '../masinfo/masinfo';

	...
	export class HomePage {

	  constructor(public navCtrl: NavController) {}

	  // Evento click de ir a nueva página
	  sendOtherPage() {
		// Cargar nueva página
		this.navCtrl.push(MasinfoPage);
	  }
	}
```

	
---
## Ionic Navegacion redireccionar con parámetros

Definición del arreglo a iterar  
*contact.ts*
```ts
	// Importar página de navegación (detalles)
	import { MasinfoPage } from '../masinfo/masinfo';
	...
	export class ContactPage {

		miLista = [];

		constructor(public navCtrl: NavController) {

			this.miLista = [
			  {
				'title': 'Angular',
				'icon': 'angular',
				'description': 'A powerful Javascript framework for building single page apps. ',
				'color': '#E63135'
			  },
			  {
				'title': 'CSS3',
				'icon': 'css3',
				'description': 'The latest version of cascading stylesheets - the styling language of the web!',
				'color': '#0CA9EA'
			  },
			  {
				'title': 'HTML5',
				'icon': 'html5',
				'description': 'The latest version of the web\'s markup language.',
				'color': '#F46529'
			  },
			];
		}
	
		// Función del evento click (Recibe el parámetro y se envia)
		openNavDetailsPage(item) {
			this.navCtrl.push(MasinfoPage, { item: item });
		}
	}
```

En la vista se enviar el parametro en este caso el de la iteración   
*contact.html*
```html	
	<ion-list>
		<button ion-item *ngFor="let item of miLista" (click)="openNavDetailsPage(item)" icon-start>
			<ion-icon [name]="'logo-'+item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
			{{ item.title}}
		</button>
	</ion-list>
```

En el controlador que recibe definimos el parámetro y lo asignamos con el *navParams*  
*masInfo.ts*
```ts
	export class MasinfoPage {
	  item;
	  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.item = navParams.data.item; // Capturamos el parámetro enviado desde contact.ts
	  }
	}
```

En la vista imprimimos el valor asignado a la variable **item** (El titulo, icono, color, descripción)  
*masInfo.html*
```html	
	<ion-header>
	  <ion-navbar>
		<ion-title *ngIf="item">{{ item.title }}</ion-title>
	  </ion-navbar>
	</ion-header>

	<ion-content padding>
		Contenido de nueva página de navegación
		<div *ngIf="item">
		  <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}"></ion-icon>
		  {{ item.description }}
		</div>
	</ion-content>
```

Resultado:  
![img5]
![img6]
	
	
	
## Iniciar proyecto ionic - recargas

```bash
	// Generar ssh key 
	ssh-keygen
	// id_rsa : Copear contenido y registrarlo en https://dashboard.ionicjs.com/settings/ssh-keys
	
	// Clonar repositorio
	git clone git@git.ionicjs.com:camiloquijano/singesrecargas.git --origin=ionic
	git clone ssh://git-codecommit.us-east-2.amazonaws.com/v1/repos/recargas_app
	
	// Intalar cordova
	npm install -g cordova ionic
	
	// Instalar dependencia
	npm install
	
	// Iniciar server 
	ionic serve
	ionic serve --lab (Opciones de render con funcionalidades adicionales)
	
	// Generar versión android
	ionic run android --device
	ionic cordova run android --device
	
	// Generar APK
	ionic cordova build android
	
	// En caso de error con ionic/app-script
	npm install @ionic/app-scripts@latest --save-dev

```



[img1]: ionics/ionicsiconsheader.JPG "Iconos header"
[img2]: ionics/ionicbutton.JPG "Botones"
[img3]: ionics/ionicsCards.JPG "Cards"
[img4]: ionics/ioniclist.JPG "Lists"
[img5]: ionics/ionicnavegation1.JPG "Navegación Menú"
[img6]: ionics/ionicnavegation2.JPG "Navegación Vista"
