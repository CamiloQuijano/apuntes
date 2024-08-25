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

## Estandar variables funciones constantes
```js
	ESTANDAR 					DECLARACIÓN 	VARIABLES	
	Variables 			        snake_case	    todo en minúscula (nombre_de_variable)  
	Clases Objectos Arrays		StudyCaps	    con la primera en mayúscula (MiObjeto, MiArray)  
	Funciones Metodos		    camelCase	    con la primera en minúscula (miFuncion)  
	CONSTANTES 			        SNAKE_CASE 	    todo en mayúscula (MI_CONSTANTE, estas casi nunca las usamos)  
```

JQUERY  
Signo $ en variables jQuery: Cuando una variable se utiliza para almacenar un objeto del DOM obtenido a través de un selector jQuery debe tener el signo $ antes del nombre para identificala como un objeto y no confundirla con un valor. 

URL  
Todas las url deben estar en minuscula sin espacios ni guión bajo ni ningún tipo de separador entre palabras
Todas las url deben estar en español. No mezclar ingles y español 


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