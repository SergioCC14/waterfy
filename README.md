# Proyecto para el hackathon Sanjurjo Badía
@SergioCC14 - @cicloon - @iagolast - @danielRomero

## API REST

##### Root
http://ec2-52-17-73-59.eu-west-1.compute.amazonaws.com:3000


##### sensores
http://ec2-52-17-73-59.eu-west-1.compute.amazonaws.com:3000/sensors/1 (donde el 1 es número de sensor que va del 1 hasta el 9)

### Función
-----------
La placa Udoo manda la información de los sensores a la API, esta la almacena y al mismo tiempo la manda mediante un broadcast de sockets a todos los clientes conectados. Estos clientes pueden ser los operarios con una tablet para ayudar al guiado del barco durante el proceso.


El objetivo de guardar los datos, además de asegurar que los estos llegan al cliente y no se pierden en la comunicación, es de poder realizar una simulación a posteriori, revisar qué ha fallado (si se da el caso) e incluso poder sacar modelos estadísticos que ayuden a mejorar las instalaciones y mejorar el servicio así como minimizar riesgos ya que estamos tratando productos de gran valor.


### Resumen del stack
--------------
  - Framework: Ruby on Rails 5.0.0 beta 3
  - Websockets: ActionCable
  - Persistencia: MongoDB
  - Encolado de sockets en tiempo real: Redis
  - Servidor web: Puma
  - Frontal: Backbone.js + Marionette.js + Three.js
  - Estilos: Bootstrap
  Montado sobre un Ubuntu 14.04 en una instancia EC2.t2.micro de Amazon Web Services

  - Placa Udoo: leemos datos con Python y NodeJS. Recibimos información de los sensores (acelerómetro, giroscopio, magnetoscopio y dos sensores de proximidad).

# + info del trabajo realizado con la Placa Udoo

https://github.com/SergioCC14/udoo-talker
