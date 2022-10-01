[`Volver`](../index.html)

# GITHUB

# Paso a produccion

## Subir a produccion de repositorio github a github-pages
###### Tags: `github` `github-pages`

[Documentación](https://pages.github.com/)

	1. Crear rama con el nombre gh-pages
	2. Subir los cambios a esta rama
	3. Validar deploy del proyecto (Para confirmar cambios)
	4. Para acceder al sitio 
		https://usuario.github.io/<nombrerepositorio>  
		Ej:  https://camiloquijano.github.io/helpersPub/
	

	
## Subir a produccion de repositorio github a netlify
###### Tags: `github` `netlify`

Para crear sitio  

	1. Ingresar a https://app.netlify.com/  
	2. Click en 'Add new site' => Import an existing project from a Git repository  
	3. selecciona github (Autorizar permisos de acceso)  
	4. Selecciona repositorio, click en instalar  
	5. Ingresar al repositorio, aceptar config x defecto y click en deproy  
	
Para actualizar sitio  

	1. Subir cambios a repositorio  
	2. Ingresar a https://app.netlify.com/  
	3. Realizar el deploy  
	

### Error build script returned nox-zero exit code

En caso de error - Validar el log del deploy
	
	Failed during stage 'build site': build script returned nox-zero exit code: 1
	- npm ERR! path /opt/build/repo/node_modules/node-sass

Solución desinstalar node-sass e instalar sass-loader and sass
```bash
	npm uninstall node-sass

	npm install sass-loader
	npm install sass
```