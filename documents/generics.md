[`Volver`](../index.html)

# Generics

## Netbeans (Templates Code)

	tryj			try catch  - json
	dbl 			die last query
	thr 			new excepción
	pre 			print entre <pre>
	doc 			documentación 

## Software

- Composer https://getcomposer.org/download/
- underscore https://underscorejs.org/#findIndex 

## Programación en línea

- codePen https://codepen.io/pen/
- jsfiddle https://jsfiddle.net/
- jsbin https://jsbin.com/?html,output

## Metodos HTTP
- GET
- POST
- PUT → Igual que post, Buena práctica, usable para editar un elemento completo
- PATH → Edita exclusivamente unos campos.

## Uso Comun PHP
```php
	log_message("error","QUERY ::: ".$this->db->last_query());  		// Log de últma consulta
	log_message('error', "response ::: ".json_encode($_POST));  	    // Log de array 
	die($this->db->last_query());   									// Imprimir última consulta (matar proceso)
	echo $this->db->last_query()."<hr/>";   							// Imprimir última consulta
	$this->output->enable_profiler(TRUE);   							// Habilitar profiler de codeigniter 
	var_export($array)  												// Imprimir array	
```

## Comentar bloque funcional
```php
	// ========================================= //
	// ========= REPORTE RECARGAS KIT ========== //
	// ========================================= //
	
	//******************************/
	//**** FUNCIONES PRIVADAS ******/
	//******************************/
```

## Logs de errores

Los archivos se pueden visualizar con sudo less|vim|gedit file_name

	LINUX APACHE: 	 /var/log/apache2/error.log
	SYMFONY:		   [carpeta raiz]/app/logs/prod.log
	CODEIGNITER		[carpeta raiz]/application/logs/*
	NODE:			  Forever list, hay aparece ruta de archivo log