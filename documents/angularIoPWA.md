[`Volver`](../index.html)

# AngularIO - PWA

## Convertir app Angular a PWA

Ingresar a angular y buscar PWA, lo primero que saldra será ng add
```bash
	ng add @angular/pwa
```

Este comando configura:

 - serviceworkers [`Aqui`](pwa.md#services-workers)
 - crear iconos (Icono instalable)
 - app/manifest.webmanifest (aplicación instalable): Le dice al browser que nombre va a tener , color de carga, icono  
	- name: Nombre de la app    
	- short name: Nombre corto que aparece en homescreen  
	- theme_color: Color de bordes (barra de batería)  
	- display:  **standalone**: Deja la barra de la batería  | **fullscreen**: Quita la barra de la batería
 - ngsw-config.json: Todo el sistema del cache
 - Incluye el manifest en el index.html
 - Actualiza unos paquetes:

**Importante**: Para que funciones es necesario que el servidor este en entorno seguro https  
	
Convierte tu aplicación Angular en una PWA
https://www.pwaexperts.io/tutoriales/convierte-aplicacion-angular-en-pwa


## Cache de assets 

Abrir archivo **ngsw-config.json**

En la sección de **assetsGroups** estan los grupos de reglas para aplicar el cache

En este ejemplo existen 2 grupos

1. **app**: *.js | *.css | etc.  
2. **asets**:  Imágenes

```json
	"assetGroups": [
		{
		  "name": "app",
		  "installMode": "prefetch",
		  "resources": {
			"files": [
			  "/favicon.ico",
			  "/index.html",
			  "/manifest.webmanifest",
			  "/*.css",
			  "/*.js"
			]
		  }
		}, {
		  "name": "assets",
		  "installMode": "lazy",
		  "updateMode": "prefetch",
		  "resources": {
			"files": [
			  "/assets/**",
			  "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"
			]
		  }
		}
	]
```

Modos de instalación - **installMode**: 

	- prefetch: Precargar este contenido una vez cargado el inicio. Lo malo de este metodo 
		es que la primera carga puede ser demorada. util con archivos que tienen 
		HASH AUTOMÁTICO (Cada vez que se realiza deply, el id cambia)
		Ej. JS | CSS
	
	- lazy: Se realiza cache cuando el navegador o el usuario solicita el archivo. A medida 
		que el usuario va necesitando. cuando se realiza un nuevo deploy para evitar el cache
		en la app del usuario se sugiere incluir el attributo **updateMode** => **prefetch**,
		EJ: IMÁGENES

		
## Configurar cache de request

Se incluyen en los **dataGruops**, Se le indica el nombre asociado a la tipología.

```json
	"dataGroups": [
		{
		  "name": "api",
		  "urls": ["https://platzi-store.herokuapp.com/**"],
		  "cacheConfig": {
			"maxSize": 3,
			"maxAge": "5m",
			"strategy": "performance",
			"timeout": "2s"
		  }
		}
	]
```

- **URLS**: Indico las urls que deseo cachear, si deseo cachear el contenido en su totalidad incluimos [**]  

	EJ1: "urls": ["https://herokuapp.com/products", "https://herokuapp.com/users"],  
	EJ2: "urls": ["https://platzi-store.herokuapp.com/**"],  
	
- **CACHECONFIG**: 
	
	- maxSize: Número de intentos máximos para realizar nueva solicitud
	- maxAge: Tiempo que va a durar el cache  
		- 5d->días  
		- 5m->Minutos  
		- 1h->Hora  
		- 1s->Segundos  
		- 1u->Milisegundos  

- **STRATEGY**: 
	
	- freshness: Siempre buscar en internet (Prima network), a menos de internet lento o perdida de internet
	- performance: Mejor experiencia al usuario (Prima el cache)

- **TIMEOUT**: Tiempo de espera a que responda la estratpegia implementada 

	EJ1: "timeout": "2s"
	

## Crear botón de Instalación

El objetivo es que al acceder al sitio, de la opción de instalar la app en el dispositivo.

header.component.ts
```js
	import { Component, HostListener } from '@angular/core';

	export class AppComponent {
	
		// Variable para validar evento de instalación, si ya esta instalada queda en null
		installEvent = null;
		
		@HostListener('window:beforeinstallprompt', ['$event']) 
			
		// Evento despues de instalar 
		onBeforeinstallprompt(event: Event) {
		  console.log(event);
		  event.preventDefault();
		  this.installEvent = event; // Guardar el evento del navegador a variable
		}
		
		installByUser() {
		  if(this.installEvent) {
			this.installEvent.prompt(); // Evento nativo que da el browser

			// Decisión del usuario
			this.installEvent.userChoice() 
			  .then(response => {
				console.log(response);
			  })
		  }
		}
	}
```

header.component.html
```html
	<!-- Evento click del evento | mostrar después de asignación del evento-->
	<!-- ngIf Para no mostrar el botón si  ya esta instalada-->
	<a mat-button (click)="installByUser()" *ngIf="installEvent">Install App</a>
```

## Gestionar actualizaciones automáticamente 

Angular tiene un Services Workers para actualizar.

app.component.ts
```js
	// On init es para escuchar al iniciar el componente
	import { Component, OnInit } from '@angular/core';
	import { SwUpdate } from '@angular/service-worker';

	export class AppComponent implements OnInit {
	
		// Inyectar clase x parámetro
		constructor(private swUpdate: SwUpdate) {
		}
		
		// Cuando se inicialice el componente validar actualización
		ngOnInit() {
			this.updatePWA();
		}
  
		// Escuchar a nueva versiones disponibles
		updatePWA() {
			this.swUpdate.available
			.subscribe(value => {
			  console.log('update:', value);
			  window.location.reload();	// Actualizar navegador
			});
		  }
  }
```

## Push notificaciones

Uso a traves de firebase para el sistema de notificaciones **FirebaseCloudMessenger**

1. Autorizar angular firebase message en **app.module.ts**

```js
	import { AngularFireMessagingModule } from '@angular/fire/messaging';
	import { AngularFirestoreModule } from '@angular/fire/firestore'; // DB Temporal
	
	@NgModule({
	  ...
	  imports: [
		...
		AngularFireStorageModule,
		AngularFireMessagingModule
		...
	  ],
	})
```

2. en *app.component.ts*

```js

import { AngularFireMessaging } from '@angular/fire/messaging'; // Servicio de notificaciones

// Interfaz de tipado
interface Token {
  token: string;
  sources: 
}

export class AppComponent implements OnInit {
	
	// Variable con tipado TOKEN
	private tokensCollections: AngularFirestoreCollection<Token>;
	
	// AngularFireMessaging: Sistema de notificaciones
	// AngularFirestore: DB en la que se guardaran los token (Autorizaciones)
	constructor(
		private messaging: AngularFireMessaging,
		private database: AngularFirestore		
	) {
		// Inicializar la colección de tokens
		this.tokensCollections = this.database.collection<Token>('tokens');
	}
	
	gOnInit() {
		this.requestPermission();
		this.listenNotifications();
	}
  
	// Solicitar permiso de envío de notificaciones
	requestPermission() {
		
		// Solicitar token del usuario (celular que autoriza)
		this.messaging.requestToken
		.subscribe(token => {
		  console.log(token);
		  // Guardar el token de autorización a colección de firebase
		  this.tokensCollections.add({token}); 
		});
	}
	
	// Escuchar notificaciones nuevas
	listenNotifications() {
		this.messaging.messages
		.subscribe(message => {
		  console.log(message);
		  //this.route (Redireccionar al usuario)
		});
	}
}
```

3. Habilitar sistema de notificaciones en firebase

	Ingresa al firebase -> proyecto -> Crece -> Cloud Messanding -> Configurar WebApp </>
	
4. Solicitará nombre de la app Ej. pwa store

5. Firebase nos dará un sistema de llaves las cuales toca ir a actualizar a 
	- environment.ts
	- environment.stag.ts
	- environment.prod.ts

```js
	// Your web app's Firebase configuration
	firebase: {
		apiKey: "AIzaSyCp-SspZ_Z_gk--6ano4Nrk6BArvt5crNI",
		authDomain: "testing-angularpwa.firebaseapp.com",
		databaseURL: "https://testing-angularpwa.firebaseio.com",
		projectId: "testing-angularpwa",
		storageBucket: "testing-angularpwa.appspot.com",
		messagingSenderId: "411571692034",
		appId: "1:411571692034:web:a8fcd4cdb99aca6752bd1b"
	}
```

6. Implementar Sistema de guardado en colección de tokens de autenticación, para este ejemplo
	se va a usar AngularFirestore, Para esto a nivel de código como se muestra en el paso 2.
	
7. Crear database en firebase

	Ingresa al firebase -> proyecto -> Desarrollo -> Cloud firestore -> Crear base de datos
	-> Agregar en modo a pruebas
	-> Agregar en modo a pruebas
	
8. Permitir notificaciones al abrir la app

9. En caso de error con firebase.messaging-sw.js, crear archivo con el siguiente contenido en src.  
	En apikey incluir las mismas incluidas en el punto 5.  
	Importante tambien validar la versión de firebase sea igual que en composer.
	Realizar deploy y en consola debe dejar imprimiendo la consola
	
	```js
		// Give the service worker access to Firebase Messaging.
		// Note that you can only use Firebase Messaging here, other Firebase libraries
		// are not available in the service worker.
		importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
		importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

		// Initialize the Firebase app in the service worker by passing in the
		// messagingSenderId.
		firebase.initializeApp({
		  apiKey: "AIzaSyCp-SspZ_Z_gk--6ano4Nrk6BArvt5crNI",
			authDomain: "testing-angularpwa.firebaseapp.com",
			databaseURL: "https://testing-angularpwa.firebaseio.com",
			projectId: "testing-angularpwa",
			storageBucket: "testing-angularpwa.appspot.com",
			messagingSenderId: "411571692034",
			appId: "1:411571692034:web:a8fcd4cdb99aca6752bd1b"
		});

		// Retrieve an instance of Firebase Messaging so that it can handle background
		// messages.
		const messaging = firebase.messaging();
	```
	
	Posteriormente incluir este archivo dentro de los assets de compilación en *angular.js*
	
	```json
		"architect": {
			"build": {
			  "builder": "@angular-devkit/build-angular:browser",
			  "options": {
				...
				"assets": [
				  ...
				  "src/firebase-messaging-sw.js",
				],
	
	```

## Push notificaciones - Enviar
		
Ingresa al firebase -> proyecto -> Crece -> Cloud Messanding -> Send your first message
		
	- Solicitará: Nombre, mensaje  
	- Segmento: Podrá indicar a todos los usuarios
	- Programa: En que momento enviar la notificación
	- Finalmente publicar

Adicionalmente le permitira enviar un mensaje de prueba a un token de autenticación específico.  
Es importante que en el navegador o app esten autorizadas las notificaciones.
		
## Instalar PWA en IOS

Inicialmente validar en reporte de lighthouse

- Solucionar error por icono de ios
index.html
```html
	<link rel="apple-touch-icon" href="assets/icons/icon-180x180.png">
	<!-- Importante que la imagen este de 180x180 -->
```

La instalación se realiza desde safari
Restricciones
- Push notificaciones
- Evento para botón de instalación

Por lo que toca darle 
- share -> Agregar al inicio