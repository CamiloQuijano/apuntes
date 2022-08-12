[`Volver`](../index.html)

# Markdown

## Estructura

```html
	Titulos: 			 # Titulo
	Encabezado 1:		 ## Encabezado 1
	Encabezado 2:		 ### Encabezado 2
	Negrita:			  **texto en negrita**
	Cursiva:			  *texto en cursiva*
	Enlaces:			  [texto enlace](http://abc.com)
	Imagenes:			 ![texto si URL imagen esta rota](http://magen.jpg)
```

## Imprimir Código
Javascript
```javascript
	```javascript	
		function fancyAlert(arg) {
		  if(arg) {
			$.facebox({div:'#foo'})
		  }
		}
	```
	
	$(document).ready(function(){
		alert('abc');
	 });
```

python
```python
	```python
		s = "Python syntax highlighting"
		print s
	```	
	
	s = "Python syntax highlighting"
	print s
```

sql
```sql
	```sql
		SELECT * FROM com_test WHERE id = 1
	```
	
	SELECT * FROM com_test WHERE id = 1
	
```

## Listas
Este es un ejemplo de texto que da entrada a una lista genérica de elementos:
- Elemento 2
- Elemento 3

Este es un ejemplo de texto que da entrada a una lista numerada:
1. Elemento 1
2. Elemento 2

## Formato Texto
Al texto en Markdown puedes añadirle formato como **negrita** o *cursiva* de una manera muy sencilla.
- **Negrilla**: 2 asteríscos
- *cursiva*: 1 asterisco
- [Link Anclado](#yourLink)
- [Link externo](https://markdown.es/sintaxis-markdown/)

## Tablas
| A  | B  | C  |  D | E |
|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 |
| 6 | 7 | 8 | 9 | 10 |
| 11  | 12 | 13 | 14 | 15 |


## Imágenes
![nombre1][img1]
![nombre2][img2]

[img1]: https://4.bp.blogspot.com/-cSRif2Hy-No/U-vU2kvfTiI/AAAAAAAAG8E/EAAPAphQvwo/a400/chrome_ico.png "Título alternativo"
[img2]: https://www.vozidea.com/wp-content/uploads/2013/03/Chrome-icono.3d.png "Título alternativo 2"


## Espapar comillas o corchetes dobles
###### Tags: `angular` `backbone` `vue`

```javascript
    {% raw %}

        {% raw %}
        ```javascript	
            {{ holamundo }}
            {% holamundo %}
        ```
        {% endraw %}
    {% endraw %}
```

## Projecto helpers

Para la ejecución del proyecto es necesario: 

	- Descargar extensión Markdown Viewer 3.9
		- En compiler 
			- seleccionar 'remark'
			- checkear 'gfm'
		- Content
			- descheckear 'scroll'