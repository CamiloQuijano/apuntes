[`Volver`](../index.html)

# Wamp

## Versiones de wamp

Página: https://wampserver.aviatechno.net/


## Error Access to XMLHttpRequest has been blocked by CORS policy

```php
    // Error
    Error Access to XMLHttpRequest at '' from origin '' has been blocked by CORS policy: Response 
    to preflight request doesn't pass access control check: It does not have HTTP ok status.

    // Solución: Incluir en .htaccess
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"
```


## Error Header

```php
	// Log error
	[Mon May 08 11:04:59.121797 2017] [core:alert] [pid 8964:tid 884] [client ::1:50431] 
	C:/wamp64/www/server_singularcom/.htaccess: Invalid command 'Header', perhaps misspelled 
	or defined by a module not included in the server configuration
		
	// Solución
	httpd.config
	LoadModule headers_module modules/mod_headers.so
```

## Error Forbidden
Tutorial https://www.youtube.com/watch?v=Rko7EjvDebk

```php
	// Error
	Forbidden
	You don't have permission to access /server_singularcom/api_singes_singularcom/
	getList…node/2821/list/1/count/1/API-SING/ExjNO9H6E5cFgLvbYveDExjNO9H6E5cFgLvbYveD on this server.
	________________________________________
	Apache/2.4.23 (Win64) OpenSSL/1.0.2h PHP/7.0.10 Server at 192.168.90.94 Port 8080

	// Change Required de "local" a "all granted"
	// in httpd.conf
	<Directory "${INSTALL_DIR}/www/">
		Require all granted
	</Directory>
	
	// in httpd-vhosts.confg 
	<VirtualHost *:8080>
		<Directory  "c:/wamp64/www/">
			Require all granted
		</Directory>
	</VirtualHost>
```

## Error Aranque apache por puerto 80 ocupado
###### Tags: `wamp` `80`

En caso de que se encuentre el puerto 80 ocupado por PID 4
Deshabilitar "Servicio de publicación World Wide Web"

```bash
    NET stop HTTP
```