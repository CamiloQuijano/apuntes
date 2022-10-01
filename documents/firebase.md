[`Volver`](../index.html)


# Firebase

## Comandos

```bash
	npm install -g firebase-tools		// Instalar dependencia de firebase
	firebase logout						// Cerrar sesión (En caso de haber trabajado previamente con firebase)
	firebase login						// Iniciar sesión | Redireccionará y solicitara inicio de sesión en web
	firebase login --interactive		// Iniciar sesión (en caso de error login:ci)
	firebase init						// Inicializar
	firebase deploy				// Subir cambios
```
	
## Crear nuevo proyecto y montarlo en entorno https

1. Ingresar a **https://firebase.google.com/**

2. Ir a *Consola*

3. **Crear Proyecto**
	- Aceptamos terminos y condiciones y aceptamos google analitycs
	
4. Ingresamos a sección de desarrollo -> Hosting (Empezar)

5. Es necesario instalar la dependencia de firebase.tools (Se sugiere realizar estos comandos en consola modo administrador)

	```bash
		npm install -g firebase-tools		// Instalar dependencia de firebase
	```

6. **Iniciar Sesión**: Se sugiere cerrar sesión En caso de haber trabajado previamente con firebase.

	```bash
		firebase logout						// Cerrar sesión 
		firebase login						// Iniciar sesión | Redireccionará y solicitara inicio de sesión en web
		firebase login --interactive		// Iniciar sesión (en caso de error login:ci)
		
		// Nota: En caso de generar este error en firebase login use --interactive
		// Error: Cannot run login in non-interactive mode. See login:ci to generate a token for use 
		// in non-interactive environments. 
	```

7. **Iniciamos firebase**

	```bash
		firebase init						// Inicializar
	```
	- Solicitará los servicios a usar: **Hosting**
	- Solicitará que indiquemos si es proyecto nuevo/antiguo, seleccionamos **Use an existing project**
	- Seleccionamos el proyecto creado previamente
	- solicitará que indiquemos la carpeta publica  
		- En caso de angular es **dist** (Distribution)  
		- Preguntará si desea sobreescribir e index, se sugiere que **NO**, para no alternar la configuración actual
		
	**Importante**: Para la sección de opciones es preferible realizarlo con comEmu
	
8. Realizamos deploy

	```bash
		ng build --prod				// En caso de angular crear app para producción
		firebase deploy				// Subir cambios
	```
	
	Nota: en caso de realizar deploy e ingresar a url y no visualizar nada, validar 
	en **firebase.json** que el attributo *public* no tenga sub carpetas..., en caso
	de existir modificar como corresponda.
	
	Ej. **dist/platzi-store-pwa**
	
9. Al ingresar al sitio automáticamente se habilitará una opción para descargar e instalar la app

	Ej Pruebas: https://testing-angularpwa.web.app
	

## Bug con redireccionamientos estaticos en SPA angular

En caso de redireccionamientos con single pages applications como por ejemplo angularIO  
Incluir en **firebase.json**
	
```js
	{
		"hosting": {
			...
			"rewrites": [{
				"source": "**",
				"destination": "/index.html"
			  }
			]
		}
	}
```
	
Esto indicará que cuando no encuentre un contenido redireccione al index de angular, el cual
se encargará del redireccionamiento del sitio