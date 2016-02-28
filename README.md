# API REST

##### Root
http://ec2-52-17-73-59.eu-west-1.compute.amazonaws.com:3000


##### sensores
http://ec2-52-17-73-59.eu-west-1.compute.amazonaws.com:3000/sensors/1 (donde el 1 es número de sensor que va del 1 hasta el 9)

### Función
-----------
Recibe la información de los sensores y la almacena.

Sirve los datos por websockets a los clientes que se conectan. Estos clientes pueden ser los operarios con una tablet para ayudar al guiado del barco durante el proceso.

Contruida con Ruby on Rails 5.0.0 beta 3, sirviendo los sockets con ActionCable apoyando en Redis
La persistencia se realiza en un MongoDB.

El objetivo de guardar los datos, además de asegurar que los estos llegan al cliente y no se pierden en la comunicación, poder realizar una simulación a posteriori, revisar qué ha fallado e incluso poder sacar modelos estadísticos que ayuden a mejorar las instalaciones y mejorar el servicio así como minimizar riesgos ya que estamos tratando productos de gran valor.


### Resumen del stack de la API
--------------
  - Framework: Ruby on Rails 5.0.0 beta 3
  - Websockets: ActionCable
  - Persistencia: MongoDB
  - Encolado de sockets en tiempo real: Redis
  - Servidor web: Puma
  - Frontal: Backbone.js + Marionette.js + Three.js
  - Estilos: Bootstrap
  Montado sobre un Ubuntu 14.04 en una instancia EC2.t2.micro de Amazon Web Services

# Frontal Web
==============





# Placa Udoo
==============

https://github.com/SergioCC14/udoo-talker






---------------------------------------------
---------------------------------------------
---------------------------------------------



# waterfy
The sea needs a revolution. We have the idea. The sea have water.

# Server
ec2-52-17-73-59.eu-west-1.compute.amazonaws.com

# SSH
ssh -i EC2Confisio.pem ubuntu@ec2-52-17-73-59.eu-west-1.compute.amazonaws.com

## mongo
  sudo service mongod start
  sudo service mongod stop
  sudo service mongod restart
  https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

## redis
  http://redis.io/topics/quickstart
