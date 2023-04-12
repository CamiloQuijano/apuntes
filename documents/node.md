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