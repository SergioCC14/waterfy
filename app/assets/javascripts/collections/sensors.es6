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
    let leftSensor  = sensors.findWhere({direction: 'left'}).lastMeassureDiff()
    let rightSensor = sensors.findWhere({direction: 'right'}).lastMeassureDiff()
    let total = Math.abs(leftSensor) + Math.abs(rightSensor) / 2.0
    if (rightSensor < 0) { total = total * -1.0 }
    return total
  },

  xDegreeOffset: function(){
    return this.findWhere({type: 'accelerometer-x'}).lastMeassureDiff()
  },
  yDegreeOffset: function(){
    return this.findWhere({type: 'accelerometer-y'}).lastMeassureDiff()
  },
  zDegreeOffset: function(){
    return this.findWhere({type: 'accelerometer-z'}).lastMeassureDiff()
  }

})
