# Arquitecturas software para la nube

### 1º Ejercicio:

Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

En FP de grado superior realice una aplicación Web que consistente en la ventas de entradas, esta web estaba inspirada en la conocida aplicación ticketmaster, pero a pequeña escala, se puede consultar los distintos tipos de eventos, reservado y compra de entradas, además de poder seleccionar la disponibilidad de butacas en caso de existir la posibilidad. Estaba desarrollada principalmente en HTML, CSS, PHP y Jquery y para el almacenamiento de datos se usaba una de software libre que estaba comenzando Firebird.

Como evolución, se podría transformar nuestra arquitectura por una basada en microservicios, se conocen todos los eventos y se podrían crear pequeños microservicios para cada uno de ellos para mejorar la calidad de navegación y el tiempo de respuesta para los clientes, como por ejemplo la gestión de usuarios, gestión de entradas, la disponibilidad de butacas, la gestión de locales, etc.

### 2º Ejercicio:

En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

Se podrían utilizar varios lenguajes y ver si un lenguaje u otro ofrece mejor rendimiento en los distintos microservicio que se crearían para reemplazar los eventos.

Por ejemplo el almacenamiento de datos mas conveniente podría ser una estructura no relacional y a tiempo real como Firebase para la gestión de las entradas, eventos disponibles y selección de asientos, y se podría utilizar otra base de datos relacional para la gestión de locales, gestión de usuarios, gestión contables...