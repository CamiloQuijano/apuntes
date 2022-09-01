[`Volver`](../index.html)

# Excel

## Cambiar formato texto
###### Tags: `excel` `mayusc` `minusc` `nompopio`

```js
	=MAYUSC(Celda)      	// Pasar a mayúscula.            	Salida: gOOgle - GOOGLE 
	=MINUSC(Celda)      	// Pasar a minúscula.            	Salida: gOOgle - google
	=NOMPROPIO(Celda)   	// Pasar formato nombre Propio   	Salida: gOOgle - Google
```

## Cambiar formato fechas - pasar a texto
###### Tags: `excel` `texto`

```js
	FECHA = '1/01/2023';
	=TEXTO(FECHA|"yyyy")            // Año              	Salida: 2022
	=TEXTO(FECHA|"mm")              // Periodo          	Salida: 01
	=TEXTO(FECHA|"mmmm")            // Mes              	Salida: enero
	=TEXTO(FECHA;"aaaa")            // Día              	Salida: viernes
	=TEXTO(FECHA|"dd/mm/yyyy")      // Formato fecha    	Salida: 01/01/2022
	=TEXTO(FECHA;"yyyy-mm-dd")      // Formato fecha    	Salida: 2022-08-12
	=TEXTO(FECHA;"yy-mm-dd")        // Formato fecha    	Salida: 22-08-12
	=HOY()                          // Fecha actual     	Salida: 2/01/2022
```

## Concatenar textos
###### Tags: `excel` `CONCATENAR`

```js
	=CONCATENAR('TEXTO1'; ' | '; 'TEXTO2')    	// TEXTO1 | TEXTO 2
	=CONCATENAR('A'; 'B'; 'C')                	// TEXTO1 | TEXTO 2
```