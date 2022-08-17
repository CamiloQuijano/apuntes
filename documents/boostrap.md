[`Volver`](../index.html)

# Boostrap

## Implementar
###### Tags: `boostrap` `libreria` `instalar`

Documentación:   
[`Versión 4.0 - Ejemplos`](https://getbootstrap.com/docs/4.0/examples/)  
[`Versión 4.4 - Navbar`](https://getbootstrap.com/docs/4.4/components/navbar/)  	

[`Descargar librería v4.0`](libraries/bootstrap4.0.zip)  

Implementación:  
```html
	<!-- bootstrap - css -->
	<link href="./libraries/bootstrap/bootstrap.min.css" rel="stylesheet">

	<!-- bootstrap - JS (Es necesario jquery) -->
	<script src="./libraries/jquery-3.2.1.slim.min.js"></script>
	<script src="./libraries/bootstrap/bootstrap.min.js"></script>
```


## Cortar palabras 
###### Tags: `boostrap` `class` `text-nowrap`

```html
	text-nowrap			// Cortar palabra
```

	
## Modal

```html
	<!-- Button trigger modal -->
	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
	  Launch demo modal
	</button>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
		  <div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			  <span aria-hidden="true">&times;</span>
			</button>
		  </div>
		  <div class="modal-body">
			...
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary">Save changes</button>
		  </div>
		</div>
	  </div>
	</div>
```

# Librerias

## Font awesome 
###### Tags: `fontawesome` `libreria` `instalar`

Documentación:  	
- [`Versión 4.7.0`](https://fontawesome.com/v4.7.0/)
- [`Versión 5.15.0`](https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use)

Descargar
- [`Descargar librería v4.7`](libraries/font-awesome-4.7.0.zip)  
- [`Descargar librería v5.15`](libraries/fontawesome-free-5.15.2.zip)  

Implementación:  
```html
	<!-- Versión 4.7 -->
	<link rel="stylesheet" href="plugins/font-awesome-4.7.0/css/font-awesome.min.css">
	
	<!-- Versión 5.15 -->
	<link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet">
	<link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet">
```

<style> body { tab-size: 4; } </style>