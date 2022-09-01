[`Volver`](../index.html)

# Excel

## Pasar fecha a texto - cambiar fecha
###### Tags: `excel` `TEXTO`

```js
	$E$3 = '22/08/2022'
	=TEXTO($E$3;"aaaa-mm-dd")   	-- viernes-08-12
	=TEXTO($E$3;"yyyy-mm-dd")   	-- 2022-08-12
	=TEXTO($E$3;"yy-mm-dd")     	-- 22-08-12
```

## Concatenar textos
###### Tags: `excel` `CONCATENAR`

```js
	=CONCATENAR('TEXTO1'; ' | '; 'TEXTO2')    	-- TEXTO1 | TEXTO 2
	=CONCATENAR('A'; 'B'; 'C')                	-- TEXTO1 | TEXTO 2
```