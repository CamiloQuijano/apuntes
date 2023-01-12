[`Volver`](../index.html)

# CSS

## Esconder contenido de palabras largar (nowrap)
```css
	.labelAttachment {
		width: 90%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
```


## Imagen background
```css
	body {
		background-image: url('app/images/background.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-blend-mode: lighten;
		background-color: black;
	}
```

## Estilos para resoluciones especificas
```css

	@media not|only mediatype and (mediafeature and|or|not mediafeature) {
		CSS-Code;
	}
	
	@media screen and (min-width: 400px) {
	  body {
		background-color: lightgreen;
	  }
	}
	@media screen and (max-width: 600px) {
	  .topnav a {
		float: none;
		width: 100%;
	  }
	}
```

Tipos  

	all   		Todos los medios
	print 		Para formatos de impresión
	screen		Computadores, tables, smartphone.
	speech		Lectores de pantalla para leer en voz alta.