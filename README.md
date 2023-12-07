# Next.js Tesloshop App
Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

* El -d significa __detached__

* Url de Mongo
```
MONGO_URL=mongodb://localhost:27017/xixdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de datos con información de pruebas

Llamar a:
```
http://localhost:3000/api/seed
```