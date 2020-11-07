#Imagen y versión que usaremos de base
#FROM fedora:latest
#FROM alpine:latest
FROM centos:latest

## Instalamos NodeJS y npm
#Descomentar para fedora

#RUN sudo dnf install -y nodejs npm

#Descomentar para alpine

#RUN apk add --no-cache nodejs npm

#Descomentar para centos

RUN yum install -y nodejs npm

#Creamos el directorio de trabajo

WORKDIR /usr/src/app

#Se copia la aplicación al contenedor

COPY . .

#Definimos la acción a ejecutar para levantar nuestra aplicación

CMD ["npm","start"]