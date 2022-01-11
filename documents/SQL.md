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
	SET IDENTITY_INSERT NombreTabla ON; 	// Deshabilitar
	SET IDENTITY_INSERT NombreTabla OFF;	// Habilitar
```

## Len - Consultar por cantidad de caracteres
```sql
	select * from crm_cliente where LEN(tel2) >= '11'
```	

## Datediff - Diferencias entre fechas - timestamp
```sql	
	SELECT *
	FROM v_AyudaVentasRecargasPendientes
	WHERE (cat_dis = '002' AND DATEDIFF(hour, fecCrea, getdate()) >= 72) 
	   OR (cat_dis = '001' AND DATEDIFF(hour, fecCrea, getdate()) >= 480)
```

## Rellenar de 0 a la izquierda
```sql	
	SELECT REPLACE(STR('20', 3), SPACE(1), '0');
```

## Extraer número de string
```sql	
	SELECT SUBSTRING('CVD1329', PATINDEX('%[0-9]%', 'CVD1329'), LEN('CVD1329'))
```

## Validar si una columna contiene un texto especifico charIndex
```sql	
	DECLARE @document VARCHAR(64);  
	SELECT @document = 'Reflectors are vital safety components of your bicycle.';  
	SELECT CHARINDEX('bicycle', @document);  
	// Salida 48 (Index de donde encuentra la coincidencia)
```

## select control null columnas numericas - isnull 
```sql	
	SELECT ISNULL(totalvalor, 0) WHERE table 
```

## Extraer informacion fecha - fecha actual
###### Tags: `SQL` `getdate` `YEAR` `MONTH` `DAY`
```sql	
SELECT getdate()			-- 2021-05-19 19:03:06.663
SELECT YEAR(GetDate())		-- 2021
SELECT MONTH(GetDate())		-- 5
SELECT DAY(GetDate())		-- 19
```

## Cambiar Formato Dinero
###### Tags: `SQL` `FORMAT` `currency` 
```sql
	SELECT FORMAT(25000, 'C' ,'En-Us')			-- $25,000.00
```

## Cambiar Formato fecha con format
###### Tags: `SQL` `getdate` `FORMAT` `dd/MM/yyyy, hh:mm:ss`

Keys para formatos de fechas 
```html
	FORMATO   	DESCRIPCIÓN				SALIDA
	dd			Día del mes    			(01 to 31)  
	dddd  		Nombre día del mes 		(Miercoles)  
	MM    		Número mes 				(01 to 12)  
	MMM   		Nombre mes abreviado   	(May.)  
	MMMM  		Nombre mes Completo    	(Mayo)  
	yy			Año en 2 dígitos   		(21)  
	yyyy  		Año en 4 dígitos   		(2021)  
	hh			Hora en formato    		(01 to 12)  
	HH			Hora en formato 24H.   	(00 to 23)  
	mm			Minutos   	 			(00 to 59)  
	ss			Segundos  	 			(00 to 59)  
	tt			AM or PM   				(No funciona)  
```

Ejemplos implementados 
```sql	
	select FORMAT(getdate(), 'yyyy/MM/dd') as date 				-- 2020/09/09
	SELECT FORMAT(getdate(), 'dd/MM/yyyy') as date 				-- 21/03/2018
	SELECT FORMAT(getdate(), 'dd/MM/yyyy, hh:mm:ss') as date   	-- 21/03/2018, 11:36:14
	SELECT FORMAT(getdate(), 'dddd, MMMM, yyyy') as date   		-- Miercoles, mayo 2021
	SELECT FORMAT(getdate(), 'MMM dd yyyy') as date				-- Mar 21 2018 | May, 19 2021
	SELECT FORMAT(getdate(), 'MM.dd.yy') as date   				-- 03.21.18
	SELECT FORMAT(getdate(), 'MM-dd-yy') as date	   			-- 03-21-18
	SELECT FORMAT(getdate(), 'hh:mm:ss tt ') as date   			-- 11:36:14 AM (AM/PM no found)
	select FORMAT(getdate(), 'MM/dd/yyyy hh:mm:s tt') 	 		-- 05/19/2021 03:12:34 
	SELECT Format(getdate(), 'hh:mm tt') 				  		-- returns 02:07 PM (AM/PM no found)
```


## Cambiar Formato fecha con convert
###### Tags: `SQL` `getdate` `CONVERT`

```sql	
	SELECT CONVERT(VARCHAR(50), fechaDesde, 103)   	-- Formato 09/09/2020
	SELECT CONVERT(VARCHAR(50), getdate(), 121)		-- Formato 2020-09-09 17:59:04.387
	SELECT CONVERT(VARCHAR(50), getdate(), 103)		-- Formato 09/09/2020
```

## Incremetar o restar dias a una fecha
###### Tags: `SQL` `DATEADD` `SECOND` `MINUTE` `HOUR` `DAY`
```sql
	SELECT DATEADD(SECOND, 1, fecCrea)			// Incremental 1 segundo a la columna fecCrea
	SELECT DATEADD(MINUTE, 1, fecCrea)			// Incremental 1 minuto a la columna fecCrea
	SELECT DATEADD(HOUR, 1, fecCrea)  			// Incremental 1 hora a la columna fecCrea
	SELECT DATEADD(DAY, 1, fecCrea)   			// Incremental 1 dia a la columna fecCrea
	SELECT DATEADD(DAY, -1, fecCrea)      		// Resta 1 dia a la columna fecCrea
	SELECT DATEADD(DAY, -1, getdate())			// Resta 1 dia a la fecha actual
```

## Validar contenido numerico de columna
###### Tags: `SQL` `ISNUMERIC`
```sql
	SELECT ISNUMERIC('ABC')			// 0
	SELECT ISNUMERIC('ABC123') 		// 0
	SELECT ISNUMERIC(112)  			// 1
	SELECT ISNUMERIC(112.5)			// 1
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
	SELECT name FROM Singes.sys.tables WHERE name LIKE '%TABLA%'
	SELECT name FROM Singes.sys.views WHERE name LIKE '%TABLA%'
```
	
## Crear una tabla a partir de otra
```sql
	// Con información
	SELECT * INTO WEB_TMP_CARGUE_jecruz 
	FROM WEB_TMP_CARGUE_lfrodriguez;

	// Sin Información
	SELECT * INTO "inv_Item_homologo" 
	FROM SINGES.."inv_Item_homologo" where id = 0
```

## Crear una tabla temporal a partir de una consulta
###### Tags: `SQL` `create` `temporal`
```sql
	SELECT campo1, campo2
	INTO #nombretablatemporal
	FROM inv_Seriales
```

## Insertar registros de una tabla a otra
```sql
	SET IDENTITY_INSERT cf_productoPrecio ON
	INSERT INTO cf_productoPrecio (id, idProducto, descripcion, estado, usuario, ip)
	select id, idProducto, descripcion, estado, usuario, ip from singes..cf_productoPrecio
	SET IDENTITY_INSERT cf_productoPrecio OFF
	
	// Ejemplo 2
	INSERT INTO inv_consecsuc (cod_suc, cod_con, des_con, num_ini, car_con, num_act, fec_res) 
	SELECT cod_suc, '212', 'Asignación DTH', '1', car_con, lon_con, '01/01/1990'  
	FROM inv_consecsuc WHERE cod_con = '010';
```	

## Select con CASE WHEN THEN ELSE END multiple
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

## Alter table Column add-drop

[SQL AlterTable](https://www.1keydata.com/es/sql/sql-alter-table.php)

```sql
	// Agregar columna
	ALTER TABLE portal_mantenimientoPcHvCab 
	ADD usuModifica VARCHAR(15) null default(NULL); 
	
	// Agregar multiples columnas 
	ALTER TABLE "inv_NoSeriales" 
		ADD 
			garantiaUnidad MONEY null default(0),
			garantiaPesos MONEY null default(0); 
	
	-- Modificar columna
	ALTER TABLE inv_listaPreciosCabeza ALTER COLUMN ip VARCHAR(20);
	
	// Eliminar columna
	ALTER TABLE Singes..portal_mantenimientoPcHvCab DROP COLUMN usu_modifica ;
```

## Alter table Foreign key - Constraint
```sql
	// Agregar Foreign key a tabla existente
	ALTER TABLE Singes..crm_proyectos 
	ADD FOREIGN KEY (nodoIdAsignado) REFERENCES com_nodoComisiones(id)
	
	// Eliminar UNIQUE KEY
	ALTER TABLE portal_mantenimientoHardwareTipo 
	DROP CONSTRAINT UQ__portal_m__298336B621DEBDAB;
```

## Actualizar primary keys tabla
```sql		
	-- Primero se consulta como se llama
	SP_HELP cf_record_contratos_claro 

	-- Cambio primary keys (Primero se elimina, posteriormente se reconstruye)
	ALTER TABLE cf_record_contratos_claro DROP CONSTRAINT PK_cf_record_contratos_claro
	ALTER TABLE cf_record_contratos_claro ADD PRIMARY KEY (ordenTrabajo, tipoRegistro, descripcionServicio)
```

## Crear tabla
```sql
	CREATE TABLE crm_clienteContactos ( 
	  id BIGINT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	  clienteId BIGINT NOT NULL,
	  nombre VARCHAR(50) NOT NULL, 
	  apellido VARCHAR(50) NOT NULL, 
	  cargo VARCHAR(50) NOT NULL, 
	  direccion VARCHAR(60) NOT NULL, 
	  telefono VARCHAR(20) NOT NULL, 
	  email VARCHAR(30) NOT NULL, 
	  imagen VARCHAR(20) NULL,
	  fechaCreacion DATETIME NULL DEFAULT GETDATE(), 
	  eliminado BIT DEFAULT 0,
	  FOREIGN KEY (clienteId) REFERENCES crm_cliente(id)
	); 
```	

## Crear vistas
```sql
	CREATE VIEW V_ListaAccesorioxSucursal_new AS
	SELECT        l.id, gr.codSuc
	FROM            dbo.inv_listaPreciosCabeza AS l INNER JOIN
							 dbo.inv_listaPreciosAsignacion AS la ON la.idLista = l.id INNER JOIN
							 dbo.com_grupoComision AS gr ON la.idGrupo = gr.id
	WHERE        (l.estado = 1) AND (l.idTipoLista IN (2, 3))
	GROUP BY l.id, gr.codSuc
```

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