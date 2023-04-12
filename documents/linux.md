[`Volver`](../index.html)

# Linux

- [Instalar Ubuntu 13.0](linux/InstalarUbuntu.pdf)

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
	// Instalar
	sudo apt-get install vim 

	// Comandos
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
	