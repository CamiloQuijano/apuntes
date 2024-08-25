[`Volver`](../index.html)

# Redis
###### Tags: `redis`

```bash
	REDIS
	HGETALL "KEY"                     # Ver el contenido del hash
	HGET "KEY" "KEY_ARRAY"            # Ver el contenido del key del hash indicado 
	HINCRBY "KEY" "KEY_ARRAY" "NUM"	  # Incrementa valir de un key del hash indicado, num cantidad a aumentar|reducir
	EXPIRE "KEY" "TIME"	              # Tiempo de expirado de una key, tiempo en segundos 60 = 1min. 
	TTL "KEY"                         # Ver tiempo faltante por espirar 
	flushall                          # Eliminar toda la cache de redis 
```  