[`Volver`](../index.html)

# Virtual Host

Agregar a **httpd-vhosts.conf**  
ubicación: C:\wamp64\bin\apache\apache2.4.23\conf\extra

```xml
	<VirtualHost *:80>
		ServerName local.laravel.com
		ServerAlias local.laravel.com
		DocumentRoot C:/wamp64/www/MyWebAppLaravel/public
		<Directory  "C:/wamp64/www/MyWebAppLaravel/public">
			Options +Indexes +Includes +FollowSymLinks +MultiViews
			AllowOverride All
			Require local
		</Directory>
	</VirtualHost>
```

Agregar a **host**
Ubicación: C:\Windows\System32\drivers\etc

```php
	127.0.0.1       local.laravel.com
```

## VirtualHost SSL 

```php
<VirtualHost *:4432>
    ServerAdmin camiloquijano31@hotmail.com
    DocumentRoot "C:/xampp/htdocs/Altactic/web/"
    ServerName local.altactic.com:4432 
    ServerAlias www.local.altactic.com:4432 
    ErrorLog "logs/Altactic.log"
    CustomLog "logs/Altactic.log" common 
	SSLEngine on 
	SSLCertificateFile "conf/ssl.crt/server.crt" 
	SSLCertificateKeyFile "conf/ssl.key/server.key" 
	<Directory "C:/xampp/htdocs/Altactic/web/">
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```

## VirtualHost Error 403

Busca en tu httpd.conf un Deny from all y cámbialo a Allow from all
Quizá ese simple cambio lo solucione

```php
<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order deny,allow
    Allow from all
</Directory> 
```

## VirtualHost Default
- [`Linux Default`](virtualhost/LinuxExampleVirtualHost000-default.conf)
- [`Linux Altactic`](virtualhost/LinuxExampleVirtualHostAltactic.conf)
- [`Windows Default`](virtualhost/Windowshttpd-vhosts.conf)