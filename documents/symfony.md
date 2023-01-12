[`Volver`](../index.html)

# SYMFONY

ACTUALIZAR VERSIÓN SYMFONY
Ingreso a repositorio de symfony: https://github.com/symfony/symfony, 
Identifico versión actual usada en branch, y uso archivo UPGRADE .xx 
con la versión a actualizar.

## ACTUALIZAR PAQUETES
NODE Actualizar package.json
Actualiza e incluye en archivo nuevas versiones (no se recomienda mucho por incompatibilidad en diferencias en estructuras de desarrollo entre versiones instaladas)
```bash
sudo npm –save update: 
```

Actualizar paquete por paquete
```bash
	sudo npm install package_name --save
		package_name: Nombre del paquete a actualizar
		--save: Guarda en archivo package.json versión actualizada
```

Páginas para actualizar paquetes|vendors y revisar últimas versiones y requerimientos
- NODE: https://www.npmjs.com/
- SYMFONY: https://www.versioneye.com | https://packagist.org/


## ACCESO A SERVER DESDE SYMFONY CONTROLLER (Nombre) 
```php
$server = $this->getRequest()->getSchemeAndHttpHost(); // Deprecated 2.7
$server = $this->get('request_stack')->getCurrentRequest()->getSchemeAndHttpHost(); 
```

## Ruta actual 
```twig
	{{ app.request.get('_route') }}
```

## Metodo
```twig
	{{ app.request.method }} 
```

MAILGUN: Envío de correos electrónicos
```php
forward("http://52.21.220.122/app_dev.php/inicio/callbackmsm/mail")
forward("http://52.21.220.122/app_dev.php/emails/callbackmsm")
```