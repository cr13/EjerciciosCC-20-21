### Ejercicio 1. Instalar [**etcd3**](https://computingforgeeks.com/how-to-install-etcd-on-ubuntu-18-04-ubuntu-16-04/), averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con **etcdctl**) y la recuperación desde el mini-programa que hagáis.

Una vez instalado podemos verificar con:

```bash

# Checkeamos el estado del servicio
sudo systemctl  status etcd.service

# El servicio se lanza en el puerto 2379 de localhost
ss -tunelp | grep 2379

etcdctl member list

```

![etcd3 verificacion funcionamiento](./img/t6/etcd3_verifiacion.png)

Para realizar un ejemplo del almacenamiento de una clave valor, vamos a almacenar el puerto donde vamos a ejecutar el servicio. Para ello:

```bash

etcdctl put pruebaT6port 3008


```



### Ejercicio 2: Realizar una aplicación básica que use algún microframework para devolver alguna estructura de datos del modelo que se viene usando en el curso u otra que se desee. La intención de este ejercicio es simplemente que se vea el funcionamiento básico de un microframework, especialmente si es alguno que, como **express**, tiene un generador de código. Se puede usar, por otro lado, el lenguaje y microframework que se desee.


### Ejercicio 3: Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

### Ejercicio 4: Crear pruebas para las diferentes rutas de la aplicación.

### Ejercicio 5: Experimentar con diferentes gestores de procesos y servidores web front-end para un microservicio que se haya hecho con antelación, por ejemplo en la sección anterior.

### Ejercicio 6: Usar **rake**, **invoke** o la herramienta equivalente en tu lenguaje de programación para programar diferentes tareas que se puedan lanzar fácilmente desde la línea de órdenes un microservicio.
