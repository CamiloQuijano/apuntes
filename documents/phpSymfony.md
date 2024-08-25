[`Volver`](../index.html)

# PHP Symfony

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


## Acceso a nombre del servidor en controlador

```php
	$server = $this->getRequest()->getSchemeAndHttpHost(); // Deprecated 2.7
	$server = $this->get('request_stack')->getCurrentRequest()->getSchemeAndHttpHost(); 
```

## Clases
```php
	$x = new \stdClass($msms); 
```

## Traducciones

```php
	$this->get('translator')->trans("comentario.aprobado.correctamente") 
	$this->get('translator')->trans("esta.intentando.ingresar.de.una.forma.invalida", array(), 'label'); 
```

## Redireccionar
```php
	return $this->redirect($this->generateUrl('admin_atavatars')); 
```

## Renderizar
```php
	return $this->render('AdminBundle:Home:index.html.twig', Array('conectados' => $conectados)); 
```

## Ruta actual 
```twig
	{ { app.request.get('_route') } }
```

## Metodo
```twig
	{ { app.request.method } } 
```

# Rutas - Manejo de ruta con parametros en JS
###### Tags: `symfony` `route`
```js
	var route = '{{ path('Cuenta_ctausuarios_perfil', {'id': "ID_USUARIO"}) }}'; 
	acceso_usuario = route.replace("ID_USUARIO", id); 
```

## Twig

### Funciones Generales
```twig
	{ { app.request.basepath  } }               //AppSource/web 
	{ { app.request.baseurl  } }                //AppSource/web/app_dev.php 
	{ { app.request.requestUri  } }             //AppSource/web/app_dev.php/cuentas 
	{ { app.request.host } }                    // localhost 
	{ { app.request.schemeAndHttpHost  } }      // Ej. http://localhost 
``` 

### Traducciones
###### Tags: `twig` `trans`
Se separan la estructura de twig por error en deploy 
```twig
	{ % trans from "label" % }opciones{ % endtrans % } 
	{ { 'eliminar' | trans({}, 'label') } } 
	
	// Con parametro
	minutes: '{ % trans with {'%d%': '%d'} from "label" % }%d%.minutos{ % endtrans % }' 
```

### Iterar Objetos o arrays
###### Tags: `twig` `for`
```twig
	{ % if product % } 
		{ % for key, p in product % } 
			PRODUCTO { { key } } - { { p.name } } <br> 
			{ % for keyi, h in p.history % } 
				{ { dump(h) } }  
			{ % endfor % } 
		{ % endfor % } 
	{ % endif % } 
```

## Filtro de fecha
###### Tags: `twig` `date`
```twig
	{% if entity.cuentaVencimiento %}
		{ { entity.cuentaVencimiento|date('Y-m-d H:i:s') } }
	{% endif %}
```
 

## MAILGUN: Envío de correos electrónicos

```php
	forward("http://52.21.220.122/app_dev.php/inicio/callbackmsm/mail")
	forward("http://52.21.220.122/app_dev.php/emails/callbackmsm")
```

## Database

### Conexión a doctrine, servicio de control de la DB por medio de las entidades

```php 
	$em = $this->doctrine->getManager(); // Servicio 
	$em = $this->getDoctrine()->getManager(); // Controlador 
```

### Consultar sencilla aplicando filtro y Orden
```php 
	$em = $this->doctrine->getManager();
	$participaciones = $em
		->getRepository('vocationetBundle:Participaciones')
		->findBy(array('usuarioParticipa'=> $usuarioId), array('id' => 'ASC')); 
```

### Consultar compuestas
```php 
	/** 
	 * @var String Consulta SQL de usuarios conectados relacionados con usuario de session y 
	 * ordenados por conectados principalmente, seguido por orden por nombre 
	 * SELECT u.usuario_ultima_accion, 
	 * 	SUM(CASE WHEN (u.usuario_ultima_accion>='2014-01-30 01:00:00') THEN 1 ELSE 0 END) Conectado, u.* 
	 * FROM cta_usuarios u 
	 * JOIN cta_usuarios_relaciones r ON u.id = r.usuarios_id1 OR u.id = r.usuarios_id2 
	 * WHERE u.id != 2 AND usuario_activo = 1 AND usuario_eliminado = 0 
	 * 	AND (r.relacion_aprobada = 1 AND r.cuenta_id = 1 AND r.relacion_tipo = 'AMISTAD' 
	 * 	AND (r.usuarios_id1 = 2 OR r.usuarios_id2 = 2)) 
	 * GROUP BY u.id 
	 * ORDER BY Conectado desc, u.usuario_nombre; 
	 */ 

	$dql = "SELECT u.id AS id, u.usuarioNombre AS nombre, u.usuarioThbPerfil AS img, 
	SUM(CASE WHEN (u.usuarioUltimaAccion>=:fechaback) THEN 1 ELSE 0 END) conectado 
	FROM CuentaBundle:CtaUsuarios u 
	JOIN CuentaBundle:CtaUsuariosRelaciones r WITH u.id = r.usuarios1 OR u.id = r.usuarios2 
	WHERE u.id !=:usuarioId AND u.usuarioActivo = 1 AND u.usuarioEliminado = 0 
		AND ((r.usuarios1 =:usuarioId OR r.usuarios2 =:usuarioId) 
		AND r.relacionAprobada = 1 AND r.relacionTipo = 'AMISTAD' AND r.cuentaId =:cuentaId) 
	GROUP BY u.id 
	ORDER BY conectado DESC, nombre"; 

	$em = $this->doctrine->getManager(); 
	$query = $em->createQuery($dql); 
	$query->setParameter('usuarioId', $usuarioId); 
	$query->setParameter('cuentaId', $cuentaId); 
	$query->setParameter('fechaback', date('Y-m-d H:i:s',strtotime(date('Y-m-d H:i:s')." -3 minutes"))); 
	$userconectec=$query->getResult(); 
	return $userconectec; 

	// Tipos de resultados getResult(Retorna Obj) + Tiempo 
	// Tipos de resultados getArrayResult - Hydrate_Array (Retorna Array) 
	$userconectec=$query->getResult();  
	$userconectec=$query->getArrayResult();  
	$userconectec=$query->getResult(\Doctrine\ORM\Query::HYDRATE_ARRAY);  
``` 

## Acceder a fechas y formato de db
###### Tags: `php` `format`
```php
	$datetime = $msm->getSent()->format('U'); 
	$datetime = $msm->getSent()->format('Y-m-d H:i:s') ; 
	$datetime = $msm->getSent()->format('Y-m-d H:i:s') 
```  

### Insertar fecha datetime
###### Tags: `php` `insert` `datetime` `entity`

```php 
	// Envío de registro con fecha del servidor 
	$newhora->setHoraFechaRegistro(new \DateTime());
``` 
 

### Insert masivo
###### Tags: `php` `insert` `native` `masive`

```php 
	$sql_set = array();
	foreach($usuarios as $u) {
		$sql_set[] = '('.$u.', "'.$notice['creado'].'", "'.$notice['contenido'].'", '.$notice['enlace'].')'; 
	}

	// Consulta nativa, con varios inserts en uno solo 
	$sql = "INSERT INTO notificaciones(usuario, creado, contenido, enlace)  
	VALUES ".implode(',', $sql_set).";"; 
	
	// Ejecucion de query 
	$query = $this->doctrine->getManager()->getConnection()->prepare($sql); 
	$query->execute(); 
``` 

## Database Mongo

### Consultar en mongoDB con Equals
###### Tags: `php` `equals` `mongo` `doctrine`

Consulta a mongo que trae los registros en donde este el "2," PARA CHAT 

```php 
	$id = 27; 
	$where = new \MongoRegex('/.*'.$id.',.*/'); 
	
	$dm = $this->get('doctrine_mongodb')->getManager(); 
	$product = $dm->createQueryBuilder('CuentaBundle:Chat') 
		//->field('name')->equals('2,27,') 
		->field('name')->equals($where) 
		->hydrate(false) 
		->getQuery() 
		->execute();  
``` 


### Consultar en mongo con Find
###### Tags: `php` `find` `mongo` `doctrine`

Consulta a ID 
```php 
	// $id = '5328a7803365c6f41a000002'; 
	$product = $this->get('doctrine_mongodb') 
		->getRepository('CuentaBundle:chat') 
        ->find($id); 
``` 
 
 
### Consultar en mongo completa
###### Tags: `php` `mongo` `doctrine`

```php 
	$product = $this->get('doctrine_mongodb')->getManager()->getRepository('CuentaBundle:Chat'); 
``` 


## Material de apoyo
###### Tags: `symfony` `manuals` `consola` 

Documentación | Instructivos | Consola  
[`Consola Symfony`](phpSymfony/manuals/ConsolaSymfony.docx)  
[`Estandares desarrollo Symfony`](phpSymfony/manuals/EstandaresDesarrolloSymfony-Altactic.docx)  
[`Maestros del web Symfony`](phpSymfony/manuals/MaestrosWebSymfony.php)  
[`Manual Symfony2 ES`](phpSymfony/manuals/ManualSymfony2ES.pdf)  
[`Pasos para actualizar versión de proyectos`](phpSymfony/manuals/Pasos para actualizar versión de proyectos.doc)  
[`SYMFONY 2`](phpSymfony/manuals/SYMFONY2.docx)  
[`SYMFONY BOOK 2.0`](phpSymfony/manuals/SymfonyBook2.0.pdf)  
[`SYMFONY BOOK 2.1`](phpSymfony/manuals/SymfonyBook2.1.pdf)  
[`SYMFONY (PPT)`](phpSymfony/manuals/SYMFONY.ppt)  


## Ejemplos 
###### Tags: `symfony` `crud` `print` `PDF`

[`Ejemplo estructura CRUD`](phpSymfony/examples/structureCrud.zip)  
[`Ejemplo Imprimir PDF con Header - Footer`](phpSymfony/examples/htmlTwigImprimirPDFconheader-footer.html.twig)  

### Pasos para actualizar versión de proyectos
###### Tags: `symfony`

Pasos para actualizar versión de proyectos
1. cambiar el nombre del proyecto actual (para que no sea el mismo del nuevo)  
2. crear un proyecto nuevo con el nombre del proyecto  
3. configurar proyecto con el nombre de la base de datos  
4. registrar por consola los bundles del proyecto antiguo  
5. copiar los archivos adicionales de la carpeta web y exteriores del proyecto  
6. copiar la carpeta de servicios   
7. actualizar el archivo app/config/config.yml y app/config/routing.yml  
	1. descomentar la linea translator y poner el valo de fallback en “es”  
	2. cambiar default_locale:  es_CO  
	3. agregar servicios  
8. copiar las vistas principales de app/Resources/views  
9. copiar los controladores de los bundles  
10. copiar el archivo routing.yml de cada bundle  
11. copiar los recursos de los bundles  
12. copiar la carpeta entity del bundle DataBundle  
13. copiar la carpeta AT/DataBundle/Resources/config/doctrine  
14. probar primero el entorno de producción, si no es necesario eliminar la cache  
