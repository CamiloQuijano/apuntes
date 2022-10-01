[`Volver`](../index.html)

# React Native

Curso:  https://www.youtube.com/watch?v=kbq339ksiOQ&t=712s&ab_channel=HIWEXEnterprise  
JSX:	https://carlosazaustre.es/jsx-para-novatos  
ES6		https://carlosazaustre.es/ecmascript6  
ANDROID: https://developer.android.com/studio  
REACT NATIVE  https://reactnative.dev/docs/0.60/getting-started


- Framework creado por facebook
- Crear aplicaciones multiplataforma  (Android - IOS)
- Estructura basada en componentes

## ES6 Ecma Script 6

```js
	// Constantes
	const nomVariable = '35';

	// Variable del bloque
	let variableSeccion = 38

	// Clases
	class Component {
	}
	
	// Función JS - ES6
	function get() { console.log('hola'); }
	const get = () => console.log('hola');
	
```

## Instalar React Native

- Instalar node
- Instalar JDK
- Android Studio

### Instalar nvm - Node version Managment LINUX

Es necesario estar trabajando sobre linux o en su defecto tener instalado un subsistema de linux  
NVM sirve para cambiar rapidamente de versión

https://github.com/nvm-sh/nvm

```bash
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

Ejecutar en consola
```bash
	vim .bash_profile
	
	// Incluir este codigo en contenido del archivo
	export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```


### Instalar nvm - Node version Managment WINDOWS

github 	https://github.com/coreybutler/nvm-windows

Ubicar el "download now", descargar e instalar

### Instalar JDK 

JDK		https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
Ubicación Instalación: C:\Program Files\Java\jdk1.8.0_261\

Validar Configuraciones Avanzadas	
 - Variables de entorno JDK
 
	- Variables del sistema
		Nombre: JAVA_HOME
		Valor: C:\Program Files\Java\jdk1.8.0_261\
		
	- Agregar en variable path 
		%JAVA_HOME%\bin
		
- Variables de entorno ANDROID
		
	- Variables del sistema
		Nombre: ANDROID_HOME
		Valor: C:\Users\MAICK\AppData\Local\Android\Sdk
	
	- Agregar en variable path 	
		%ANDROID_HOME%\emulator
		%ANDROID_HOME%\tools
		%ANDROID_HOME%\tools\bin
		%ANDROID_HOME%\platform-tools
	
	
## MVN Comandos

Versión de NVM
```bash
	nvm -version
```

Cambiar versión de Node	
```bash
	// última versión de node
	nvm install --lts
	
	// Instalar versión específica
	nvm install 8
```

## Crear maquina virtual android Studio

Acceder a:  
Configurar -> AVD Manager -> Create Virtual Device -> Seleccionar equipo a usar 


## Instalar react-native globalmente
```bash
	npm install -g react-native-cli
```

## Crear proyecto partiendo de react-native global

```bash
	// Crear proyecto
	react-native init reactNative
	
	// Correr proyecto en android (Moverse a raiz del proyecto)
	react-native run-android
```

En caso de error en *react-native run-android*: 

	error Failed to install the app. Please accept all necessary Android SDK licenses using Android SDK Manager: "$ANDROID_HOME/tools/bin/sdkmanager --licenses". Run CLI with --verbose flag for more details.
	Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

Solución: 

	Go to Configure>SDK Manager in your Android Studio.  
	Select SDK Tools tab and install Google Play Licensing Library
	
Estructura
- __tests__: módulos de pruebas

## Instalar expo globalmente
```bash
	npm install expo-cli --global
```

Iniciar proyecto con expo estructura en blanco
```bash
	expo init reactNativeExpo --template blank
	
	cd AwesomeProject
	npm start
```

Local		http://localhost:19006/  
Expo 		http://localhost:19002/
	