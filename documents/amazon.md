[`Volver`](../index.html)

# Amazon

## Conectarse a una instancia de Linux en amazon
###### Tags: `AMAZON` `LINUX` `WINSCP`

```linux
	WIN SCP
	
	CTRL + ALT + H				Mostrar archivos ocultos
```

## EC2

Para crear una instancia de 0
- Github → DmalagonH → Tutoriales → Amazon → Configurar servidores amazon desde 0.md
- [EC2 de O](https://github.com/DMalagonH/tutoriales/blob/master/Amazon/Configurar%20servidores%20amazon%20desde%200.md)

***CREAR COPIA***:
1. Seleccionar instancia a duplicar
2. Actions → Launch more like this

***GRUPOS DE SEGURIDAD***: 
Grupo para acceso a conexiones a DB, ec2, ssh, etc por IPS.

***IMAGENES***: 
Se crean imagenes de seguridad para cuando se van a realizar cambios grandes (como backup de seguridad), en caso de que sea necesario restablecer una imagen
Images→ AMIs→ Seleccionar imagen → Lanch

Seguidamente es necesario reasociar la ip en producción con la nueva instacia creada de EC2,
Elastic IP's → Seleccionar IP → Associate address → Seleccionamos nombre instancia EC2.

Crear nueva IP:
Elastic IP's → Allocate new Address

Control de Discos duros de EC2 (No se usa mucho actualmente)
Elastic Block Store → Volumes


## RDS (DB)

***CREAR IMAGENES DE SEGURIDAD***
RDS → DB Instantes → Seleccionar instancia → Instance actions → take snapshot

***LISTADO DE IMÁGENES:*** 
Se crean dos tipos de imagenes : Automáticas (1 díaria) y manuales (take snapshot).
RDS Dashboard → Snapshot

***RESTABLECER IMAGEN:***
Ingreso al listado de imágenes, selecciona imagen a restaurar y 'click' en botón 'Restore Snapshot', en caso de que sea necesario restablecer esta imagen, se pone el endpoint de la imagen restablecida en 'parameters', adicionalmente se modifica la instancia RDS para seleccionar el grupo de seguridad 'Altactic', para control de IPS.  
Restaurar img : RDS Dashboard → Snapshot → Seleccionar imagen → Restore Snapshot



## ElasticCache (Redis)
Sugerencia de uso de un único nodo, para que las info cacheada no se divida en distintos nodos, small-micro

***REINICIAR NODO***:
Control para verificar que un nodo no se encuentra demasiado saturado para una posterior reiniciada. Revisar gráfica de “swap usage”.  
Cache Clusters → Instancia → Nodes → Seleccionar nodo → Reboot node.
IMPORTANTE: En caso de Channeldir no reiniciar nodo “redis-db-beta”, ya que este no contiene cache, sino esta la DB de redis.

En caso de multiples nodos, para reiniciar un único nodo (cache), seleccionar el cluster, el nodo y haciendo uso de ENDPOINT del nodo a traves de EC2, nos conectamos al nodo exclusivamente asi:

```console
redis-cli -h name_endpoint	
	redis-cli: Cliente de redis
	-h: hosting
	name_endpoint: nombre del hosting o nodo
```

## S3
## SES (Correos)
## Cloudfront: Encargada de propagación de carpetas CDN
## Iam: Cuentas de acceso
## Route53: Gestión de dominios
## VPC: Red virtual interna
