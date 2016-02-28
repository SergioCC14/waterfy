App.services.RealTime = class RealtimeService extends App.services.Base {
  constructor(){
    super()
    console.log('real time service up');

    App.commands.setHandler('sensor:data:received', () => {
      App.subscribeToSensors()
    })

    App.commands.setHandler('sensor:measure:received', (data) => {
      console.log('socket data received');
      console.log(data)
      if (typeof data == 'string') { data = JSON.parse(data) }      
      data.forEach( (sensorData) => {
        let sensor = App.sensors.get(sensorData.id)
        console.log('data for sensor: ' + sensorData.id);
        delete sensorData['id']
        console.log(sensorData);
        sensor.addMeassure(sensorData)
      })
      let zOffset = App.sensors.horizontalOffset()
      App.threeDeeView.moveZ( zOffset )
      App.threeDeeView.rotateX( App.sensors.xDegreeOffset()  )
      App.threeDeeView.rotateY( App.sensors.yDegreeOffset()  )
      App.threeDeeView.rotateZ( App.sensors.zDegreeOffset()  )
    })

  }
}
