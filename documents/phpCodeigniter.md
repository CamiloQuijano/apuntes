[`Volver`](../index.html)

# PHP Codeigniter

## Funciones generales die | version | profile 

```php
	log_message("error","QUERY ::: ".$this->db->last_query());          // Log de últma consulta
	log_message('error', "response ::: ".json_encode($_POST));          // Log de array 
	die($this->db->last_query());                                       // Imprimir última consulta (matar proceso)
	echo $this->db->last_query()."<hr/>";                               // Imprimir última consulta
	echo CI_VERSION                                                     // Versión codeigniter
	$this->output->enable_profiler(TRUE);                               // Habilitar profiler de codeigniter 
```

## Transacciones

### trans_begin
```php
	//cuando tenemos muchas operaciones donde unas dependen de otras,
	//lo mejor es hacerlo dentro de una transacción, de esta forma
	//si no se llevan todas a cabo no se realiza ninguna, muy útil
	public function mi_transaccion() {
		 //empezamos una transacción
		 $this->db->trans_begin();
	 
		 $this->db->query('select * from usuarios');
		 $this->db->query('insert into usuario');
		 $this->db->query('update usuarios');
	 
		 //comprobamos si se han llevado a cabo correctamente todas las consultas
		 if ($this->db->trans_status() === FALSE) {
			  //si ha habido algún error lo debemos mostrar aquí
			  $this->db->trans_rollback();
		}else{ 
			 //en otro caso todo ha ido bien
			 $this->db->trans_commit();
		}
	}
```
 
### trans_start
```php
	$this->db->trans_start();
	
	$this->db->query('select * from usuarios');
	$this->db->query('insert into usuario');
	$this->db->query('update usuarios');
 
	// Valida que el proceso sea correcto
	$this->db->trans_complete(); 
	if (!$this->db->trans_status()){
		throw new Exception('Error al registrar formas de pago');
	}
```	

## SQL Builder

https://codeigniter.com/userguide3/database/query_builder.html

### Identity_insert - Deshabilitar-Habilitar autoincremental columna primary
```sql
	$this->db->query("SET IDENTITY_INSERT {$this->_tNextCfProduct} ON");
	$this->db->insert_batch($this->_tNextCfProduct, $data);
	$this->db->query("SET IDENTITY_INSERT {$this->_tNextCfProduct} OFF");
```

### Ejemplo group_start en consultar
```php
	$this->db
		->select('*')->from('my_table')
		->group_start()
			->where('a', 'a')
			->or_group_start()
					->where('b', 'b')
					->where('c', 'c')
			->group_end()
		->group_end()
		->where('d', 'd')
	->get();
```

### Ejemplo like en consultar
```php
	$builder->like('title', 'match', 'before');      // Produces: WHERE `title` LIKE '%match' ESCAPE '!'
	$builder->like('title', 'match', 'after');       // Produces: WHERE `title` LIKE 'match%' ESCAPE '!'
	$builder->like('title', 'match', 'both');        // Produces: WHERE `title` LIKE '%match%' ESCAPE '!'
```

### Ejemplo no like en consultar
```php
	$builder->not_like('title', 'match', 'before');    // Produces: WHERE `title` NOT LIKE '%match' ESCAPE '!'
	$builder->not_like('title', 'match', 'after');     // Produces: WHERE `title` NOT LIKE 'match%' ESCAPE '!'
	$builder->not_like('title', 'match', 'both');      // Produces: WHERE `title` NOT LIKE '%match%' ESCAPE '!'
```

### delete
```php
	$this->db->delete('mytable', array('id' => $id));  
	// DELETE FROM mytable WHERE id = $id
```

### Insert batch
```php
    /**
     * Insertar un registro Multiples 
     * @param Array $table Nombre de la tabla
     * @param Array $data Arreglo de arreglos con datos para inserción
     * @return int Id de último registro creado
     */
    public function insertBatch($table, $data) { 
        $this->db->insert_batch($table, $data);
        
        $error = $this->db->error(); 
        if ($error['message']) { throw new Exception($error['message'].' class:'.__CLASS__.' line:'.__LINE__); }
        return $this->db->insert_id(); 
    }
```

### Update
```php
    /**
     * Actualizar Hora Extra
     * @param Array $data Arreglo de arreglos con datos para inserción
     * @return int Id de último registro creado
     */
    public function setExtraHours($set) { 
        $this->db
                ->where('id', $idAsset)
                ->update($this->_tableExtraHours, $set);
        
        $error = $this->db->error(); 
        if ($error['message']) { throw new Exception($error['message'].' class:'.__CLASS__.' line:'.__LINE__); }
        return $this->db->insert_id(); 
    }
```

### Update - con base en valor en db
```php
	private function _updateWithValueDB($idAsset, $set) {
        $this->db
                ->where('id', $idAsset)
                ->set('intentos', 'intentos + 1', false)
                ->update($this->_tableExtraHours, $set);

        $error = $this->db->error(); 
        if ($error['message']) { throw new Exception($error['message'].' class:'.__CLASS__.' line:'.__LINE__); }
        return $this->db->insert_id(); 
    }
```

### Update batch
```php
    /**
     * Actualizar registros Multiples 
     * @param Array $table Nombre de la tabla
     * @param Array $data Arreglo de arreglos con datos para actualización 
     * @param string $keySet nombre key por el que se aplica el where de cada iteración 
     * @return int int numero de filas afectadas
     */
    public function updateBatch($table, $data, $keySet) { 
        $this->db->update_batch($table, $data, $keySet);
        
        $error = $this->db->error(); 
        if ($error['message']) { throw new Exception($error['message'].' class:'.__CLASS__.' line:'.__LINE__); }
        return $this->db->affected_rows(); 
    }
```

### Ejemplo query limit - group - like - join
```php
    /**
     * Consultar los items NO SERIALIZADOS (código|descripción) para AUTOCOMPLETAR
     * @author Camilo Quijano <liderdesarrollo@singularcom.com>
     * @date 24/09/2020
     * @param string $searchTerm Término para buscar item por (código|descripción)
     * @param mixed $typeInv array con listado de tipos de inventario o ID de tipo de inventario
     * @return array Listado de coincidencias
     * @throws Exception En caso de error en proceso
     */
    private function _getSearchAutocompleteItemsNoSerialized($searchTerm, $typeInv = false) {
        if($typeInv) { $this->db->where_in('pr.idTipo', $typeInv); }
        
        $query = $this->db
                ->limit(20)
                ->select("codigoItem AS id, CONCAT(codigoItem,' - ',desMostrar) AS text", false)
                ->where('it.estado', 1)
                ->where('gr.indSerial', 0)
                ->group_start()            
                    ->like('it.descripcion', $searchTerm)
                    ->or_like('it.desMostrar', $searchTerm)
                    ->or_like('it.codigoItem', $searchTerm)
                ->group_end()
                ->order_by('desMostrar')
                ->join($this->_tableInvGroup . ' gr', 'it.codGrupo=gr.codigo', 'inner')
                ->join($this->_tableInvProducts . ' pr', 'pr.id = gr.idProducto', 'inner')
                ->get("$this->tableItem it");
        
        $error = $this->db->error();
        if ($error['message']) { throw new Exception($error['message'] . ' class:' . __CLASS__ . ' line:' . __LINE__); }
        return $query->result_array();
    }
```

### Ejemplo query sencilla order_by - join
```php
	$query = $this->db
			->select('enc.descripcion')
			->order_by('enc.id', 'DESC')
			->join("$this->_tableEncPoll part", "pr.id = gr.idProducto AND par.nodoId = {$nodeId}", 'inner')
			->get("$this->_tableEncPoll enc");
	
	$error = $this->db->error();
	if ($error['message']) { throw new Exception($error['message'] . ' class:' . __CLASS__ . ' line:' . __LINE__); }
	return $query->result_array();
```

## Descargar archivo - force_download 
```php
	//Descargar archivo con contenido dinámico
	$data = 'Here is some text!';
	$name = 'mytext.txt';
	force_download($name, $data);

	// Descargar archivo con contenido existente
	force_download('/path/to/photo.jpg', NULL);
```


## Cargar archivos a amazon S3 - control de descarga con try catch 

Envio de solicitud:
```html
	<a href="<?= base_url('dth/agendamiento/descargar/archivoId') ?>" download>
```

Controlador que recibe la solicitud:
```php
    public function downloadAttachmentLog($logId) {
        try {
            $this->validateaccess->validateAccessSinges('clf-schedulesDth', 'json', false);
            $file = $this->logShedules->processDownloadAttachmentLog($logId);
            $this->load->helper('download'); 
            force_download($file['name'], $file['content']);
        } catch (Exception $exc) {
		
            // Opción 1: Indicar que generó error con código de 404
            //header('Content-Disposition: attachment; filename="errorDescarga.txt"');
            //http_response_code(404);
			
            // Opción 2: Descargar un archivo que en su contenido venga el mensaje del error
            //header('Content-Disposition: attachment; filename="errorDescarga.txt"');
            $messageException = ($exc->getMessage()) ? $exc->getMessage() : 'Ocurrio un error en la solicitud. Intente de nuevo, en caso de persistir el error contactese con el administrador';
            echo $messageException;
        }
    } 
```

Logica descarga archivo de aws - s3: 
```php	
	public function processDownloadAttachmentLog($logId) {
        if(!$logId) { throw new Exception('Descarga Adjunto Agendamiento: error ID log'); } 
        $fileAttachment = $this->dbSchedules->getScheduleLog($logId);
        if(!$fileAttachment) { throw new Exception('Descarga Adjunto Agendamiento: error keyFile log'); } 
        
        // Descarga y validación de respuesta AWS-S3 
        $this->load->library('AwsS3');
        $responseAws = $this->awss3->downloadFile($fileAttachment['adjuntoKeyS3'], $this->_varBucketS3Schedules);
        if($responseAws['status'] !== 200) { throw new Exception('Descarga Adjunto Agendamiento: S3 - '.$responseAws['message']);   } 
		$fileAws = $responseAws['file'];
        
        return [
            'name' => $fileAttachment['adjuntoNombre'],
            'content' => $fileAws['Body']
        ];
    }
```

## Ejemplo Controlador con control try-catch y retorno json
###### Tags: `try` `catch` `controller` `documentacion` `json`

```php
    /**
     * Estructura Listado de productos
     * @author Camilo Quijano <camiloquijano31@hotmail.com>
     * @date 09/05/2021
     * @method GET
     * @return json Listado de productos
     */
	public function getProductsDataGrid() {
        try {
            $this->load->model('business/LogProductsModel', 'products');
            $response = $this->products->getLogProductsDataGrid();
            echo json_encode($response);
        } catch (Exception $exc) {
            $code = $exc->getCode() ? $exc->getCode() : 400;
            $messageException = ($exc->getMessage()) ? $exc->getMessage() : 'Ocurrio un error en la solicitud. Intente de nuevo, en caso de persistir el error contactese con el administrador';
            echo json_encode(array('status' => $code, 'message' => $messageException));
        }
	}
```


## Implementacion PWA Codeigniter

Implementación realizada en singes.com.co -> gestar 

### Manifest | Service Worker

A nivel de index HEAD incluir:  
	- meta viewport  
	- meta theme-color  
	- link manifest.webmanifest [`Ejemplo`](pwa/manifest.webmanifest)  
	- link apple-touch-icon  
	
A nivel de BODY incluir:  
	- Btn que se encargará del evento de instalación  
	- service Worker  [`Ejemplo`](pwa/worker.js)  
	
Nota: el **manifest.webmanifest** tiene que tener los distintos tamaños de iconos [`Ejemplo`](pwa/icons)

**index.html**
```html
	<head>
		<meta charset="utf-8">
		<title>Welcome to CodeIgniter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="manifest" href="manifest.webmanifest">
		
		<meta name="theme-color" content="#1976d2">
		<link rel="apple-touch-icon" href="assets/icons/icon-180x180.png">
	</head>
	<body>
		<!-- Elemento que se encargará de asociar el evento que instalará la PWA -->
		<div id="myBtn" style="display:none"> Instalar</div>
		<script  src="worker.js"></script>
		<script  src="beforeinstallprompt.js"></script>
		
	</body>
```

**beforeinstallprompt.js o tag script**
```js

	window.onload = (e) => { 

		let deferredPrompt;
		var btnInstall = document.getElementById("myBtn");
		
		// Evento que controla el prompt de instalación
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			deferredPrompt = e;
			btnInstall.removeAttribute("style"); // Mostramos el btn de instalación
		});
		
		// Agregamos el evento click al botón asociado al evento de instalación
		btnInstall.addEventListener('click', (e) => {
		  btnInstall.style.display = 'none';
		  deferredPrompt.prompt();
		  deferredPrompt.userChoice
			.then((choiceResult) => {
			  if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			  } else {
				console.log('User dismissed the A2HS prompt');
			  }
			  deferredPrompt = null;
			});
		});
		
	}	
  
	// Validamos el listado de rutas incluidas en el service worker
	if ('serviceWorker' in navigator) {
	  window.addEventListener('load', function() {
		navigator.serviceWorker.register('worker.js?'+Math.random()+'')
	  });
	}
```

**worker.js**: en la sección de chae.addAll, incluir las url y/o recursos que van a quedar pegadas en cache
```js
event.waitUntil(
    caches.open('cache01').then(function(cache) {
      return cache.addAll([
		'https://www.singes.com.co/portalSinges/test/cipwa-master/cipwa-master/',
		'https://www.singes.com.co/portalSinges/test/cipwa-master/cipwa-master',
		'index.html',
		'otra-pagina.html',
		'../img/main/norfipc-movil.webp',
		'../img/logo.jpg',
		'../img/portada.jpg'
      ]);
    })
);
```