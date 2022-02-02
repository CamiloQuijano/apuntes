[`Volver`](../index.html)

# HTML

**HTML** (lenguaje de marcas de hipertexto), es el lenguaje donde se define la información o el contenido del documento, el formato de los archivos es .html

**CSS** (cascading style sheets), el lenguaje donde se especifica el diseño del documento, maneja todo lo relacionado con la parte visual, el formato de los archivos es .css

**JavaScript**, el lenguaje que hace que todo sea interactivo, es realmente el lenguaje de programación que nos permite crear sitios web, el formato de los archivos es .js


## Deshabilitar autocompletar en form
```html
	<form method="post" action="/form" autocomplete="off">
	[…]
	</form>
```

## Formulario - submit por fuera del form 
###### Tags: `html` `form` `submit`
```html
	<form id="myform" method="get" action="something.php">
		<input type="text" name="name" />
	</form>

	<input type="submit" form="myform" />
```

## Formulario - submit con imagen
###### Tags: `html` `form` `submit` `img`
```html
	<form action="enviar_form.php">
		<input type="text" name="nombre"/>
		<input title="boton enviar" alt="boton enviar" src="img/mi_imagen.jpg" type="image" />
	</form>
```

## Asignar rol de un elemento a otro
```html
	<!-- El span tomar características de botton -->
	<span role="button">Non-button element button</span>
```

## formulario file accept
```html
	<input type="file" name="schedulesFile" class="custom-file-input" id="fileArchive" required accept=".xlsx">
```

## video
###### Tags: `html` `video` `source`

**autoplay**: Autoiniciar  
**muted**: En silencio  
**controls**: Botones de control al video  
**loop**: Repetir automáticamente  
**styles**: style="pointer-events: none;" - Para no mostrar controles  

```html
	<video width="320" height="240">
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>
```

## Head Importar JS
```html
	<script src="https://javascript.min.js"></script>
```


## Head metatags
###### Tags: `html` `meta` `tags`

Documentación  
https://www.w3schools.com/tags/tag_meta.asp

```html
	<head>
	  <title>test </title>
	  <meta charset="UTF-8">
	  <meta name="description" content="Free Web tutorials">
	  <meta name="keywords" content="HTML, CSS, JavaScript">
	  <meta name="author" content="John Doe">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
```
