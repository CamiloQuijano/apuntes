[`Volver`](../index.html)

# GIT

## Comandos Basicos
```bash
    git help                              		-- Ayuda
    git init                              		Inicializa la carpeta donde este el promtuario como un repositorio git
    git clone <url>                       		Clonar repositorio remoto en local
    git status                            		Verifica los cambios sin consignar al escenario
    git status -s                         		Verifica los cambios sin consignar al escenario (otro formato)
    git commit -m "Mensaje descriptivo"   		Consignar los cambios.
    git pull                              		Bajar los cambios desde el repositorio remoto
    git push origin master                		Se sube al repositorio remoto
    git fetch --tags                      		Bajar cambios - tags
```
	
## Config - Configuracion Inicial
```bash
    git config --global user.name "nombre"              	Agregar nombre de usuario en las configuraciones globales
    git config --global user.email email@domain.com     	Agregar correo de usuario en las configuraciones globales
    git config --global color.ui true                   	Activar colores en la consola de comandos
    git config --global push.default simple             	Configuracion para cuando se realice un "git push" solo se suban los cambios de la rama actual
    git config --global core.autocrlf false             	Desactivar control de salto de linea LF(unix) a CRLF(windows)
    git config --global core.preloadindex true
    git config --global core.fscache true
    git config --global gc.auto 256
``` 

## Alias - Configurar
```bash
    git config --global alias.co checkout                           	Crea alias co para checkout
    git config --global alias.br branch                             	Crea alias br para branch
    git config --global alias.ci commit                             	Crea alias ci para commit	
    git config --global alias.st status                             	Crea alias st para status
    git config --global alias.aa 'add --all'                        	Crea alias aa para add --all (agregar todo)
    git config --global alias.logk 'log --oneline --graph --all'    	Crear alias logk para ver logs amigrable
``` 

## Logs - Consultar registro - Historial de consignaciones
```bash
    git log                                             	Mostrar lista de consignaciones
    git log --pretty=format:"%h %an %dd %s"             	Muestra log con información detallada
    git log --name-only b19ee1e..6652451                	Diferencias entre commits
    git log --since=1.minute.go                         	Muestra consignaciones de hace 1 minuto
    git log --since=1.day.ago                           	Muestra consignaciones de hace 1 dia
    git log --since=1.hour.ago                          	Muestra consignaciones de hace 1 hora
    git log --since=1.month.ago --until=2.weeks.ago     	Muestra consignaciones de hace 1 mes hasta hace 2 semanas
    git log --since=2000-01-01 --until=2012-12-21       	Muestra consignaciones entre dos fechas
    git log --oneline --graph --all                     	Muestra consignaciones por linea, estructura gráfica de ramas
``` 

## Diff - Comparaciones
```bash
    git diff                            	Muestra cambios de la copia de trabajo
    git diff --name-only                	Muestra cambios de la copia de trabajo (Solo nombre archivo)
    git diff --name-only appli/*        	Muestra cambios de la copia de trabajo (ruta especificada)
    git diff HEAD                       	Muestra cambios de la última consignación
    git diff HEAD^                      	Muestra cambios del padre de la última consignación
    git diff HEAD^^                     	Muestra cambios del abuelo de la última consignación
    git diff HEAD~5                     	Muestra cambios de 5 consignaciones atras
    git diff master <rama>              	Compara dos ramas
    git blame <archivo> --date short    	Para conocer las historia de un cambio que no se entiende
    git diff 4fb063f..f5a6ff9           	Mostrar diferencias usando los identificadores SHA de dos consignaciones	
    git diff --name-only log..log       	Mostrar diferencias entre consignaciones (Nombres de archivos)
``` 

## Add - Agregar archivos al escenario
```bash
    git add <listado de archivos>       	Adicionar uno o varios archivos nuevos o editados al escenario
    git add --all                       	Adicionar todos los archivos nuevos o editados al escenario
    git add *.txt                       	Adicionar todos los archivos nuevos o editados al escenario con extension txt
    git add docs/*.txt                  	Adicionar todos los archivos nuevos o editados al escenario con extension txt dentro de la carpeta docs
    git add docs/                       	Adicionar todos los archivos nuevos o editados al escenario dentro de la carpeta docs
    git add "*.txt"                     	Adicionar todos los archivos nuevos o editados al escenario con extension txt en todo el proyecto
``` 

## Commit - Consignaciones al repositorio
```bash
    git commit -m "Mensaje descriptivo"           	Consignar los cambios. Crea una instantánea del escenario y la adiciona a la línea de trabajo. El mensaje debe estar en presente
    git commit -a -m "Mensaje descriptivo"        	"-a" adiciona todos los archivos con cambios. No adiciona archivos que estén fuera del escenario
    git commit --amend -m "Mensaje descriptivo"   	"amend" es para que git sepa que es una modificación  o arreglo de la última consignación, 
													se puede especificar un nuevo mensaje en la consignación, Cualquier cosa que esté en el escenario 
													será adicionada a la consignación anterior.
``` 

## Push Pull - Subir y bajar consignaciones del repositorio central
```bash
	git push -u origin master   	Subir cambios consignados al repositorio remoto. "origin" se refiere al nombre de la conexion con el 
									repositorio central y "master" es el nombre del branch
	git pull                    	Bajar los cambios desde el repositorio remoto
	git fetch                   	Bajar los cambios desde el repositorio remoto sin mezclar los archivos
``` 

## Remote - Conexiones con repositorios remotos
```bash
    git remote add origin <ruta>                        	Agrega repositorio remoto principal 
    git remote add upstream <ruta>                      	Agrega reporitorio remoto paralelo	
    git remote set-url origin <newurl> <oldurl>         	Cambiar la url del repositorio
    git remote set-url origin <ssh_url> <https_url>     	Cambiar la url del repositorio remoto por la ruta para conexion con ssh
    git remote -v                                       	Verificar todos los remotos registrados, Se pueden tener muchos remotos, generalmente el de pruebas, producción y el de seguridad
    git remote r <nombre>                               	Eliminar un remoto
    git remote show origin                              	Muestra:
																Ramas remotas
																Ramas locales y con cuales remotas mapean o fusionan
																Ramas locales que referencian a las remotas para push
``` 	

## Reset Checkout - Revertir cambios en las consignaciones locales
```bash
    git checkout <archivo>      	Deshacer cambios en el escenario
    git checkout --<archivo>    	Devolver la última consignación
    git reset HEAD <archivo>    	Remover cambios de escenario: vuelve al estado anterior
    git reset --soft HEAD^      	Devolver al escenario solo un paso
    git reset --hard HEAD^      	Deshace completamente todos los cambios y la última consignación
    git reset --hard HEAD^^     	Las últimas dos consignaciones
``` 

## Branch - Ramas
```bash
    git branch                                          	Muestra las ramas creadas y resalta en la que se esta trabajando actualmente
    git branch <nombre>                                 	Crear una nueva rama
    git checkout -t origin/<rama>                       	Agregar al repositorio local una rama remota
    git checkout -b <nuevonombre> origin/<ramaremota>   	Agregar al repositorio local una rama remota con un nombre distinto
    git branch -r                                       	Puede ver todas las ramas remotas
    git push origin :<rama>                             	Elimina rama del repositorio remoto
    git branch -d <rama>                                	Elimina rama del repositorio local
    git branch -D pagos                                 	Forzar eliminacion de rama local
    git checkout <rama>                                 	Cambiar a escenario de otra rama
    git merge <nombrerama>                              	Mezcla la rama que se indica en <nombrerama> a la rama donde se esta trabajando
    git checkout -b <nombrerama>                        	Crea y se cambia a la nueva rama
    git remote prune origin                             	Eliminar referencia remota de las ramas eliminadas
``` 

## Tags - Etiquetas Versiones
```bash
    git tag                             	Muestra las etiquetas creadas
    git tag -a <nombre> -m "<mensaje>"  	Crear una etiqueta
    git push --tags                     	Subir etiquetas a remoto
    git checkout <nombretag>            	Volver a como estaba el código cuando se liberó con una etiqueta especifica
    git clone -b <tag> <link_git>       	Clonar un tag especifico
    git tag -d <tag>                    	Eliminar una etiqueta local
    git push origin :refs/tags/<tag>    	Eliminar una etiqueta remota
    git tag -l v20*                     	Consultar tag aplicando Filtro
    git describe                        	Consultar Última versión
```

## Tags con autor
```bash
	git for-each-ref --format '%(refname) %09 %(taggerdate) %(subject) %(taggeremail)' refs/tags  --sort=taggerdate
```

## Rm - Eliminar archivos
```bash
    git rm <archivo>            	Eliminar archivo del escenario y sistema de archivos
    git rm --cache <archivo>    	Eliminar archivo del escenario pero no del sistema de archivo / agregar a git ignore
``` 

## Key SSH para conexion al repositorio

[`Proceso de creación`](http://git-scm.com/book/es/Git-en-un-servidor-Generando-tu-clave-p%C3%BAblica-SSH)

```bash
    cd ~/.ssh   	moverse a la carpeta personal para keys ssh
    ssh-keygen  	Generar nueva key
``` 

## Conexion SSH Github 

[`Documentacion`](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

1. Generar keygen
```bash
	ssh-keygen -t rsa -b 4096 -C "camiloquijano31@hotmail.com"
```

2. Con las claves SSH, si alguien obtiene acceso a su computadora, también obtiene acceso a todos los sistemas que usan esa clave. Para agregar una 
capa adicional de seguridad, puede agregar una frase de contraseña a su clave SSH. Puede usar ssh-agentpara guardar de forma segura su frase de 
contraseña para que no tenga que volver a ingresarla.
```bash
	eval $(ssh-agent -s)
```

3. Agregue su clave privada SSH al ssh-agent. Si creó su clave con un nombre diferente, o si está agregando una clave existente que tiene un nombre 
diferente, reemplace id_rsa en el comando con el nombre de su archivo de clave privada.
```bash
	ssh-add ~/.ssh/id_rsa
```

4. Copiar contenido del archivo
```bash
	clip < ~/.ssh/id_rsa.pub
```

5. Finalmente ingrese a github y parametrice la SSH registrada en la máquina

	- Ingresar a github, En la esquina superior derecha de cualquier página, haz clic en tu foto de perfil y luego en **Configuración**.
	- En la barra lateral de configuración de usuario, haga clic en **SSH y claves GPG**.
	- Haga clic en **Nueva clave SSH** o **Agregar clave SSH**.
	- En el campo "Título", agregue una etiqueta descriptiva para la nueva clave. Por ejemplo, si está utilizando una Mac personal, puede llamar a esta tecla "MacBook Air personal".
	- Pega tu clave en el campo "Clave".
	- Haga clic en **Agregar clave SSH**.
	- Si se le solicita, confirme su contraseña de GitHub.

	
## Estructura ejemplo CONFIGGIT
```bash
[color]
	ui = true
[user]
	name = CamiloQuijano
	email = camiloquijano31@hotmail.com
[core]
	autocrlf = true
	filemode = false
	ignorecase = false
```

## Crear proyecto de estructura existente

1. Creación de estructura inicial 
2. en GITBASH ubicado en raíz de estructura (Proyecto Local)
	- /c/xampp/htdocs/portalSinges/proyectoXYZ
	- git init
3. moverse a ubicación de repositorio remoto, Creación del repositorio central a través del iniciado en paso 2.
	- cd //192.168.100/htdocs/git_repository
	- git clone --bare c:/xampp/htdocs/portalSinges/proyectoXYZ
4. Configuración de repositorio central en estructura creada en paso 1. (Proyecto Local)
	- /c/xampp/htdocs/portalSinges/proyectoXYZ
	- git remote add origin //192.168.90.100/htdocs/git_repository/proyectoXYZ
	
## Guias de ejemplo

### Clonar un repositorio
```bash
    git clone //192.168.90.100/htdocs/git_repository/test_git.git 	Descarga el repositorio en la carpeta donde este ubicado
    git pull  														Descarga estructura adicional del repositorio (ramas, tags)
``` 

### Consignar cambios
```bash
    git add .  									Prepara todos los archivos para ser consignados
    git commit -m "Descripción de los cambios" 	Se realiza la consignacióngi clo de los cambios realizados en el repositorio local
    git log	    								Ver listado de consignaciones
``` 

### Subir commits a repositorio remoto
```bash
    git pull origin master								Descargar primero posibles cambios cargados por otros
    git status											Ver estado de los cambios
    Resolver conflictos   								Si exiten conflictos deben resolverse manualmente
    git commit -m "Mensaje de solución de conflictos" 	Se consignan los cambios realizados para solucionar los conflictos
    git push origin master								Se sube al repositorio remoto
``` 

### Ramas - Ejemplo creacion, consignacion de cambios y subida
```bash
    git branch <nombre-rama>					Crea una rama
    git checkout <nombre-rama>  				Apunta el directorio de trabajo a la rama
    git add .   								Prepara todos los archivos para ser consignados en la rama
    git commit -m "Descripción"     			Se realiza la consignación de los cambios realizados en la rama del repositorio local
    git push origin <nombre-rama>   			Sube al repositorio remoto las consignaciones de la rama. Si la rama no existe en el repositorio centra se crea automaticamente
``` 

### Ramas - Descargar del repositorio remoto que no existe en mi repositorio local
```bash
    git checkout master						Asegurarse de estar en la rama master
    git branch -r  							Ver referencias a ramas en el repositorio remoto
    git pull   	    						Actualizar rama principal y descargar referencias de las ramas que estan en el repositorio remoto
    git checkout -t origin/<nombre-rama>   	Moverse a la rama descargada
``` 

### Ramas - Descargar cambios de la rama principal a la rama de trabajo
```bash
    git checkout master									Moverse a la rama principal
    git pull origin master 								Descargar los posibles cambios
    git checkout <nombre-rama>     						Moverse a la rama en la que se esta trabajando
    git merge master   									Mezclar la rama principal a la rama en la que se esta trabajando
    Solucionar posibles conflictos    	 				Si exiten conflictos deben resolverse manualmente
    git commit -m "Mensaje de solución de conflictos"  	Se consignan los cambios realizados para solucionar los conflictos
``` 

### Ramas Subir cambios de la rama de trabajo a la rama principal master
```bash
    git checkout master								Moverse a la rama principal
    git merge <nombre-rama>							Mezclar la rama de trabajo a master
    git push origin master 							Subir al repositorio remoto
``` 

### Revertir un cambio puntual
```bash
    git reset --hard f414f31
    git reset --soft HEAD@{1}
    git commit -m "Reverting to the state of the project at f414f31"
```