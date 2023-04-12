[`Volver`](../index.html)

# Mongo DB

- [Instuctivo - Notas](mongoDb/mongoDb.pdf)

Versión de authSchema - Necesario en min. 3 para mongoDB3.0

```bash
	db.system.version.find( { _id: "authSchema" })		
```  

Descargar UBUNTU 15.04

```bash
// Remover previas instalaciones realizadas
sudo apt-get purge mongodb-org
sudo apt-get autoremove

// Remover antiguas listas de mongo instaladas
sudo rm /etc/apt/sources.list.d/mongodb.list

// Usar repositorio de Debian 
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

// Actualizar e instalar de nuevo
sudo apt-get update
sudo apt-get install -y mongodb-org

// Reinstalar mongo
sudo apt-get install --reinstall mongodb

// Iniciar mongo
sudo service mongod start
```  