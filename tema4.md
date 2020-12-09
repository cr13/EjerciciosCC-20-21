### Ejercicio 1. Haced los dos primeros pasos antes de pasar al tercero.

#### Pasos 
#### 1º Darse de alta. Muchos están conectados con GitHub por lo que puedes usar directamente el usuario ahí. A través de un proceso de autorización, acceder al contenido e incluso informar del resultado de los tests.

#### 2º  Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

![Activar travis en repositorio](img/t2/activate_travis_gestion_porras.png)

#### 3º  Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

En el siguiente enlace podeis acceder al archivo de configuración creado [Archivo travis.yml](https://github.com/cr13/gestion_porras/blob/main/.travis.yml)

A continuación se muestra la ejecución del test pasado con exito.

![Test travis superado](img/t2/test_travis.png)