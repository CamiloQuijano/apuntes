﻿[`Volver`](../index.html)

# Underscore

- [Documentación](https://underscorejs.org/)  
- [`Descargar librería`](libraries/underscore-min.zip)  

Implementación:  
```html
	<script src="<?= base_url('resources/plugins/underscore-min.js') ?>"></script>
```

## Sumar valores de un array
###### Tags: `underscore` `js` `reduce`
```js
    var total = _.reduce(response.data.items, function(memo, item){ return memo + parseInt(item.price); }, 0); 
```

## Ordenar Objeto 
###### Tags: `underscore` `js` `sortBy`
```js
    _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
	=> [5, 4, 6, 3, 1, 2]

	-- Orden Ascendente
	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	_.sortBy(stooges, 'name');
	=> [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

	-- Orden Descendente
	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	_.sortBy(stooges, 'name', 'desc').reverse();
	=> [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
```

## Array column en JS 
###### Tags: `underscore` `js` `pluck`
```js
	let serials = _.pluck($scope.dtSerials.rows, 'codSerie');
```

## Consultar si un valor esta contenido en un arreglo
###### Tags: `underscore` `js` `contains`
```js
	_.contains([1, 2, 3], 3); 	-- true
```

## Validar si una variable es boleana
###### Tags: `underscore` `js` `isBoolean`
```js
	_.isBoolean(null); 		-- false
	_.isBoolean(true); 		-- true
```

## Validar si una variable es arreglo
###### Tags: `underscore` `js` `isArray`

```js
	(function(){ return _.isArray(arguments); })();		-- false
	_.isArray([1,2,3]);									-- true
```

## Validar si una variable es objeto
###### Tags: `underscore` `js` `isObject`

```js
	_.isObject({});				-- true
	_.isObject(1)				-- false
```

## Iterar arreglo objetos
###### Tags: `underscore` `js` `each`

**_.each(list, iteratee, [context]) Alias: forEach**:  
Itera sobre una lista de elementos, dando cada uno a su vez 
a una función iteratee . El iteratee está vinculado al objeto de contexto , si se pasa uno. Cada invocación de iteratee se 
llama con tres argumentos: (elemento, índice, lista) . Si la lista es un objeto de JavaScript, los argumentos de iteratee 
serán (valor, clave, lista) . Devuelve la lista para encadenar.

```js
    _.each ([1, 2, 3], alerta);                     // Alerta cada número por turno ...
    _.each ({uno: 1, dos: 2, tres: 3}, alerta);     // Alerta cada valor numérico a su vez ...

    // Iterar key y valor de un bojeto
    _.each($scope.hoursExtraMasiveRows, (row, key) => {
        console.log('row', row);
        console.log('key', key);
    });
```

## Buscar ultimo index por atributo
###### Tags: `underscore` `js` `findLastIndex`

**_.findLastIndex(array, predicate, [context])**:  
Como _.findIndex pero itera la matriz a la inversa, 
devolviendo el índice más cercano al final donde pasa la prueba de verdad del predicado.  

```js
    var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];

    _.findLastIndex(users, { name: 'Ted' });    // Salida '3'
```


# Underscore.string

- [Documentación](https://gabceb.github.io/underscore.string.site/)  
- [`Descargar librería`](libraries/underscore.string.min.zip)  


Unificar underscore con underscore.string - Implementación:   
```html
	<!-- Integración underscore.string con underscore -->
	<script src="<?= base_url('resources/plugins/underscore.string.min.js') ?>"></script>
	<script> _.mixin(s.exports()); </script> 
```