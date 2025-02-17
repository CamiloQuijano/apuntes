<style> body { tab-size: 4; } </style>
[`Volver`](../index.html)

# SQL
- [Manual SQL PDF](sql/SQL-NotesforProfessonals.pdf)

## Restablecer Autoincremental tabla a 1 
###### Tags: `SQL` `CHECKIDENT`

```sql
	DBCC CHECKIDENT (aseg_archivo, RESEED, 0)
```

## Identity_insert - Deshabilitar-Habilitar autoincremental columna primary
###### Tags: `SQL` `Identity_insert`

(ON=>Deshabilitar | OFF=>Habilitar)

```sql
	SET IDENTITY_INSERT NombreTabla ON; 	-- Deshabilitar
	SET IDENTITY_INSERT NombreTabla OFF;	-- Habilitar
```

## Actualizar lenguaje de sesion
###### Tags: `SQL` `SET` `LANGUAGE`

```sql
	 SET LANGUAGE Spanish; 
```


## Datediff - Diferencias entre fechas - timestamp
###### Tags: `SQL` `DATEDIFF`

```sql	

	-- En formato UNIX / Milisegundos 
	select DATEDIFF(s, '1970-01-01', GETUTCDATE()) 
	-- SALIDA: formato unix 1726506108 (2024-09-16 14:01:48.563)
	
	-- En SELECT
	SELECT DATEDIFF(year, '2017/08/25', '2023/08/25') AS DateDiff; 
	-- SALIDA: 6 (Años)
	
	-- En FILTRO
	SELECT *
	FROM v_AyudaVentasRecargasPendientes
	WHERE (cat_dis = '002' AND DATEDIFF(hour, fecCrea, getdate()) >= 72) 
	   OR (cat_dis = '001' AND DATEDIFF(hour, fecCrea, getdate()) >= 480)
```
```bash
	year, yyyy, yy       Year
	quarter, qq, q       Quarter
	month, mm, m         Month
	dayofyear            Day of the year
	day, dy, y           Day
	week, ww, wk         Week
	weekday, dw, w       Weekday
	hour, hh             Hour
	minute, mi, n        Minute
	second, ss, s        Second
	millisecond, ms      Millisecond
```

## Rellenar de 0 a la izquierda
```sql	
	SELECT REPLACE(STR('20', 3), SPACE(1), '0');
```

## Consultar y remplazar secciones de texto
###### Tags: `SQL` `REPLACE` `LIKE`
```sql	
	SELECT * FROM menu WHERE ruta LIKE '%portalA/accesoA/%' -- Antes
	SELECT * FROM menu WHERE ruta LIKE '%portalB/accesoB/%' -- Despues 
	
	-- 1er: la columna a modificar, 2do: Valor actual, 3ro: Valor a cambiar
	UPDATE menu SET ruta = REPLACE(ruta, 'portalA/accesoA/', 'portalB/accesoB/') 
	WHERE ruta LIKE '%portalA/accesoA/%'
```



## Len - Consultar por cantidad de caracteres
```sql
	select * from crm_cliente where LEN(tel2) >= '11'
```	

## Substring - Extraer texto
###### Tags: `SQL` `SUBSTRING`
```sql	
	SELECT SUBSTRING('SQLTest', 1, 3) AS ExtractString; 	-- SQLTe
```

## Extraer número de string
###### Tags: `SQL` `SUBSTRING`
```sql	
	SELECT SUBSTRING('CVD1329', PATINDEX('%[0-9]%', 'CVD1329'), LEN('CVD1329'))
```

## Texto a mayuscula minuscula
###### Tags: `SQL` `LOWER` `UPPER`
```sql	
	SELECT LOWER('SQL Example');		-- sql example
	SELECT UPPER('SQL Example');		-- SQL EXAMPLE
```

## Redondear
###### Tags: `SQL` `CEILING` `FLOOR` `ROUND`
```sql	
	-- Hacia arriba
	CEILING(25.75);		-- 26
	CEILING(25.1);		-- 26
	
	-- Hacia abajo
	FLOOR(25.75);		-- 25
	FLOOR(25.1);		-- 25
	
	-- Estandar
	ROUND(25.75, 0);    -- 26
	ROUND(25.4, 0);     -- 25
	ROUND(748.58, -1)   -- 750.00
	ROUND(748.58, -2)   -- 700.00
	ROUND(748.58, -3)   -- ERROR - No es posible redondear a esta precisión
```

## Promedio
###### Tags: `SQL` `AVG`
```sql
	SELECT AVG(Price) FROM Products;
```


## Validar si una columna contiene un texto especifico charIndex
```sql	
	DECLARE @document VARCHAR(64);  
	SELECT @document = 'Reflectors are vital safety components of your bicycle.';  
	SELECT CHARINDEX('bicycle', @document);  
	-- Salida 48 (Index de donde encuentra la coincidencia)
```

## select control null columnas numericas - isnull 
```sql	
	SELECT ISNULL(totalvalor, 0) WHERE table 
```

## Extraer informacion fecha - fecha actual
###### Tags: `SQL` `getdate` `YEAR` `MONTH` `DAY`
```sql	
	SELECT getdate()       		-- Fecha Completa: 2021-05-19 19:03:06.663
	SELECT YEAR(GetDate())		-- Año: 2021
	SELECT MONTH(GetDate())   	-- Mes: 5
	SELECT DAY(GetDate()) 		-- Día: 19
```

## Cambiar Formato Dinero
###### Tags: `SQL` `FORMAT` `currency` 
```sql
	SELECT FORMAT(25000, 'C' ,'En-Us')		-- $25,000.00
```

## Cambiar Formato fecha con datepart
###### Tags: `SQL` `FORMAT` `DATEPART` `MILLISECOND` `HOUR` `MINUTE` 
```sql
	SELECT DATEPART(MILLISECOND, GETDATE())    -- 450
	SELECT DATEPART(HOUR, GETDATE())           -- 13
	SELECT DATEPART(MINUTE, GETDATE())         -- 55
```


## Cambiar Formato fecha con format
###### Tags: `SQL` `getdate` `FORMAT` `dd/MM/yyyy, hh:mm:ss`

Keys para formatos de fechas 
```html
	FORMATO   	DESCRIPCIÓN    		        SALIDA
	dd     		Día del mes    	        	(01 to 31)  
	dddd  		Nombre día del mes      	(Miercoles)  
	MM    		Número mes     	        	(01 to 12)  
	MMM   		Nombre mes abreviado   		(May.)  
	MMMM  		Nombre mes Completo    		(Mayo)  
	yy     		Año en 2 dígitos       		(21)  
	yyyy  		Año en 4 dígitos       		(2021)  
	hh     		Hora en formato        		(01 to 12)  
	HH     		Hora en formato 24H.   		(00 to 23)  
	mm     		Minutos        	        	(00 to 59)  
	ss     		Segundos       	        	(00 to 59)  
	tt     		AM or PM       	        	(No funciona)  
```

Ejemplos implementados 
```sql	
    SELECT FORMAT(getDate(),'MM')                         -- 09
	SELECT FORMAT(getdate(), 'yyyy/MM/dd')                -- 2020/09/09
	SELECT FORMAT(getdate(), 'dd/MM/yyyy')                -- 21/03/2018
	SELECT FORMAT(getdate(), 'dd/MM/yyyy, hh:mm:ss')      -- 21/03/2018, 11:36:14
	SELECT FORMAT(getdate(), 'dddd, MMMM, yyyy')          -- Miercoles, mayo 2021
	SELECT FORMAT(getdate(), 'MMM dd yyyy')               -- Mar 21 2018 | May, 19 2021
	SELECT FORMAT(getdate(), 'MM.dd.yy')                  -- 03.21.18
	SELECT FORMAT(getdate(), 'MM-dd-yy')                  -- 03-21-18
	SELECT FORMAT(getdate(), 'hh:mm:ss tt ')              -- 11:36:14 AM (AM/PM no found)
	SELECT FORMAT(getdate(), 'MM/dd/yyyy hh:mm:s tt')     -- 05/19/2021 03:12:34 
	SELECT FORMAT(getdate(), 'hh:mm tt')                  -- returns 02:07 PM (AM/PM no found)
```


## Cambiar Formato fecha con convert
###### Tags: `SQL` `getdate` `CONVERT`

```sql	
	SELECT CONVERT(VARCHAR(50), fechaDesde, 103)            -- Formato 09/09/2020
	SELECT CONVERT(VARCHAR(50), getdate(), 121)             -- Formato 2020-09-09 17:59:04.387
	SELECT CONVERT(VARCHAR(50), getdate(), 103)             -- Formato 09/09/2020
	SELECT CONVERT(VARCHAR(50), fecCrea, 20)                -- Formato 2021-10-29 08:55:02
	SELECT CONVERT(VARCHAR(10), getdate(), 126)             -- Formato 2021-10-29 
```

## Incremetar o restar dias a una fecha
###### Tags: `SQL` `DATEADD` `SECOND` `MINUTE` `HOUR` `DAY`
```sql
	SELECT DATEADD(SECOND, 1, fecCrea)      		-- Incremental 1 segundo a la columna fecCrea
	SELECT DATEADD(MINUTE, 1, fecCrea)      		-- Incremental 1 minuto a la columna fecCrea
	SELECT DATEADD(HOUR, 1, fecCrea)        		-- Incremental 1 hora a la columna fecCrea
	SELECT DATEADD(DAY, 1, fecCrea)         		-- Incremental 1 dia a la columna fecCrea
	SELECT DATEADD(DAY, -1, fecCrea)        		-- Resta 1 dia a la columna fecCrea
	SELECT DATEADD(DAY, -1, getdate())      		-- Resta 1 dia a la fecha actual
```

## Validar si valor es fecha
###### Tags: `SQL` `ISDATE`
```sql
	SELECT ISDATE('2017');				-- 1
	SELECT ISDATE('25-08-2017');		-- 1
	SELECT ISDATE('25/08/2017');		-- 1
	SELECT ISDATE('04/06/2018 04:40');	-- 1
	SELECT ISDATE('20220103');			-- 1
	SELECT ISDATE('Hello world!');		-- 0
	SELECT ISDATE('2017-08-25');		-- 0
	SELECT ISDATE('44792.40186'); 		-- 0  
```

## Validar contenido numerico de columna
###### Tags: `SQL` `ISNUMERIC`
```sql
	SELECT ISNUMERIC(112)  			-- 1
	SELECT ISNUMERIC(112.5)			-- 1
	SELECT ISNUMERIC(60.000)  		-- 1
	SELECT ISNUMERIC('ABC')			-- 0
	SELECT ISNUMERIC('ABC123') 		-- 0
	SELECT ISNUMERIC(NULL)   		-- 0
```

## Quitar espacio vacio al texto a la derecha e izquierda
###### Tags: `SQL` `RTRIM` `LTRIM`
```sql
	SELECT LTRIM(RTRIM('        Ejemplo de quitar espacios en SQL server        '));
	-- Salida: 'Ejemplo de quitar espacios en SQL server'

	SELECT LTRIM('   Ejemplo de quitar espacios en SQL server     ');
	-- Salida: 'Ejemplo de quitar espacios en SQL server     '

	SELECT RTRIM('        Ejemplo de quitar espacios en SQL server        ');
	-- Salida: '        Ejemplo de quitar espacios en SQL server'
```

## Sp_help - Estructura de una tabla
```sql
	SP_HELP portal_mantenimientoHardwareTipo; 
	
	SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	WHERE TABLE_NAME = 'portal_aplicacion'
```
		
## Sys tables - Consultar por nombres de tablas-vistas
```sql
	SELECT name FROM db.sys.tables WHERE name LIKE '%TABLA%'
	SELECT name FROM db.sys.views WHERE name LIKE '%TABLA%'
```
	
## Crear una tabla a partir de otra
```sql
	-- Con información
	SELECT * INTO WEB_TMP_CARGUE_jecruz 
	FROM WEB_TMP_CARGUE_lfrodriguez;

	-- Sin Información
	SELECT * INTO "inv_Item_homologo1" 
	FROM "inv_Item_homologo" where id = 0
```

## Crear una tabla temporal - validar existencia previa
###### Tags: `SQL` `create` `table` `temporal` `OBJECT_ID`
```sql
	IF OBJECT_ID('tempdb.dbo.#tabletemp', 'U') IS NOT NULL DROP TABLE #tabletemp;
	Create table #tabletemp (item VARCHAR(25), costo MONEY, cantidad int);
```

## Crear una tabla temporal a partir de una consulta - validar existencia previa
###### Tags: `SQL` `create` `table` `temporal`
```sql
	IF OBJECT_ID('tempdb.dbo.#nombretablatemporal', 'U') IS NOT NULL DROP TABLE #nombretablatemporal;
	SELECT campo1, campo2
	INTO #nombretablatemporal
	FROM inv_Seriales
```


## Insertar registros de una tabla a otra
```sql
	SET IDENTITY_INSERT tablaProductosDos ON
	INSERT INTO tablaProductosDos (id, idProducto, descripcion, estado)
	select id, idProducto, descripcion, estado FROM tablaProductosUno
	SET IDENTITY_INSERT tablaProductosDos OFF
	
	-- Ejemplo 2 con cambio de valores y filtro
	INSERT INTO inv_consecsuc (sucursal, descripcion, fec_res) 
	SELECT sucursal, 'Doc Test', '01/01/1990' 
	FROM tablaConsecutivos WHERE sucursal = '010';
```	

## Select con CASE WHEN multiple
###### Tags: `SELECT` `CASE` `WHEN` `THEN` `END`

```sql
	SELECT 
		grc.codsuc, gr.sucursal, gr.descGrupo, gr.unidades unidadesSucursal, 
		um.unidades umbral, ((gr.unidades/um.unidades)*100) cumplimiento, 
		us.nombre, us.rol, us.codigo, us.unidades unidadesAsesor, 
		CASE 
			WHEN gr.unidades < 100 THEN us.unidades * 20 
			WHEN gr.unidades >= 100 AND gr.unidades < 150 THEN us.unidades * 30 
			WHEN gr.unidades >= 150 AND gr.unidades < 200 THEN us.unidades * 40
			WHEN gr.unidades >= 200 THEN us.unidades * 45
			ELSE 0 END AS comisionPesos
	FROM #ConsolidadoAsesor us
	JOIN #consolidadoXSucursal gr on gr.sucursal = us.idGrupo
	JOIN #umbralXSucursal um on um.idGrupo = gr.sucursal
	JOIN com_grupoComision grc on grc.id = gr.sucursal
	ORDER by codigo
```

## Actualizar a partir de un select con JOIN
###### Tags: `UPDATE` `JOIN`

```sql
	UPDATE inv_cuerpo
	SET puntosItem = 9.7 
	FROM inv_cuerpo cue 
	JOIN inv_cabeza cab ON cab.id = cue.idcabeza  
	WHERE cab.numDoc = 'TN6238' AND cue.tipVen = 10
```


## Orden registros a partir de CASE WHEN multiple
###### Tags: `ORDER` `CASE` `WHEN` `THEN` `END`

```sql
	SELECT * 
	FROM exampletable
	WHERE col1 = 1
	ORDER BY col1, CASE WHEN col2 in ('X', 'Y', 'Z' ) THEN 0 ELSE 1 END
```


## Alter table Column add-drop

[SQL AlterTable](https://www.1keydata.com/es/sql/sql-alter-table.php)

```sql
	-- Agregar columna
	ALTER TABLE portal_mantenimientoPcHvCab 
	ADD usuModifica VARCHAR(15) null default(NULL); 
	
	-- Agregar multiples columnas 
	ALTER TABLE "inv_NoSeriales" 
	ADD 
		garantiaUnidad MONEY null default(0),
		garantiaPesos MONEY null default(0); 
	
	-- Modificar columna
	ALTER TABLE inv_listaPreciosCabeza ALTER COLUMN ip VARCHAR(20);
	
	-- Eliminar columna
	ALTER TABLE portal_mantenimientoPcHvCab DROP COLUMN usu_modifica ;
```

## Agregar llave foranea a columna
###### Tags: `SQL` `table` `alter` `add` `foreign`
```sql
	ALTER TABLE crm_proyectos 
	ADD FOREIGN KEY (nodoIdAsignado) REFERENCES com_nodoComisiones(id)
```

## Eliminar Constraint a tabla
###### Tags: `SQL` `table` `alter` `drop` `constraint` 
```sql
	-- Eliminar UNIQUE KEY
	ALTER TABLE portal_mantenimientoHardwareTipo 
	DROP CONSTRAINT UQ__portal_m__298336B621DEBDAB;
```

## Actualizar valor por defecto de una columna
###### Tags: `SQL` `table` `alter` `default`
```sql
	-- Agregar Foreign key a tabla existente
	ALTER TABLE inv_ReferenciaRelacional 
	ADD DEFAULT 0 FOR importante;
```

## Actualizar primary keys tabla - llave compuesta
```sql		
	-- Primero se consulta como se llama
	SP_HELP cf_record_contratos_claro 

	-- Cambio primary keys (Primero se elimina, posteriormente se reconstruye)
	ALTER TABLE cf_record_contratos_claro DROP CONSTRAINT PK_cf_record_contratos_claro
	ALTER TABLE cf_record_contratos_claro ADD PRIMARY KEY (ordenTrabajo, tipoRegistro, descripcionServicio)
```

## Crear tabla
###### Tags: `SQL` `TABLE` `CREATE` `UNIQUE`

```sql
	CREATE TABLE crm_clienteContactos ( 
	  id BIGINT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	  clienteId BIGINT NOT NULL,
	  nombre VARCHAR(50) NOT NULL, 
	  apellido VARCHAR(50) NOT NULL, 
	  cargo VARCHAR(50) NOT NULL, 
	  direccion VARCHAR(60) NOT NULL, 
	  telefono VARCHAR(20) NOT NULL, 
	  email VARCHAR(30) NOT NULL UNIQUE, 
	  imagen VARCHAR(20) NULL,
	  fechaCreacion DATETIME NULL DEFAULT GETDATE(), 
	  eliminado BIT DEFAULT 0,
	  FOREIGN KEY (clienteId) REFERENCES crm_cliente(id)
	); 
	
	CREATE TABLE trans_transaccionCuerpo(
		id INT PRIMARY KEY IDENTITY(0,1),
		cabezaId INT FOREIGN KEY REFERENCES trans_transaccionCabeza(id),
		productoId INT FOREIGN KEY REFERENCES inv_producto(id),
		nombreProducto VARCHAR(50),
		valor MONEY,
		usuarioId INT FOREIGN KEY REFERENCES usu_usuario(id),
		fechaCreacion DATE DEFAULT GETDATE()
	)
	
```


## Crear vistas
###### Tags: `SQL` `VIEW` `CREATE`

```sql
	CREATE VIEW V_ListaAccesorioxSucursal_new AS
	SELECT l.id, gr.codSuc
	FROM inv_listaPreciosCabeza AS l 
	INNER JOIN inv_listaPreciosAsignacion AS la ON la.idLista = l.id 
	INNER JOIN com_grupoComision AS gr ON la.idGrupo = gr.id
	WHERE (l.estado = 1) AND (l.idTipoLista IN (2, 3))
	GROUP BY l.id, gr.codSuc
```


## Sacar Backup de DB
###### Tags: `SQL` `task` `script`

Generar Backup de una tabla  

1. Haga clic derecho en la base de datos 
2. Seleccione Tareas -> Generar scripts
3. (Haga clic en Siguiente si aparece la pantalla de introducción)
4. Seleccione "Seleccionar objetos de base de datos específicos"
5. Elija los objetos para generar scripts (tablas, procedimientos almacenados, etc.)
6. Haga clic en Siguiente y luego especifique el nombre del archivo de salida.
7. Esto generará solo los esquemas. Si también desea generar scripts de datos, haga clic en el botón Avanzado y desplácese hacia abajo hasta "Tipos de datos para script" y cámbielo de "Solo esquema" a "Solo datos" o "Esquema y datos".
8. Haga clic en Finalizar para generar el script. 


## Proceso SQL 

### transaccion
###### Tags: `TRANSACTION` `BEGIN` `COMMIT` `ROLLBACK` `RAISERROR` `CONCAT` `Excepcion`

```sql
	BEGIN TRANSACTION
	BEGIN TRY	

		-- Generar excepción
		if(@imposApply is null) BEGIN RAISERROR('No impuesto para aplicar',16,1) END
		
		-- Ejemplo 2 excepción concatenando variable
		DECLARE @msm varchar = CONCAT('Precio no disponible', @idItem);
		if(@priceItem is null) BEGIN RAISERROR(@msm,16,1) END

		-- Completar la transacción
		COMMIT TRANSACTION;
		PRINT 'Transacción Finalizada correctamente';

	END TRY
	BEGIN CATCH

		-- Capturar excepción
		SELECT ERROR_LINE() AS [Linea], ERROR_MESSAGE() AS [Mensaje];
		ROLLBACK TRANSACTION;

	END CATCH
```

### Cursor
```sql
	-- Declarar corsos
	DECLARE serialesCursor CURSOR FOR   
	select * FROM #docBody007
	
	OPEN serialesCursor  

		-- Toma el primer registro del Cursor
		declare @item VARCHAR(25), @cost MONEY, @quantity int
		FETCH NEXT FROM serialesCursor   
		INTO @item, @cost, @quantity
		
		-- Validación si no existen más registros en cursor
		WHILE @@FETCH_STATUS = 0  
		BEGIN  
		
			-- Uso variable cursor
			print @item
		
			-- Toma el siguiente registro del Cursor
			FETCH NEXT FROM serialesCursor   
			INTO @item, @cost, @quantity
			
		END   

	-- Cierre y elimina de memoría el cursor
	CLOSE serialesCursor;  
	DEALLOCATE serialesCursor;
		
```

### Consultar y guardar cantidad de registros
###### Tags: `ROWCOUNT` `CURSOR`

```sql
	DECLARE @rowsDocumentsRel int = 0
	DECLARE documentsRelacionados CURSOR FOR   
	SELECT * FROM inv_cabezaDocumentoRelacionado WHERE cabezaId = @idcabeza;
	SET @rowsDocumentsRel = @@ROWCOUNT;
```

### Guardar log de proceso con mensaje estructurado y cantidad de registros
###### Tags: `sql` `CONCAT` 
```sql
	DECLARE @countRows INT;
	DECLARE @response VARCHAR(200);
	SELECT @countRows = count(id) from reporte_documentosPendientesXEmitir
	SET @response = CONCAT('{', '"status":200,"message":"JOB Docs Pendientes x emitir", "registros": "', @countRows, '"}')
	INSERT INTO log_procesosAutomaticos (proceso, respuesta, fecha) VALUES ('singes_reportDocumentPendindEmit', @response, getdate())
```

## Collation
###### Tags: `SQL` `COLLATION`

### Consultar collation actual de una db

```sql
	SELECT name, collation_name FROM sys.databases WHERE name = 'db_name';
	-- Modern_Spanish_CI_AS
```

### Actualizar collation

```sql
	ALTER DATABASE CURRENT COLLATE Modern_Spanish_100_CI_AS;
	ALTER DATABASE CURRENT COLLATE Latin1_general_CI_AI;
```

## SQL - Errores

## Error en JOB - Conversion failed when converting date

Error completo:  
***Executed as user: NT AUTHORITY\NETWORK SERVICE. Conversion failed when converting date and/or time from character string. 
[SQLSTATE 22007] (Error 241).  The step failed.***

Solución:
1. Se sugiere parar lógica a Procedimiento almacenado
2. Se llama en job el proceso almacenado


## Error intercalacion
###### Tags: `COLLATE` `SQL_Latin1_General_CP1_CI_AS` `Modern_Spanish_CI_AS`

Error completo:  
No se puede resolver el conflicto de intercalación entre "SQL_Latin1_General_CP1_CI_AS" y "Modern_Spanish_CI_AS" de la operación equal to.

Solución:
1. A columna que realiza join incluir COLLATE

```sql
CREATE TABLE #CORREOS_VALIDAR (
	id int NOT NULL IDENTITY(1,1) PRIMARY KEY, 
	correo VARCHAR(80) COLLATE DATABASE_DEFAULT,
);
```

## Consultas de administracion

### Consulta tamano de db y tablas
###### Tags: `tables` `size` 

```sql
	SELECT 
	t.NAME AS Tabla,
	s.Name AS Esquema,
	p.rows AS NumeroDeFilas,
	convert(int,((SUM(a.total_pages) * 8) / 1024.00)) AS TotalEspacio_MB_INT,
	CAST(ROUND(((SUM(a.total_pages) * 8) / 1024.00), 2) AS NUMERIC(36, 2)) AS TotalEspacio_MB,
	CAST(ROUND(((SUM(a.used_pages) * 8) / 1024.00), 2) AS NUMERIC(36, 2)) AS EspacioUtilizado_MB, 
	CAST(ROUND(((SUM(a.total_pages) - SUM(a.used_pages)) * 8) / 1024.00, 2) AS NUMERIC(36, 2)) AS EspacioNoUtilizado_MB
	FROM
	sys.tables t
	INNER JOIN sys.indexes i ON t.OBJECT_ID = i.object_id
	INNER JOIN sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
	INNER JOIN sys.allocation_units a ON p.partition_id = a.container_id
	LEFT OUTER JOIN sys.schemas s ON t.schema_id = s.schema_id
	GROUP BY t.Name, s.Name, p.Rows
	ORDER BY TotalEspacio_MB desc
```


### Consulta vistas que estan usando una tabla en especifico
###### Tags: `tables` `views` `referenced_entity_name`

```sql
	-- Consultas
	SELECT TOP 10 v.name, d.referenced_entity_name
	FROM sys.sql_expression_dependencies d
	JOIN sys.views v ON v.object_id = d.referencing_id
	WHERE d.referenced_entity_name = 'inv_rankit'
	
	-- Tablas relacionadas
	SELECT definition FROM sys.objects 
	JOIN object_id = object_id('dbo.v_referenciaCaracteristicas') and type = 'V'

	SELECT TOP 10 * FROM sys.objects
	SELECT TOP 10 * FROM sys.objects where object_id = 8207833 
	SELECT TOP 10 * FROM sys.objects where principal_id = 8207833 
	SELECT TOP 10 * FROM sys.views where object_id = 8207833 
	SELECT TOP 10 * FROM sys.sql_modules  where object_id = 8207833  
	SELECT TOP 10 * FROM sys.sql_expression_dependencies WHERE referencing_id = '8207833'
```

### Represamiento de consultas - matarlas
###### Tags: `tables` `kill` 

```sql
	SELECT sqltext.TEXT,
	req.session_id,
	req.status,
	req.command,
	req.cpu_time,
	req.total_elapsed_time
	FROM sys.dm_exec_requests req
	CROSS APPLY sys.dm_exec_sql_text(sql_handle) AS sqltext
	ORDER BY req.total_elapsed_time
	
	-- Matar una consulta en especifico
	KILL 136
```