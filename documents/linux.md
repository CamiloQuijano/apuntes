[`Volver`](../index.html)

# Linux

## Comandos Carpeta / Archivos

```bash
	ls                              Lista de carpetas
	ls -al                          Lista de carpetas con archivos ocultos
	cd nombre-de-carpeta            Ir a una carpeta concreta
	cd                              Volver a la carpeta Home
	cd –                            Volver a la carpeta anterior
	pwd                             Mostrar la carpeta donde te encuentras
	mkdir nombre-de-carpeta         Crear una carpeta nueva
	rm -r nombre-de-carpeta         Borrar una carpeta
	rm -rf nombre-de-carpeta        Fuerza el borrado de una carpeta
	rm nombre-de-archivo            Borrar un archivo
	rm -f nombre-de-archivo         Fuerza el borrado de un archivo
	cp nombreArchivo nombreCopia    Copia un archivo
	mv arch1.text archiv2.text      Mover un archivo
	find nombre-de-archivo          Busca un archivo
	wget enlace                     Descarga un archivo
	wget -c enlace                  Continua una descarga parada
```

## Comandos Procesos

```bash
	ps          		Muestra los procesos activos
	top         		Muestra todos los procesos en funcionamiento
	kill pid    		Mata un proceso con un PID concreto. Verás el PID de un proceso con top
```

## Atajos al escribir comandos

```bash
	CTRL + C        	Para el comando activo
	CTRL + W        	Borra una palabra de la línea actual
	CTRL + U        	Borra toda la línea
	!!              	Repite el último comando
	Flecha arriba   	Recupera el último comando para editarlo
	exit            	Sale de la sesión
```

## Comandos Información del sistema

```bash
	arch                    	Muestra la arquitectura (x86, ARM,…)
	date                    	Muestra la fecha y hora
	cal                     	Muestra el calendario del mes en curso
	uname -a                	Muestra información del núcleo (kernel)
	cat /proc/cpuinfo       	Muestra información de la CPU
	cat /proc/meminfo       	Muestra información de la memoria
	df                      	Muestra el espacio usado del disco
	du                      	Muestra el espacio usado en una carpeta
	free                    	Muestra la memoria y uso de SWAP
	whereis nombrePrograma  	Muestra dónde puede estar un programa
```

## Editor de texto VIM

```bash
	ESC		Habilitar modo comando
	:q		Salir
	:q!		Salir sin guardar
	:wq		Guardar archivo actual y salir
	:x		Guardar y salir
	:qa		Salir y cerrar todos los archivos
```

## Comandos Permisos
```bash
	sudo chgrp camiloquijano archivoname            Cambio propietario archivo GRUPO
	sudo chown camiloquijano archivoname            Cambio propietario archivo
	Chmod 750                                       Permisos WEB
	Chmod 770                                       Permisos WEB tmpl
	sudo chmod 750 -R carpeta_name                  Permisos Recursivos. -R: Carpetas recursivas
```  

## Instalar sublime3
```bash
	sudo add-apt-repository ppa:webupd8team/sublime-text-3
	sudo apt-get update
	sudo apt-get install sublime-text-installer
```  

## LINUX INCLUIR VIRTUAL HOST
- En etc/apache2/sites-avaliables incluir el archivo con el nuevo hosting virtual 
- Agregar en archivo etc/host el nuevo virtual host
- Agregar virtual a apache sudo a2ensite nombre archivo (pararse en la ruta del archivo etc/apache2/sites-avaliables )

Eliminar archivos termporales (Basura)
sudo apt-get autoremove


## ELIMINAR CACHE DE ELASTIC CACHE DE AWS (exclusivamente cache)
```bash
	redis-cli -h redis-cache-beta.yikpsn.0001.use1.cache.amazonaws.com
	flushall
```  