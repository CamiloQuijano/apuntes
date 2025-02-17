﻿[`Volver`](../index.html)

# Linux

- [Instalar Ubuntu 13.0](linux/InstalarUbuntu.pdf)

## Rutas Importantes

```linux
	Raiz Apache www                    /var/www/html
	Logs de errores de apache          /var/log/apache2/error.log (Debian y Ubuntu)
	Archivo php.ini                    /etc/php/7.2/apache/php.ini  
	Carpeta certificados SSL           /etc/ssl/
	Configuraciones APACHE             /etc/apache2/apache2.conf
	Carpera SSH                        /home/ubuntu/.ssh
	Carpera SSH                        ~/.ssh
```

## Comandos Apache

```bash
	sudo service apache2 restart        # Reiniciar Apache  
	sudo /etc/init.d/apache2 restart    # Reiniciar Apache (Opc2)
```

## Comandos Carpeta / Archivos

```bash
	ls                              # Lista de carpetas
	ls -al                          # Lista de carpetas con archivos ocultos
	cd nombre-de-carpeta            # Ir a una carpeta concreta
	cd                              # Volver a la carpeta Home
	cd –                            # Volver a la carpeta anterior
	pwd                             # Mostrar la carpeta donde te encuentras
	mkdir nombre-de-carpeta         # Crear una carpeta nueva
	rm -r nombre-de-carpeta         # Borrar una carpeta
	rm -rf nombre-de-carpeta        # Fuerza el borrado de una carpeta
	rm nombre-de-archivo            # Borrar un archivo
	rm -f nombre-de-archivo         # Fuerza el borrado de un archivo
	cp nombreArchivo nombreCopia    # Copia un archivo
	mv arch1.text archiv2.text      # Mover un archivo | Cambiar nombre de archivo
	find nombre-de-archivo          # Busca un archivo
	wget enlace                     # Descarga un archivo
	wget -c enlace                  # Continua una descarga parada
	cat <name_archivo>              # Ver contenido del archivo
```

## Comandos de Consulta
```bash
	grep -rn "texto" ruta/*
	-n: Número de línea
	-r : Recursivo
```

## Comandos Permisos
###### Tags: `chmod` `chown` `chgrp`  
```bash
	sudo su                                    # Cambiar conexión a usuario ADMINISTRADOR
	sudo chgrp camiloquijano archivoname       # Cambio propietario archivo GRUPO
	Chmod 750                                  # Permisos WEB
	Chmod 770                                  # Permisos WEB tmpl
	sudo chmod 750 -R carpeta_name             # Permisos Recursivos. -R: Carpetas recursivas
	
	# Cambiar propietario de archivo 
	sudo chown <usuario> <archivo>             # Estructura
	sudo chown ubuntu config/constants.php     # Ejemplo

	# Cambiar propietario de CARPETA
	sudo chown -R <usuario> <carpeta>          # Estructura
	sudo chown -R ubuntu public_html/          # Ejemplo
```  
Estructura generales
```bash 
	Valor        Numérico	Explicación
	rw——-        600	    El propietario puede leer y escribir.
	rw-r–r–      644	    El propietario puede leer y escribir, el grupo y otros pueden leer.
	rw-rw-rw-    666	    El propietario, el grupo y otros pueden leer y escribir.
	rwx——        700	    El propietario puede leer, escribir y ejecutar, el grupo y otros no pueden hacer nada con el archivo.
	rwx–x–x      711	    El propietario puede leer, escribir y ejecutar, el grupo y otros pueden ejecutar.
	rwxr-xr-x    755	    El propietario puede leer, escribir y ejecutar, el grupo y otros pueden leer y ejecutar.
	rwxrwxrwx    777	    EL propietario, el grupo y otros pueden leer, escribir y ejecutar.
```

## Generar key SSH
```bash
	cd ~/.ssh       Directorio de keys de ubuntu
	ssh-keygen      Generar key nueva
```

## Comandos PHP  
```bash
	php -v                                    # Versión de php 
	php -m                                    # Listado de librerias 
	dpkg --get-selections | grep -i php       # Listado de instalaciones realizadas (filtra php)
	sudo apt-cache policy php7.2-zip          # Características de la libreria
```  

## Comandos Procesos
```bash
	ps          		# Muestra los procesos activos
	top         		# Muestra todos los procesos en funcionamiento
	kill pid    		# Mata un proceso con un PID concreto. Verás el PID de un proceso con top
	htop                # Ver grafica de procesadores / ram
```

## Atajos al escribir comandos

```bash
	CTRL + C        	# Para el comando activo
	CTRL + W        	# Borra una palabra de la línea actual
	CTRL + U        	# Borra toda la línea
	!!              	# Repite el último comando
	Flecha arriba   	# Recupera el último comando para editarlo
	exit            	# Sale de la sesión
```

## Comandos Información del sistema

```bash
	arch                    	                 # Muestra la arquitectura (x86, ARM,…)
	date                    	                 # Muestra la fecha y hora del servidor
	cal                     	                 # Muestra el calendario del mes en curso
	uname -a                	                 # Muestra información del núcleo (kernel)
	cat /proc/cpuinfo       	                 # Muestra información de la CPU
	cat /proc/meminfo       	                 # Muestra información de la memoria
	df                      	                 # Muestra el espacio usado del disco
	du                      	                 # Muestra el espacio usado en una carpeta
	free                    	                 # Muestra la memoria y uso de SWAP
	whereis nombrePrograma  	                 # Muestra dónde puede estar un programa
	timedatectl set-timezone America/Bogota      # cambiar la zona horaria linux
```

## Editor de texto VIM

```bash
	// Instalar
	sudo apt-get install vim 
	
	// Abrir archivo
	vim <filename>

	// Comandos
	ESC		Habilitar modo comando - salir
	i       Insertar
	:undo   Atras
	:q		Salir
	:q!		Salir sin guardar
	:wq		Guardar archivo actual y salir
	:x		Guardar y salir
	:qa		Salir y cerrar todos los archivos
```

## Editor de texto NANO

```bash

	// Comandos
	sudo nano nombrearchivo			// Abrir un archivo
	
	SALIR	ctl+z + Y
```

## Editor de texto GEDIT

```bash
	sudo gedit nombrearchivo.config		 			Abrir archivos
```

## Instalar sublime3
```bash
	sudo add-apt-repository ppa:webupd8team/sublime-text-3
	sudo apt-get update
	sudo apt-get install sublime-text-installer
```  


## Configurar php.ini 
###### Tags: `php.ini` `timezone` `post_max_size` `upload_max_filesize` `max_input_vars`  

Ubicación archivo:  
/etc/php/7.2/apache/php.ini  

```bash
	-- LINE: 934
	;date.timezone =
	date.timezone = "America/Bogota"

	-- line 669
	post_max_size = 8M
	post_max_size = 64M

	-- LINE 822
	upload_max_filesize = 2M
	upload_max_filesize = 64M

	-- LINE 398
	;max_input_vars = 1000
	max_input_vars = 5000
	
	-- Reiniciar apache
	sudo service apache2 restart
```  


## Certificado sobre linux
###### Tags: `ssl` `virtualhost` 

```bash
	# ubicación carpeta certificados  
	etc/ssl

	# Incluir en VIRTUALHOST  
	SSLCertificateFile	/etc/ssl/certs/test-selfsigned.crt  
	SSLCertificateKeyFile	/etc/ssl/certs/test-selfsigned.key  

	# Permisos Originales de carpeta  
	sudo chmod 755 -R /certs  
	sudo chmod 710 -R /private  

	# entrar a carpeta y cambiar temporalmente los permisos mientras 
	# pega los certificados posteriormente revertir a los orginales  
	sudo chmod 777 -R /certs	(cambio temporal)  

	# Reset apache  
	sudo service apache2 restart  
```

## LINUX con Codeigniter 

### Nombramiento de Archivos
###### Tags: `codeigniter` 

- Los nombres de los archivos deben estar en mayúscula. Por ejemplo: Myclass.php
- Las declaraciones de clase deben estar en mayúscula. Por ejemplo: clase Myclass
- Los nombres de las clases y los nombres de los archivos deben coincidir.

```php
	class Someclass {
		public function some_method() {
		}
	}
```

- Llamado de clases 'someclass' es el nombre del archivo, sin la extensión de archivo ".php". Puede enviar   
  el nombre del archivo en mayúsculas o minúsculas. A CodeIgniter no le importa.
  
```php
	$this->load->library('someclass');
```

### Error index.php o htaccess
###### Tags: `codeigniter` `AllowOverride` `htaccess` `VirtualHost`

En caso de error 404 cuando se trata de acceder a una ruta sin el index.php

1. Validar Config.php, que las config se encuentren asi:
```php
	$config['index_page'] = ""
	$config['uri_protocol'] = "REQUEST_URI"
```

2. Validar el .htaccess del root del proyecto tenga esta contenido
```htaccess
	<IfModule mod_rewrite.c>
		RewriteEngine On
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule ^(.*)$ index.php/$1 [L] 
	</IfModule>
```

3. Editar archivo de configuración 
sudo gedit /etc/apache2/sites-enabled/000-default.conf

4. Incluir el AllowOverride all
```config
	VirtualHost *:80>
		<Directory /var/www/html>
			AuthType Basic
			AuthName "Restricted Content"
			AuthUserFile /etc/apache2/.htpasswd
			Require valid-user
			Options +ExecCGI
			DirectoryIndex index.php
			AllowOverride all
		</Directory>
		DocumentRoot /var/www/html
```
	
5. Reset el apache2
sudo service apache2 restart


## Habilitar Error de lectura htaccess
```bash
	# PASO 1: abrir archivo de apache 
	sudo nano /etc/apache2/apache2.conf
	 
	# PAS2 : Actualizar configuración de www 
	AllowOverride All (Cambio en archivo)

	# PASO3: Enabled apache mod rewrite (Command)
	sudo a2enmod rewrite

	# PASO4: Restart Apache (Command)
	sudo /etc/init.d/apache2 restart
```


## Habilitar/Instalar header mod_headers

```bash
	a2enmod headers
	apache2 -k graceful
	sudo service apache2 restart
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


## LAMPP SERVER 

### Instalación 

* sudo apt-get install tasksel 
* sudo tasksel 
* Seleccionar lampp server usando la tecla espacio 
* aceptar 
* En ubuntu 13.10 agregar la siguiente linea a /etc/apache2/apache2.conf 

ServerName localhost 
* En ubuntu 13.10 agregar la siguiente linea a /etc/php5/apache2/php.ini y /etc/php5/cli/php.ini 
date.timezone = "America/Bogota" 


### Iniciar/Detener 

sudo /etc/init.d/apache2 start 
sudo /etc/init.d/apache2 stop 
sudo /etc/init.d/apache2 restart 
 
### Extensiones 

* PHP-DEV: sudo apt-get install php5-dev 
* PEAR: sudo apt-get install php-pear 
* JSON: sudo apt-get install php5-json 
* cURL: sudo apt-get install php5-curl 
* intl: sudo apt-get install php5-intl 
* gd: sudo apt-get install php5-gd (para funciones relacionadas a imagenes) 
* APC 
* sudo apt-get install php-apc 
* agregar lineas a php.ini (en ubuntu 13.10 no son necesarias): 
	extension=apc.so 
	apc.apc.stat = 0 
	apc.include_once_override = 1 
	apc.shm_size = 64M 

* memcached:  
sudo apt-get install memcached 
- Nota: En caso de tener problemas: 

* sudo apt-get install build-essential 
* sudo pecl install memcache 
* memcache: 
* sudo apt-get install php5-memcache 
* sudo gedit /etc/php5/conf.d/memcache.ini (en ubuntu 13.10 /etc/php5/apache2/php.ini/20-memcache.ini) 
* Descomentar ; extension=memcache.so 
* XSL: sudo apt-get install php5-xsl (para generacion de documentacion) 

### Habilitar mod_rewrite 

* sudo a2enmod rewrite 
* sudo service apache2 restart 


### AB APACHE 

sudo apt-get install gnuplot-nox apache2-utils 


### XHPROF 

* Descargar o clonar proyecto facebook-xhprof de https://github.com/diego-software/xhprof en la carpeta /var/www por ejemplo 
* cd /var/www/xhprof/extension/ moverse a la carpeta extension dentro del proyecto 
* Ejecutar las siguientes lineas. 
% phpize 
% ./configure --with-php-config=<path to php-config> (--with-php-config=/usr/bin/php-config) 
% make 
% make install 
% make test  

* Agregar las siguientes lineas a php.ini (tener en cuenta los 2 archivos /etc/php5/apache2/php.ini y /etc/php5/cli/php.ini) 
extension=xhprof.so 

xhprof.output_dir=<directory_for_storing_xhprof_runs> (/var/www/xhprof/output_dir o /tmp/xhprof por ejemplo) 
* Para ejecutar xhprof para una aplicación individual se deben copiar los archivos de la carpeta external prepend.php y append.php en el proyecto  
* Crear un virtualhost para la aplicacion con los siguientes valores (Estos archivos pueden ser editados segun la necesidad) 
* php_admin_value auto_prepend_file "/var/www/proyecto/xhprof/prepend_file.php" 
* php_admin_value auto_append_file "/var/www/proyecto/xhprof/append_file.php" 


### ubuntu 12.04 (https://groups.drupal.org/node/82889) 

* sudo aptitude install python-software-properties 
* sudo add-apt-repository ppa:brianmercer/php5-xhprof 
* sudo aptitude update 
* sudo aptitude install php5-xhprof graphviz 

 
### ubuntu 13.10 

* verificar que universe este activo en la fuente de software (centro de software/editar/origenes de software) 
* sudo apt-get install php5-xhprof graphviz 
* agregar extension=xhprof.so en php.ini 


### phpDocumentor 

sudo apt-get install php-pear 
pear channel-discover pear.phpdoc.org 
pear install phpdoc/phpDocumentor-alpha 

 
### CURL 

* sudo apt-get install curl 


### GIT 

* sudo apt-get install git-core 


### TERMINATOR 

* sudo apt-get install terminator 


### NETBEANS 

* Instalar jdk (http://www.ubuntu-guia.com/2012/04/instalar-oracle-java-7-en-ubuntu-1204.html) 
* sudo add-apt-repository ppa:webupd8team/java 
* sudo apt-get update 
* sudo apt-get install oracle-java7-installer 
* Descargar Netbeans para linux en la pagina oficial (.sh) 
* sudo sh netbeans-7.x-linux.sh 


### MYSQL WORKBENCH 

* Descargar paquete de http://dev.mysql.com/downloads/tools/workbench/#downloads 
* sudo dpkg -i mysql-workbench-gpl-x.x.x-xxxxxxxxx-xxxx.deb 
* sudo apt-get -f install 

### FILEZILA 

* sudo apt-get install filezilla 



## XAMPP FOR LINUX 1.8.2  

### Instalación 

1. Descargar xampp-linux-1.8.2-0-installer.run http://www.apachefriends.org/en/xampp-linux.html 
2. su 
3. chmod 755 xampp-linux-1.8.2-0-installer.run 
4. ./xampp-linux-1.8.2-0-installer.run 


### Iniciar/Detener 

/opt/lampp/lampp start 
/opt/lampp/lampp stop 
/opt/lampp/lampp restart 

 
### Archivos y directorios importantes 

/opt/lampp/bin/ The XAMPP commands home. /opt/lampp/bin/mysql calls for example the MySQL monitor.  
/opt/lampp/htdocs/ The Apache DocumentRoot directory.  
/opt/lampp/etc/httpd.conf The Apache configuration file.  
/opt/lampp/etc/my.cnf The MySQL configuration file.  
/opt/lampp/etc/php.ini The PHP configuration file.  
/opt/lampp/etc/proftpd.conf The ProFTPD configuration file. (since 0.9.5)  
/opt/lampp/phpmyadmin/config.inc.php The phpMyAdmin configuration file.  

 
### Parámetros Iniciar/Detener 

start Starts XAMPP.  
stop Stops XAMPP.  
restart Stops and starts XAMPP.  
startapache Starts only the Apache.  

startssl Starts the Apache SSL support. This command activates the SSL support permanently, e.g. if you restarts XAMPP in the future SSL will stay activated.  
startmysql Starts only the MySQL database.   
startftp Starts the ProFTPD server. Via FTP you can upload files for your web server (user "nobody", password "lampp"). This command activates the ProFTPD permanently, e.g. if you restarts XAMPP in the future FTP will stay activated.  
stopapache Stops the Apache.   
stopssl Stops the Apache SSL support. This command deactivates the SSL support permanently, e.g. if you restarts XAMPP in the future SSL will stay deactivated.  
stopmysql Stops the MySQL database.  
stopftp Stops the ProFTPD server. This command deactivates the ProFTPD permanently, e.g. if you restarts XAMPP in the future FTP will stay deactivated.  
security Starts a small security check programm.   

 
## MEMCACHED Y MEMCACHE 

### Instalación para XAMPP FOR LINUX (lampp) 

* memcached:  
sudo apt-get install memcached 

* memcache: 

Descargar paquete en http://pecl.php.net/package/memcache  
Ejecutar como root: su  
Descomprimir: tar -xzf memcache-x.x.x.tgz  
cd memcache-x.x.x  

Ejecutar: 
/opt/lampp/bin/phpize  
./configure --enable-memcache --with-php-config=/opt/lampp/bin/php-config  
make  
make install  
Asegurarse de que instalo : find /opt/lampp/ -name memcache.so  
Agregar extencion a php.ini: extension=memcache.so  
Reset apache  
 
## APC 


### Instalacion para XAMPP FOR LINUX (lampp) http://www.samclarke.com/2011/10/install-apc-with-xampp-on-linux/ 

wget -O apc-latest.tar.gz http://pecl.php.net/get/APC 
tar xvfz apc-latest.tar.gz 
cd APC-3.1.13 

Ejecutar:  
/opt/lampp/bin/phpize 
./configure --with-php-config=/opt/lampp/bin/php-config 
make 
sudo make install 
Agregar la extension a php.ini: extension=apc.so 
Reset apache 


## Otras formas de instalar lampp server 

* Opcion 1 
sudo apt-get install lamp-server^ 

* Opcion 2 (recomendada) 
sudo apt-get isntall tasksel 
sudo tasksel 

* Opcion 3 

sudo apt-get install apache2 
sudo apt-get install mysql-server 
sudo apt-get install php5-* (mod-php5) 
sudo service apache2 restart 
	
	
## Error de conexion SSH repositorios
	
1. Copiar contenido de SSH de carpeta  
	/home/ubuntu/.ssh/

2. En caso de error por permisos  
	@@@@@@@@@@@@@@@@@@@@@@@  
	@ WARNING: UNPROTECTED PRIVATE KEY FILE! @  
	@@@@@@@@@@@@@@@@@@@@@@@  
	Permissions 0664 for '/home/ubuntu/.ssh/id_rsa' are too open.  
	It is required that your private key files are NOT accessible by others.  
	This private key will be ignored.  
	Load key "/home/ubuntu/.ssh/id_rsa": bad permissions  

3. Solución por permisos  
	chmod 600 ~/.ssh/id_rsa