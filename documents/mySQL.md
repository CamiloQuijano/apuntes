[`Volver`](../index.html)

# MySQL

## Alter Table - Actualizar Columna MySQL
###### Tags: `mysql` `ALTER` `TABLE` `MODIFY` `ADD` `DROP` `COLUMN`
```sql
	-- Agregar
	ALTER TABLE Customers
	ADD Email varchar(255);

	-- Modificar
	ALTER TABLE Singes..inv_listaPreciosCuerpo 
	MODIFY ip VARCHAR(20)
	
	-- Eliminar
	ALTER TABLE Customers
	DROP COLUMN Email;
```

## Crear tabla
###### Tags: `mysql` `CREATE` `TABLE` `CURRENT_TIMESTAMP` `AUTO_INCREMENT`

```sql
	CREATE TABLE IF NOT EXISTS `ip_roles` (
		`id` INT NOT NULL AUTO_INCREMENT,
		`descripcion` VARCHAR(45) NULL,
		`estado` TINYINT(1) NULL DEFAULT 1,
		`fecCreacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (`id`));
```

