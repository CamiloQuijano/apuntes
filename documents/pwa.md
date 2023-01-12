[`Volver`](../index.html)


# PWA Aplicaciones Web Progresivas

Aplicaciones Web Progresivas

Características:

	-Trabaja sin conexion y en redes lentas
	-Carga en segundos
	-Notificaciones Push
	-Basada en Web
	-Detectable (deep links), con un link podemos ir a la aplicacion PWA
	-Pequeña en tamaño
	-Siempre actualizada
	-Icono en la pantalla de inicio
	

## Tipos de Aplicaciones 

Web Hibridas
- Web empaquetada en una app 
- Ejemplo **IONIC**
	
Native Bridge
- Ejemplo **React Native** **NativeScript**
- Código Javascript - typescript - Interfaz en html

PWA
- Descargada desde el navegador


## Services Workers

Un service worker es una secuencia de comandos que corren en segundo plano en el navegador.

Ejemplo: Push notification, guardar información en cache, deep links, etc.  
Es un intermediario que examina las peticiones.  
Se apoya de cache  

Flujo:   
Page -> SERVICE WORKER -> Cache -> Nextwork -> Page

Al acceder al navegador -> Nextwork -> All
 - Los engranes corresponden a los elementos cargados desde el services Workers

 
### Borrar cache de service Workers

Navegador -> Application -> Clear Storage -> [CLEAR SITE DATA]  



