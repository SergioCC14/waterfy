App.collections.Sensors = Backbone.Collection.extend({
  model: App.models.Sensor,
  url: '/sensors',

  horizontalSensors: function(){
    return new App.collections.Sensors( this.where({type: 'horizontal'}) )
  },

  gyroscopeSensor: function(){
    return this.where({type: 'gyroscope'})
  },

  horizontalOffset: function(){
    let sensors = this.horizontalSensors()
    let leftSensor  = sensors.findWhere({direction: 'left'})
    let rightSensor = sensors.findWhere({direction: 'right'})
    return (leftSensor.lastMeassureDiff() + rightSensor.lastMeassureDiff()) / 2.0
  },

  degreesOffset: function(){

  }

})
