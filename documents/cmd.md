[`Volver`](../index.html)

# Windows

## windows+r 
###### Tags: `cmd` `comandos` `temp` `prefetch` `eventvwr` `limpieza`

```bash
	appwiz.cpl          Programas y características
	msconfig            Configuraciones del sistema
	regedit             Editor de registros
	slmgr.vbs -xpr      Validar si el windows 8 esta activo
```

Limpieza de archivos temporales
```bash	
	%temp%      	Temporales
	TEMP        	Temporales
	prefetch    	Temporales
	eventvwr    	Visualizados de eventos
```


## CMD
###### Tags: `cmd` `cd` `ipconfig` `comandos`

Comandos básicos 

```bash
	D: (enter)                  	Cambiar de unidad de disco duro (Letra de unidad)
	dir                             Listado de archivos
	cd ..                       	Volver nive anterior 
	cd folder1/folder2          	Moverse entre directorios
	cd ../../folder3            	Moverse entre directorios (Volver directorios)
	diskmgmt.msc                	Administrador de Discos
	ipconfig /flushdns          	Borrar cache DNS PC 
	gpupdate /force             	Actualizar Directivas
	wmic os get osarchitecture  	Versión de Windows,  Indica si el sistema es de 32 o 64 Bits 
	move C:\foldera C:\folderb  	Mover el contenido de una carpeta a otra 
	md data                     	Crear una carpeta en windows 
	del <ruta_archivo>              Eliminar un archivo  
	rmdir <ruta>                    Eliminar carpeta (vacia)
	rmdir <ruta> /s                 Eliminar carpetas con subniveles
```

### Realizar busqueda por consola
```bash
	* /S (subniveles) 
	* /M (Muestra solo el nombre del archivo en donde se encuentra la coincidencia) 
	findstr /S /M "textoAConsultar" src/* 
```

### Mover archivos entre carpetas x consola
###### Tags: `cmd` `robocopy` `xcopy`

Copiar 

```bash
	xcopy <origen> <destino> <propiedades>            Estructura
	xcopy "archivo.nsp" C:\BACKUP /I                  Copiar un archivo
	xcopy C:\CARPETA\* E:\BACKUP /s/i                 Copiar una carpeta y subcarpetas
```
```bash
	robocopy /s /R:3 carpetaorigen carpetadestino
```

Mover 

```bash
	robocopy <origen> <destino> <propiedades>            Estructura
	robocopy K:\foldera C:\folderb /r:2 /s /MOVE         Ejemplo 
```
- /MOVE -> Incluye ruta y nombre de archivos de subcarpetas
- /r:2 -> Nombre de archivos de carpeta principal sin ruta 
- /s -> Sin b incluye fecha hora 

## netstat
###### Tags: `cmd` `netstat` `taskkill` `port`

```bash
	tasklist
	netstat -oan                    // Listado de servicios
    netstat -ano | findstr 80       // Consultar servicios con uso a un puesto especifico
	Taskkill /F /IM chrome.exe
	Taskkill /PID 364 /F
```

## Revisar nombre de un servidor en dominio
###### Tags: `cmd` `nslookup`

Condiciones:  
Se debe encontrar dentro del mismo dominio

```bash
	nslookup
	>> 192.168.100.31
	
	Name:    libra.dominio.local
	Address:  192.168.100.30
```

## Gulp inicio-singes
```bash
	node 8.9.3                  // Versión necesaria NODE
	npm install gulp-cli -g     // Instalar gulp CLI a nivel global
	npm install gulp            // Instalar gulp en proyecto
	npm install gulp-plumber    // Instalar dependencia gulp
	npm install gulp-sass       // Instalar dependencia gulp
	
	npm i gulp-cli@2.3.0 -g		// En caso de error en gulp instalar version 2.3.0
	
	// Para Singes es necesario ubicarse en la carpeta resources
	gulp scripts                // Ejecutar scripts gulp
	gulp styles                 // Ejecutar estilos gulp
```

## Guardar listado de archivos de una carpeta a un archivo
```bash
	dir /b /o f:\Peliculas\Series > f:\series.txt
```
- /s -> Incluye ruta y nombre de archivos de subcarpetas
- /o -> Nombre de archivos de carpeta principal sin ruta 
- /b -> Sin b incluye fecha hora 


## FINDSTR 
- /S -> Recursivo, de la carpeta a todos los subniveles 
- /M -> Imprime nombre de archivo
- /N -> Imprime nombre de archivo y linea de coincidencia 
- /C:"búqueda hola" -> Búsqueda de una palabra exacta 
- "hola mundo" -> Búsqueda alternativa, o una o la otra palabra 
