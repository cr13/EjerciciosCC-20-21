#Imagen y versión que usaremos de base
FROM node:10-alpine

## Instalamos NodeJS y npm
RUN apk add --no-cache nodejs npm

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#Creamos el directorio de trabajo

WORKDIR /home/node/app


#Se copia la aplicación al contenedor

COPY npm-shrinkwrap.json ./

USER node

RUN npm shrinkwrap

COPY --chown=node:node . .

#Se define el puerto
EXPOSE 3002

#Definimos la acción a ejecutar para levantar nuestra aplicación

CMD ["npm","start"]