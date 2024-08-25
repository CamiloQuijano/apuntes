[`Volver`](../index.html)

# Node JS

- [Instuctivo - Notas](nodeJs/instructivoNodeJs.pdf)

## Instalar nodeJS

https://nodejs.org/en/

Se sugiere instalar la versión LTS

## Estructura

Archivo principal server.js
Paquetes
	express: Framework para peticiones http
	mongoose: Conexión y manejo de datos
	bodyParser: Convertir peticiones que salen a JSON
	config: Configuraciones propias, edición inicial de params.js
		process.env.variablename ... son para leer variables de entorno del sistema operativo
	socket.io:
	cors: Peticiones desde servidores diferentes al origen
	
Pruebas Unitarias

NODE: make test

## version instalada node js

```bash
	node -v
	node --version
```

## Instalar forever via NPM para ejecucion de proceso
###### Tags: `nodejs` `npm` `forever` 

- [Documentación Paquete Forever](https://www.npmjs.com/package/forever )

```bash
	sudo npm install -g forever               # Instalar forever
	forever list                              # Lista
	forever stop [id]                         # Parar el proceso del id indicado 
	forever stop *                            # Para todos los procesos
	forever start -al notijs.log server.js	  # Iniciar proceso indicando archivo de log y archivo node a arrancar 
```

## Instalar stylus
###### Tags: `npm` `stylus` 
```bash
	npm install stylus -g 
	npm install NIB -g 
	stylus -u nib -c -w -o css/ stylus/altactic.styl 
```

<style> body { tab-size: 4; } </style>