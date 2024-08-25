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

## Ordenar Resultados dinamicamente
###### Tags: `mysql` `ORDERBY`

Opción 1:
```sql
	-- Opción 1 (SELECT)
	SELECT a.id, a.name, a.validate, m.name, a.points, 
		(CASE 
			WHEN m.name = 'Gold' THEN 1 
			WHEN m.name = 'Silver' THEN 2 
			ELSE 3 
		END) as orderByColumn 
	FROM Account a
	JOIN Membership m on m.id = a.membership_id 
	ORDER BY orderByColumn, a.validate DESC, a.points DESC; 

	-- Opción 2 (ORDER BY)
	SELECT a.id, a.name, a.validate, m.name, a.points
	FROM Account a
	JOIN Membership m on m.id = a.membership_id
	ORDER BY 
		CASE 
			WHEN m.name = 'Gold' THEN 1 
			WHEN m.name = 'Silver' THEN 2 
			ELSE 3 
		END, 
		a.validate DESC, 
		a.points DESC;
```

## Agregar columna y relacion a tabla existente
###### Tags: `mysql` `CONSTRAINT` `FOREIGN` `REFERENCES` 
```sql
	-- Agregar columna
	ALTER TABLE `at_permisos`
	ADD`grupo_permisos_id` INT NULL AFTER `permiso_descripcion`;

	-- Crear relacion
	ALTER TABLE `at_permisos`
	ADD CONSTRAINT `fk_at_permisos_at_grupo_permisos1`
	FOREIGN KEY (`grupo_permisos_id`)
	REFERENCES `at_grupo_permisos` (`id`);
```