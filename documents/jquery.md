[`Volver`](../index.html)

# JQUERY

## Acceder a informacion de formulario
###### Tags: `jquery` `serialize` `serializeArray` `serializeObject`

```js	
    $(event.currentTarget).serialize();
    // searhEHGroupId=1&searhEHStatus=2&searchEHDateInit=3
	
    $(event.currentTarget).serializeArray();
    // [ 0: {name: "searhEHGroupId", value: "1"} 1: {name: "searhEHStatus", value: "2"} 2: {name: "searchEHDateInit", value: "3"} ]
	
    $(event.currentTarget).serializeObject();
    // { searhEHGroupId: "1", searhEHStatus: "2", searchEHDateInit: "3"}
	
```


## Ejemplo funcion normal y funcion tipo flecha con parametros
###### Tags: `jquery` `event` `function`

```js	
    // Declaración función normal
    // Se accede a la info como $(this).serialize();
    jQuery('#clickme1').on('click',function() {
            console.log('Se ha pinchado: ',jQuery(this).attr('id'));
    });

    // Declaración función de tipo flechas
    // Se accede a la info como $(e.currentTarget).serialize();
    jQuery('#clickme2').on('click',(e) => {
            console.log('Se ha pinchado: ',jQuery(e.currentTarget).attr('id'));
    });
```


## evento para control de contenido dinamico 
###### Tags: `jquery` `event` `on`

```js	
    // 1. Elemento padre | 2. Evento | 3. Elemento que genera evento | 4. Función
    $('.modalDetailsShopcartContent').on('submit','.removeShopCart', (e) => {
        console.log('Evento ON submit');
    });
```


## evento para control de cambios
###### Tags: `jquery` `event` `change` `prop` `checked`

```js	
    $('#myCheckbox').change(function () {
        if ($(this).prop("checked")) {
            console.log('is checked');
        }
    });
```

## Seleccionar primer Tab
###### Tags: `jquery` `first` `tabs` `javascript`

```js	
    $("#myTab li:first a").click();
```

## Buscar en DOM por nombre
###### Tags: `jquery` `find` `name`

```js	
    var name2 = $('#referrerRequestForm').find('input[name=contactName]').val();
```

## Agregar contenido en un Id o Clase - antes o despues
###### Tags: `jquery` `append` `prepend`
```js
	// Despues del existente 
	$("#containerchat").append("Some appended text."); 
	
	// Antes del existente 
	$("#containerchat").prepend("Some appended text."); 
```

## Convertir string a JSON
###### Tags: `jquery` `parse` `stringify`
```js
	// De string a JSON
	var obj = JSON.parse(string); 
	
	// De JSON a string
	var stringJSON=JSON.stringify(obj); 
```

## Crear un Objeto
###### Tags: `jquery` `Object`
```js
	var objectnew = new Object(); 
```

## Eliminar o agregar clase
```js
	// Eliminar una clase 
	$('#elementid').removeClass('chg_padding_close');  
	
	// Agregar una clase 
	$('#elementid').addClass('chg_padding_close');  
```


## Animacion para moverse a un elemento
###### Tags: `jquery` `event` `animate` `scroll`

```js	
    // Animación a elemento específico
    $("html, body").animate({ scrollTop: $('#documentsContractsContent').offset().top - 50 }, 1000);
```

## Esconder o mostrar elemento 
###### Tags: `jquery` `event` `toggle`
```js	
$(".showDetailContent").toggle();
```

## Select
###### Tags: `jquery`

### Ocultar una opcion especifica
###### Tags: `jquery` `select` `hide`

```js	
    $("#selectid option[value=" + title + "]").hide();
    $("#selectid option[value=5]").hide();
```

### Seleccionar una opcion
###### Tags: `jquery` `select` `selected` `val`

```js	
    $("#forpag").val('0');
    $("#forpag option[value='0']").attr('selected', true);
```


### Imprimir 
###### Tags: `jquery` `print` `media` `val`

```js	
    <script>
        $('.printClick').click(function(){
            window.print();
        });
	</script>

	<style type="text/css">
		@media print {
			footer, .noprint {  
				display: none !important
			}
		}
	</style>
```