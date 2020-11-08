#Imagen y versión que usaremos de base
FROM alpine:latest

## Instalamos NodeJS y npm
RUN apk add --no-cache nodejs npm

#Creamos el directorio de trabajo

WORKDIR /usr/src/app

#Definimos el directorio del volumen
ADD . /prueba

#Se copia la aplicación al contenedor

COPY . .

#Definimos la acción a ejecutar para levantar nuestra aplicación

CMD ["npm","start"]